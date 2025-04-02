'use server';

import prisma from './db';

export const fetchQuizCategories = async function () {
  const categories = await prisma.quizCategory.findMany({
    select: { id: true, title: true, description: true }, // Include description
  });
  console.log(categories);
  return categories;
};
