export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <h1>Blog layout</h1>
      {children}
    </div>
  );
}