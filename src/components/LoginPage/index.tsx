import { Button, Divider, Flex, Image, Title } from '@mantine/core';
import { IconBrandGoogleFilled } from '@tabler/icons-react';
import { signInWithGoogle } from '../../firebase/auth';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import { useAuth } from '../AuthProvider';
import LOGO from '../../assets/logo.png';

function LoginPage() {
  const navigate = useNavigate();
  const { user } = useAuth();
  useEffect(() => {
    if (user) navigate('/proposal-configure');
  }, [user, navigate]);

  const handleLoginClick = async () => {
    await signInWithGoogle();
    navigate('/proposal-configure');
  };
  return (
    <Flex
      w={'20%'}
      h={'100%'}
      direction={'column'}
      justify={'start'}
      align={'center'}
      gap={'xl'}
      py={'xl'}
    >
      <Flex direction={'column'} justify={'center'} align={'center'}>
        <Image src={LOGO} w={150} />
        <Title fw={'initial'}>Proposal Generator</Title>
      </Flex>
      <Flex
        miw={'60%'}
        direction={'column'}
        justify={'center'}
        align={'center'}
        gap={'md'}
      >
        <Title fw={'lighter'} component={'h1'}>
          Get Started
        </Title>
        <Divider w={'100%'} size={'sm'} color='#e3d5ca' />
        <Button
          onClick={handleLoginClick}
          fullWidth
          color='#d5bdaf'
          leftSection={<IconBrandGoogleFilled />}
        >
          Google
        </Button>
      </Flex>
    </Flex>
  );
}

export default LoginPage;
