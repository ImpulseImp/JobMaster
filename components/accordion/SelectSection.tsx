function SelectSection({
  ariaLabel,
  text,
}: {
  ariaLabel: string;
  text: string;
}) {
  return <div aria-label={ariaLabel}>{text}</div>;
}
export default SelectSection;
