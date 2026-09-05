// Central API base URL helper
// In production: set VITE_API_URL in your Vercel environment variables
// pointing to your deployed API (e.g. https://your-api.railway.app)
// In development: falls back to empty string so Vite proxy handles /api/* → localhost:4000

export const API_BASE_URL = import.meta.env.VITE_API_URL || '';

export async function apiFetch(path: string, options?: RequestInit) {
  const url = `${API_BASE_URL}${path}`;
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`API error: ${response.status} ${response.statusText}`);
  }
  return response.json();
}
