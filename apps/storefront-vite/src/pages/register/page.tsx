import Logo from '../../components/Logo';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function RegisterPage() {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const res = await register(form);
    setLoading(false);

    if (res.success) {
      navigate('/account');
    } else {
      setError(res.error || 'Registration failed');
    }
  };

  return (
    <main className="min-h-screen bg-[var(--color-brand-cream)] flex items-center justify-center py-28 px-4">
      <div className="w-full max-w-lg bg-white p-8 md:p-12 shadow-sm border border-gray-200 text-center">
        <Logo className="mb-6 mx-auto" />
        <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-brand-purple)] font-bold block mb-1">
          Join The Circle
        </span>
        <h1 className="font-playfair text-3xl text-[var(--color-brand-navy)] mb-2">Create an Account</h1>
        <p className="text-gray-500 font-light mb-8 text-xs">
          Register to access private previews, save your favorite pieces, and manage express deliveries.
        </p>

        {error && (
          <div className="mb-6 p-3 bg-red-50 border border-red-200 text-red-700 text-xs font-semibold text-left">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-xs uppercase tracking-wider text-gray-700 font-bold">First Name *</label>
              <input
                type="text"
                required
                value={form.firstName}
                onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                className="h-11 border border-gray-300 px-4 text-xs font-light focus:outline-none focus:border-[var(--color-brand-navy)]"
                placeholder="Adaeze"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs uppercase tracking-wider text-gray-700 font-bold">Last Name *</label>
              <input
                type="text"
                required
                value={form.lastName}
                onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                className="h-11 border border-gray-300 px-4 text-xs font-light focus:outline-none focus:border-[var(--color-brand-navy)]"
                placeholder="Okonkwo"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs uppercase tracking-wider text-gray-700 font-bold">Email Address *</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="h-11 border border-gray-300 px-4 text-xs font-light focus:outline-none focus:border-[var(--color-brand-navy)]"
              placeholder="adaeze@example.com"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs uppercase tracking-wider text-gray-700 font-bold">Phone Number (WhatsApp)</label>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="h-11 border border-gray-300 px-4 text-xs font-light focus:outline-none focus:border-[var(--color-brand-navy)]"
              placeholder="+234 803 123 4567"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs uppercase tracking-wider text-gray-700 font-bold">Password *</label>
            <input
              type="password"
              required
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="h-11 border border-gray-300 px-4 text-xs font-light focus:outline-none focus:border-[var(--color-brand-navy)]"
              placeholder="Create a strong password"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 bg-[var(--color-brand-navy)] text-white text-xs uppercase tracking-[0.2em] font-bold hover:bg-[var(--color-brand-purple)] transition-colors mt-2 shadow"
          >
            {loading ? 'Creating Account...' : 'Complete Registration →'}
          </button>
        </form>

        <div className="mt-8 text-center text-xs font-light text-gray-500 pt-6 border-t border-gray-100">
          Already have an account?{' '}
          <Link to="/login" className="text-[var(--color-brand-purple)] font-bold hover:underline ml-1">
            Sign In
          </Link>
        </div>
      </div>
    </main>
  );
}
