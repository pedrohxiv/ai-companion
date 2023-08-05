import { Navbar } from '@/components/navbar';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="md:pl-20 pt-16 h-full">{children}</main>
    </>
  );
};

export default RootLayout;
