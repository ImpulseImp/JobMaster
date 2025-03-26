'use client';

type EmptyStateProps = {
  message: string;
  type?: 'info' | 'error'; // Optional type to style the message
};

function EmptyState({ message, type = 'info' }: EmptyStateProps) {
  return (
    <p
      className={`text-center ${
        type === 'error' ? 'text-red-500 font-medium' : 'text-gray-500'
      }`}
    >
      {message}
    </p>
  );
}

export default EmptyState;
