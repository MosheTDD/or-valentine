import { Navigate } from 'react-router';
import { JSX, useEffect } from 'react';
import { useAuth } from '../AuthProvider';

function ProtectedRoute({ children }: { children: JSX.Element }) {
  const { user, loading } = useAuth();
  useEffect(() => console.log(loading, user), [loading, user]);
  return user ? children : <Navigate to='/login' replace />;
}

export default ProtectedRoute;
