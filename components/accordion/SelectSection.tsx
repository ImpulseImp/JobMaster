'use client';

type SelectSectionProps = {
  topic: string;
  sectionIdx: number;
  onSelect: (num: number) => void;
  selectedTopic: number;
};

function SelectSection({
  topic,
  onSelect,
  sectionIdx,
  selectedTopic,
}: SelectSectionProps) {
  console.log('sect idx:', sectionIdx, '  selectedTopic:', selectedTopic);
  const isSelected =
    selectedTopic === sectionIdx
      ? 'border-2 p-3 md:p-4 lg:p-5 border-gray-200  rounded-lg shadow-md transition-colors text-center md:text-left bg-[hsl(var(--primary))] text-[hsl(var(--secondary))]'
      : 'hover:cursor-pointer border-2 p-3 md:p-4 lg:p-5 border-gray-200  rounded-lg shadow-md hover:bg-accent   text-center md:text-left transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent bg-background';
  return (
    <div
      aria-label={`Часто задаваемые вопросы по ${topic}`}
      className={isSelected}
      onClick={() => onSelect(sectionIdx)}
    >
      Часто задаваемые вопросы по {topic}
    </div>
  );
}
export default SelectSection;
