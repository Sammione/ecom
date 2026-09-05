/**
 * Standalone Prisma client for the API.
 * Uses a resilient proxy so the server starts even without a DATABASE_URL.
 * When DATABASE_URL is set (e.g. on Railway/Render with Postgres), full DB access is enabled.
 */

let client: any;

try {
  // Dynamically require so missing @prisma/client doesn't crash the import phase
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { PrismaClient } = require('@prisma/client');
  const globalForPrisma = globalThis as unknown as { _prisma: any };
  client = globalForPrisma._prisma || new PrismaClient();
  if (process.env.NODE_ENV !== 'production') globalForPrisma._prisma = client;
} catch {
  // Prisma client not generated / no DATABASE_URL — use no-op proxy
  client = new Proxy({}, {
    get(_target, model) {
      return new Proxy({}, {
        get(_t, method) {
          return () => Promise.reject(
            new Error(`Database not available (model: ${String(model)}.${String(method)})`)
          );
        }
      });
    }
  });
}

export const prisma = client;
