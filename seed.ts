import { PrismaClient } from '@prisma/client';
import slugify from 'slugify'; // Install using: npm install slugify

const prisma = new PrismaClient();

async function main() {
  // Define seed data in Russian with explanations
  const seedData = [
    {
      name: 'Электричество',
      quizzes: [
        {
          title: 'Основы электричества',
          questions: [
            {
              text: 'Что описывает закон Ома?',
              options: [
                { text: 'Ток = Напряжение x Сопротивление', isCorrect: false },
                { text: 'Сопротивление = Ток / Напряжение', isCorrect: false },
                { text: 'Напряжение = Ток x Сопротивление', isCorrect: true },
                { text: 'Ток = Напряжение / Сопротивление', isCorrect: false },
              ],
              answer: 'Напряжение = Ток x Сопротивление',
              explanation:
                'Закон Ома гласит, что напряжение пропорционально произведению тока и сопротивления.',
            },
            {
              text: 'Какая единица измерения мощности?',
              options: [
                { text: 'Ампер', isCorrect: false },
                { text: 'Ватт', isCorrect: true },
                { text: 'Ом', isCorrect: false },
                { text: 'Вольт', isCorrect: false },
              ],
              answer: 'Ватт',
              explanation:
                'Мощность измеряется в ваттах, что отражает скорость потребления или передачи энергии.',
            },
          ],
        },
        {
          title: 'Сложные электрические цепи',
          questions: [
            {
              text: 'Что накапливает конденсатор?',
              options: [
                { text: 'Тепловую энергию', isCorrect: false },
                { text: 'Электрическую энергию', isCorrect: true },
                { text: 'Механическую энергию', isCorrect: false },
                { text: 'Химическую энергию', isCorrect: false },
              ],
              answer: 'Электрическую энергию',
              explanation:
                'Конденсаторы накапливают электрическую энергию в виде электрического поля.',
            },
            {
              text: 'Какая единица измерения индуктивности?',
              options: [
                { text: 'Фарад', isCorrect: false },
                { text: 'Генри', isCorrect: true },
                { text: 'Ом', isCorrect: false },
                { text: 'Ватт', isCorrect: false },
              ],
              answer: 'Генри',
              explanation:
                'Индуктивность измеряется в генри, что описывает способность катушки накапливать магнитную энергию.',
            },
          ],
        },
      ],
    },
    {
      name: 'Гидравлика',
      quizzes: [
        {
          title: 'Основы гидравлики',
          questions: [
            {
              text: 'Какой закон лежит в основе гидравлических систем?',
              options: [
                { text: 'Закон Архимеда', isCorrect: false },
                { text: 'Закон Паскаля', isCorrect: true },
                { text: 'Закон Бернулли', isCorrect: false },
                { text: 'Закон сохранения массы', isCorrect: false },
              ],
              answer: 'Закон Паскаля',
              explanation:
                'Закон Паскаля утверждает, что давление в жидкости передается одинаково во всех направлениях.',
            },
            {
              text: 'Какая единица измеряет вязкость в СИ?',
              options: [
                { text: 'Ньютон-секунда', isCorrect: false },
                { text: 'Паскаль-секунда', isCorrect: true },
                { text: 'Ватт', isCorrect: false },
                { text: 'Ом', isCorrect: false },
              ],
              answer: 'Паскаль-секунда',
              explanation:
                'Вязкость измеряется в паскаль-секундах, что описывает сопротивление жидкости движению.',
            },
          ],
        },
        {
          title: 'Гидравлические системы',
          questions: [
            {
              text: 'Что делает гидравлический аккумулятор?',
              options: [
                { text: 'Регулирует давление', isCorrect: false },
                {
                  text: 'Хранит энергию в гидравлической системе',
                  isCorrect: true,
                },
                { text: 'Измеряет скорость потока', isCorrect: false },
                { text: 'Повышает температуру жидкости', isCorrect: false },
              ],
              answer: 'Хранит энергию в гидравлической системе',
              explanation:
                'Гидравлический аккумулятор хранит энергию для поддержания давления в системе.',
            },
            {
              text: 'Какая формула описывает уравнение непрерывности?',
              options: [
                {
                  text: 'Скорость потока увеличивается в широких трубах',
                  isCorrect: false,
                },
                {
                  text: 'Поток остается постоянным во всех точках',
                  isCorrect: true,
                },
                {
                  text: 'Давление возрастает при уменьшении диаметра',
                  isCorrect: false,
                },
                {
                  text: 'Скорость жидкости пропорциональна давлению',
                  isCorrect: false,
                },
              ],
              answer: 'Поток остается постоянным во всех точках',
              explanation:
                'Уравнение непрерывности утверждает, что объемный поток остается постоянным через каждое сечение трубы.',
            },
          ],
        },
      ],
    },
  ];

  // Insert data into the database
  for (const section of seedData) {
    await prisma.quizCategory.create({
      data: {
        title: section.name,
        description: `Викторины, связанные с темой: ${section.name}.`,
        quizzes: {
          create: section.quizzes.map((quiz) => ({
            title: quiz.title,
            slug: slugify(quiz.title, { lower: true, strict: true }), // Generate slug from the quiz title
            description: `${quiz.title} описание.`,
            questions: {
              create: quiz.questions.map((question) => ({
                text: question.text,
                answer: question.answer,
                explanation: question.explanation,
                options: {
                  create: question.options,
                },
              })),
            },
          })),
        },
      },
    });
  }

  console.log('База данных успешно заполнена!');
}

// Execute the seed script
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
