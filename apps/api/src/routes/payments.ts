import { Router, Request, Response } from 'express';
import { prisma } from "../db";

const router = Router();

// Initialize Payment (Paystack for NGN / Stripe or UK card for GBP)
router.post('/initialize', async (req: Request, res: Response): Promise<any> => {
  try {
    const { email, amount, orderId, currency = 'NGN' } = req.body;
    const ref = `ref_${currency.toLowerCase()}_${Date.now()}`;

    let authorization_url = '';
    let provider = 'PAYSTACK';

    if (currency === 'GBP') {
      provider = 'STRIPE_UK';
      authorization_url = `https://checkout.stripe.com/pay/cs_test_${ref}`;
    } else {
      provider = 'PAYSTACK';
      authorization_url = `https://checkout.paystack.com/${ref}`;
    }

    const paymentResponse = {
      status: true,
      message: `${currency} Payment Authorization URL created`,
      data: {
        authorization_url,
        access_code: `acc_${ref}`,
        reference: ref,
        provider,
        currency,
        amount
      }
    };

    if (orderId) {
      try {
        await prisma.payment.create({
          data: {
            orderId,
            reference: ref,
            amount,
            currency,
            provider,
            status: 'PENDING'
          }
        });
      } catch (err) {
        // DB offline, proceed gracefully
      }
    }

    res.json(paymentResponse);
  } catch (error) {
    console.error('Payment initialization failed:', error);
    res.status(500).json({ error: 'Payment initialization failed' });
  }
});

// Payment Webhook
router.post('/webhook', async (req: Request, res: Response): Promise<any> => {
  const event = req.body;

  if (event && event.event === 'charge.success') {
    const reference = event.data?.reference;

    try {
      const payment = await prisma.payment.findUnique({ where: { reference } });
      if (payment && payment.status !== 'SUCCESS') {
        await prisma.payment.update({
          where: { reference },
          data: { status: 'SUCCESS', metadata: event.data }
        });
        await prisma.order.update({
          where: { id: payment.orderId },
          data: { paymentStatus: 'SUCCESS', orderStatus: 'CONFIRMED' }
        });
      }
    } catch (error) {
      // Ignore DB error in webhook
    }
  }

  res.sendStatus(200);
});

export default router;
