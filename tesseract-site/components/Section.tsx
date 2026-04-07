export default function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <section className={`py-10 sm:py-14 ${className}`}>{children}</section>;
}
