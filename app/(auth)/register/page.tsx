import RegisterForm from '@/components/auth/RegisterForm';

const RegisterPage = () => {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold text-gray-900">Create an Account</h1>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage