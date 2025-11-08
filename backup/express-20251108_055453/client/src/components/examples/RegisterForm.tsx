import RegisterForm from '../RegisterForm';

export default function RegisterFormExample() {
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <RegisterForm
        onRegister={(data) => console.log('Registered:', data)}
        onSwitchToLogin={() => console.log('Switch to login')}
      />
    </div>
  );
}
