'use server';

import prisma from './db';

export const fetchQuizCategories = async function () {
  const categories = await prisma.quizCategory.findMany({});
  return categories;
};
