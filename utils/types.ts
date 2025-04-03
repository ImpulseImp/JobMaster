import { Prisma } from '@prisma/client';

export type SectionType = {
  question: string;
  answer: string;
  value: string;
};

export type SideTopicsType = {
  title: string;
  img: string;
  description: string;
};

export type CarouselDataType = { img: string; text: string; url: string };
export type ContentTopicsType = {
  title: string;
  description: string;
};

export type FetchedQuiz = Prisma.QuizGetPayload<{
  include: {
    questions: {
      include: {
        options: true;
      };
    };
  };
}>;
