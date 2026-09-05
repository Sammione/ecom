import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as { prisma: any };

let client: any = null;
try {
  client = globalForPrisma.prisma || new PrismaClient();
} catch (e) {
  // Prisma engine binary or client not initialized
  client = new Proxy({}, {
    get(_target, _model) {
      return new Proxy({}, {
        get(_mTarget, _method) {
          return () => Promise.reject(new Error('Prisma database is not initialized'));
        }
      });
    }
  });
}

export const prisma = client;

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export * from '@prisma/client';
