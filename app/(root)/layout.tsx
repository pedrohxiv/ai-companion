import { Navbar } from '@/components/navbar';
import { Sidebar } from '@/components/sidebar';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <aside className="hidden md:flex mt-16 w-20 flex-col fixed inset-y-0">
        <Sidebar />
      </aside>
      <main className="md:pl-20 pt-16 h-full">{children}</main>
    </>
  );
};

export default RootLayout;
