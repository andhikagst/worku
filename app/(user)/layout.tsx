import Footer from "@/shared/components/layouts/Footer";
import Navbar from "@/shared/components/layouts/Navbar";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
