function QuizContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className='border border-gray-300 dark:border-gray-600 rounded-xl shadow-lg min-h-[700px] p-8 mt-8  max-w-3xl mx-auto '>
      {children}
    </div>
  );
}
export default QuizContainer;
