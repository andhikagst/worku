import Navbar from "@/shared/components/layouts/Navbar";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="overflow-hidden min-h-screen">
        {children}
      </div>
    </>
  );
};

export default AuthLayout;
