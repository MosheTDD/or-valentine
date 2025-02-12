import {
  Button,
  DEFAULT_THEME,
  Flex,
  Stack,
  Title,
  Transition,
} from '@mantine/core';
import { useEffect, useState } from 'react';
import './styles.scss';
import { useNavigate } from 'react-router';

function BigQuestionSlide() {
  const navigate = useNavigate();
  const TEXTS: string[] = ['Looks like you won!', 'Congratulations ;)', 'So'];
  const NoButtonTexts: string[] = [
    'No',
    'What',
    'Why',
    'Hey',
    'Stop that',
    "I'll cry",
    'But I love you',
    'I thought you liked me :(',
    ':(',
    'I still love you',
    '*crying*',
  ];

  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [textIndex, setTextIndex] = useState<number>(0);
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [shananigansIndex, setShananigansIndex] = useState<number>(0);

  useEffect(() => {
    const firstTimeout = setTimeout(() => {
      setIsMounted(true);
    }, 2000);

    const interval = setInterval(() => {
      setIsMounted(false);

      setTimeout(() => {
        setTextIndex((prev) => prev + 1);
        setIsMounted(true);
      }, 1000);

      if (textIndex >= TEXTS.length - 1) {
        clearInterval(interval);
        setTimeout(() => setShowOptions(true), 1000);
      }
    }, 4000);

    return () => {
      clearTimeout(firstTimeout);
      clearInterval(interval);
    };
  }, [textIndex, TEXTS.length]);

  const handleNoButtonClicked = () => {
    if (shananigansIndex === 9) return;
    setShananigansIndex((prev) => prev + 1);
  };

  const handleYesButtonClicked = () => {
    navigate('/note');
  };

  return (
    <Flex
      direction='column'
      align='center'
      justify='center'
      h='100%'
      gap='md'
      style={{ overflow: 'hidden' }}
    >
      <Transition
        mounted={isMounted}
        transition='fade-up'
        duration={1000}
        timingFunction='ease'
      >
        {(styles) => (
          <Title ta={'center'} fw='lighter' style={styles}>
            {TEXTS[textIndex]}
          </Title>
        )}
      </Transition>

      {showOptions && (
        <Flex w={'100%'} direction='column' align='center' justify='center'>
          <Title className='text-animate' ta={'center'} fw='lighter'>
            Will you be my valentine?
          </Title>
          <Stack className='fade-in' w={'80%'} align='center'>
            <Button
              onClick={handleYesButtonClicked}
              fullWidth
              fz={shananigansIndex === 9 ? '10rem' : ''}
              w={shananigansIndex === 9 ? '100dvw' : ''}
              h={shananigansIndex === 9 ? '100dvh' : ''}
            >
              Yes
            </Button>
            <Button
              onClick={handleNoButtonClicked}
              color={
                shananigansIndex >= 1
                  ? DEFAULT_THEME.colors.red[4]
                  : shananigansIndex >= 9
                  ? DEFAULT_THEME.colors.gray[4]
                  : ''
              }
              fullWidth={shananigansIndex >= 2 ? false : true}
              w={shananigansIndex >= 4 ? '190px' : ''}
              right={shananigansIndex >= 3 ? '3rem' : ''}
              top={
                shananigansIndex === 4
                  ? '10rem'
                  : shananigansIndex === 6
                  ? '10rem'
                  : shananigansIndex >= 8
                  ? '10rem'
                  : ''
              }
              bottom={
                shananigansIndex === 5
                  ? '-15rem'
                  : shananigansIndex === 7
                  ? '-15rem'
                  : ''
              }
            >
              {NoButtonTexts[shananigansIndex]}
            </Button>
          </Stack>
        </Flex>
      )}
    </Flex>
  );
}

export default BigQuestionSlide;
