interface BlogSectionProps {
  children: React.ReactNode;
  desc: string;
}

export default function BlogSection({ children, desc }: BlogSectionProps) {
  return (
    <section className=" mt-16">
      <h2 className="text-white10 text-h4 font-bold sm:text-h2">
        {children}
      </h2>
      <p className="text-white25 text-p mt-8">
        {desc}
      </p>
    </section>
  );
}