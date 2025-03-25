import { PrismaClient } from '@prisma/client';

// Ensuring Prisma Client as a singleton
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    // log: ['query', 'info', 'warn', 'error'], // Optional: Add logging for better debugging
  });

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma; // Attach to `globalThis` for reuse in development
}

export default prisma;
