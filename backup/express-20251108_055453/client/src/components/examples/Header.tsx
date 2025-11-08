import { AuthProvider } from '@/contexts/AuthContext';
import Header from '../Header';

export default function HeaderExample() {
  return (
    <AuthProvider>
      <Header />
    </AuthProvider>
  );
}
