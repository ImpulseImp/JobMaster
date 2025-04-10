function QuizContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className='border border-gray-300 rounded-xl shadow-lg min-h-[600px] p-8 mt-8 bg-white max-w-3xl mx-auto'>
      {children}
    </div>
  );
}
export default QuizContainer;
