import { useEffect, useState } from 'react';
import { Flex, Text } from '@mantine/core';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import LoginPage from './components/LoginPage';
import { AuthProvider } from './components/AuthProvider';
import ProtectedRoute from './components/ProtectedRoute';
import ProposalView from './components/ProposalView';
import ConfigureProposalContainer from './components/ConfigureProposalContainer';

export default function App() {
  const [activeIndex, setActiveIndex] = useState(5);

  useEffect(() => {
    if (activeIndex > 0) return;
    const timeout = setTimeout(() => setActiveIndex(1), 15000);
    return () => clearTimeout(timeout);
  }, [activeIndex]);

  return (
    <Flex
      bg={'#f5ebe0'}
      direction={'column'}
      align={'center'}
      justify={'center'}
      h={'100dvh'}
      w={'100dvw'}
    >
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/login' element={<LoginPage />} />
            <Route
              path='/proposal-configure'
              element={
                <ProtectedRoute>
                  <ConfigureProposalContainer />
                </ProtectedRoute>
              }
            />
            <Route path='/proposal-view/:id' element={<ProposalView />} />
            <Route path='/' element={<Navigate to='/proposal-configure' />} />
          </Routes>
        </BrowserRouter>
        <Text pos={'fixed'} bottom={5} right={10}>
          Made by: Moshe Khovailo
        </Text>
      </AuthProvider>
    </Flex>
  );
}
