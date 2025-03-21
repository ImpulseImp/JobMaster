import Landing from '@/components/landing/Landing';
// import prisma from '@/utils/db';

async function HomePage() {
  // const data = await prisma.user.findMany();
  // console.log(data);
  return (
    <div>
      <Landing />
    </div>
  );
}
export default HomePage;
