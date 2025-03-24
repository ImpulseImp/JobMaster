import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Define seed data
  const seedData = [
    {
      name: 'Electrical',
      topics: [
        {
          name: 'Basic Circuits',
          quizzes: [
            {
              title: 'Simple Circuit Quiz',
              questions: [
                {
                  text: 'What is the unit of electrical resistance?',
                  options: ['Ohm', 'Volt', 'Ampere', 'Watt'],
                  answer: 'Ohm',
                },
                {
                  text: 'What does a capacitor store?',
                  options: ['Energy', 'Voltage', 'Current', 'Resistance'],
                  answer: 'Energy',
                },
              ],
            },
          ],
        },
        {
          name: 'Power Systems',
          quizzes: [
            {
              title: 'Power Systems Fundamentals',
              questions: [
                {
                  text: 'What is the standard voltage for household electrical outlets?',
                  options: ['120V', '240V', '12V', '110V'],
                  answer: '120V',
                },
                {
                  text: 'What does a transformer primarily do?',
                  options: [
                    'Change voltage',
                    'Store energy',
                    'Convert AC to DC',
                    'Measure current',
                  ],
                  answer: 'Change voltage',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'Hydraulics',
      topics: [
        {
          name: 'Fluid Mechanics',
          quizzes: [
            {
              title: 'Fluid Dynamics Quiz',
              questions: [
                {
                  text: 'What is the SI unit of viscosity?',
                  options: ['Pascal-second', 'Newton-meter', 'Joule', 'Watt'],
                  answer: 'Pascal-second',
                },
                {
                  text: "Bernoulli's principle relates to which property of a fluid?",
                  options: ['Pressure', 'Viscosity', 'Density', 'Temperature'],
                  answer: 'Pressure',
                },
              ],
            },
          ],
        },
        {
          name: 'Hydraulic Pumps',
          quizzes: [
            {
              title: 'Pump Basics Quiz',
              questions: [
                {
                  text: 'What is the purpose of a hydraulic pump?',
                  options: [
                    'Generate flow',
                    'Increase pressure',
                    'Store fluid',
                    'Control temperature',
                  ],
                  answer: 'Generate flow',
                },
                {
                  text: 'Which type of pump is most commonly used in hydraulic systems?',
                  options: [
                    'Centrifugal pump',
                    'Gear pump',
                    'Vacuum pump',
                    'Diaphragm pump',
                  ],
                  answer: 'Gear pump',
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  // Insert data into the database
  for (const section of seedData) {
    await prisma.quizSection.create({
      data: {
        name: section.name,
        topics: {
          create: section.topics.map((topic) => ({
            name: topic.name,
            quizzes: {
              create: topic.quizzes.map((quiz) => ({
                title: quiz.title,
                questions: {
                  create: quiz.questions.map((question) => ({
                    text: question.text,
                    options: question.options,
                    answer: question.answer,
                  })),
                },
              })),
            },
          })),
        },
      },
    });
  }

  console.log('Database seeded successfully!');
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
