export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <h1>Home layout</h1>
      {children}
    </div>
  );
}