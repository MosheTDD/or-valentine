import { Flex, Title, Transition } from '@mantine/core';
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router';

function WelcomeSlide() {
  const TEXTS: string[] = [
    'Hey',
    'I have a couple of things I wanted to tell you',
    'But first',
  ];

  const [isMounted, setIsMounted] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const navigate = useNavigate();
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    setTimeout(() => setIsMounted(true), 500);

    intervalRef.current = setInterval(() => {
      setIsMounted(false);

      setTimeout(() => {
        setTextIndex((prev) => prev + 1);
        setIsMounted(true);
      }, 1000); // 1s fade-out before switching text

      if (textIndex >= TEXTS.length - 1) {
        clearInterval(intervalRef.current!);
        setTimeout(() => navigate('/full-name'), 2000); // Delay navigation for smooth transition
      }
    }, 3000); // Total cycle: 1s fade-out → 1s fade-in → 1s pause

    return () => clearInterval(intervalRef.current!);
  }, [textIndex, navigate]);

  return (
    <Flex direction='row' align='center' justify='center' h='100%' gap='md'>
      <Transition
        mounted={isMounted}
        transition='fade-up'
        duration={1000} // 1s fade-in
        timingFunction='ease'
      >
        {(styles) => (
          <Title ta={'center'} fw='lighter' style={styles}>
            {TEXTS[textIndex]}
          </Title>
        )}
      </Transition>
    </Flex>
  );
}

export default WelcomeSlide;
