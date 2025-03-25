// import prisma from '@/utils/db';
// import { NextResponse } from 'next/server';

// export async function GET() {
//   try {
//     console.log('DATABASE_URL:', process.env.DATABASE_URL); // Debug environment variables
//     const quizCategories = await prisma.quizCategory.findMany({
//       select: { id: true, title: true }, // Fetching specific fields
//     });

//     return NextResponse.json({ success: true, data: quizCategories });
//   } catch (error) {
//     console.error('Prisma connection error:', error);
//     return NextResponse.json({
//       success: false,
//       error: 'failed',
//     });
//   }
// }
