import { useState } from 'react';
import { useLocation } from 'wouter';
import { useAuth } from '@/contexts/AuthContext';
import LoginForm from '@/components/LoginForm';
import RegisterForm from '@/components/RegisterForm';

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const { login } = useAuth();
  const [, setLocation] = useLocation();

  const handleLogin = (username: string, password: string) => {
    login(username, username);
    setLocation('/');
  };

  const handleRegister = (data: any) => {
    login(data.username, data.fullName);
    setLocation('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-muted/30">
      {isLogin ? (
        <LoginForm
          onLogin={handleLogin}
          onSwitchToRegister={() => setIsLogin(false)}
        />
      ) : (
        <RegisterForm
          onRegister={handleRegister}
          onSwitchToLogin={() => setIsLogin(true)}
        />
      )}
    </div>
  );
}
