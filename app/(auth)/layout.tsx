import Navbar from "@/shared/components/layouts/Navbar";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="pt-34.25">
        {children}
      </div>
    </>
  );
};

export default AuthLayout;
