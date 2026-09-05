import Logo from '../../components/Logo';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const res = await login(email, password);
    setLoading(false);

    if (res.success) {
      navigate('/account');
    } else {
      setError(res.error || 'Invalid credentials');
    }
  };

  return (
    <main className="min-h-screen bg-[var(--color-brand-cream)] flex items-center justify-center py-28 px-4">
      <div className="w-full max-w-md bg-white p-8 md:p-12 shadow-sm border border-gray-200 text-center">
        <Logo className="mb-6 mx-auto" />
        <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-brand-purple)] font-bold block mb-1">
          Client Portal
        </span>
        <h1 className="font-playfair text-3xl text-[var(--color-brand-navy)] mb-2">Welcome Back</h1>
        <p className="text-gray-500 font-light mb-8 text-xs">
          Sign in to view your orders, tracked deliveries, and saved wishlist.
        </p>

        {error && (
          <div className="mb-6 p-3 bg-red-50 border border-red-200 text-red-700 text-xs font-semibold text-left">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-left">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs uppercase tracking-wider text-gray-700 font-bold">Email Address *</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-11 border border-gray-300 px-4 text-xs font-light focus:outline-none focus:border-[var(--color-brand-navy)]"
              placeholder="e.g. adaeze@example.com"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <div className="flex justify-between items-center">
              <label className="text-xs uppercase tracking-wider text-gray-700 font-bold">Password *</label>
              <a href="mailto:concierge@ifemi.ng?subject=Password%20Reset%20Request" className="text-[10px] text-gray-400 hover:text-[var(--color-brand-purple)]">
                Forgot Password?
              </a>
            </div>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-11 border border-gray-300 px-4 text-xs font-light focus:outline-none focus:border-[var(--color-brand-navy)]"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 bg-[var(--color-brand-navy)] text-white text-xs uppercase tracking-[0.2em] font-bold hover:bg-[var(--color-brand-purple)] transition-colors mt-2 shadow"
          >
            {loading ? 'Authenticating...' : 'Sign In to Portal →'}
          </button>
        </form>

        <div className="mt-8 text-center text-xs font-light text-gray-500 pt-6 border-t border-gray-100">
          Don't have an account yet?{' '}
          <Link to="/register" className="text-[var(--color-brand-purple)] font-bold hover:underline ml-1">
            Create Account
          </Link>
        </div>
      </div>
    </main>
  );
}
