import LoginForm from '../LoginForm';

export default function LoginFormExample() {
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <LoginForm
        onLogin={(username) => console.log('Logged in as:', username)}
        onSwitchToRegister={() => console.log('Switch to register')}
      />
    </div>
  );
}
