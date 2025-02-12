import { Flex, Input, Text, Transition } from '@mantine/core';
import { useEffect, useState } from 'react';
import { IconChevronRight } from '@tabler/icons-react';
import './styles.scss';
import { useNavigate } from 'react-router';

function FullNameSlide() {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [inputData, setInputData] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [animateError, setAnimateError] = useState<boolean>(false);
  const [submitCount, setSubmitCount] = useState<number>(0);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setIsMounted(true), 500);
  }, []);

  const validateInput = () => {
    setSubmitCount((prev) => prev + 1);
    const validNames = ['or khovailo', 'or gani', 'or gangina'];

    if (!validNames.includes(inputData.toLowerCase())) {
      setErrorMessage('Nope');
      handleShake();
      return;
    }

    setErrorMessage('');
    navigate('/qualities'); // Navigate to the next slide
  };

  const handleShake = () => {
    setAnimateError(true);
    setTimeout(() => setAnimateError(false), 2000);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      validateInput();
    }
  };

  return (
    <Flex
      className={animateError ? 'flash-red' : ''}
      direction='column'
      align='center'
      justify='center'
      w='100%'
      h='100%'
      gap='md'
    >
      <Transition
        mounted={isMounted}
        transition='fade-up'
        duration={1000}
        timingFunction='ease'
      >
        {(transitionStyles) => (
          <Input.Wrapper
            miw='15rem'
            style={transitionStyles}
            label="What's your full name?"
            error={errorMessage}
          >
            <Input
              className={animateError ? 'shaking' : ''}
              placeholder='Or...'
              rightSectionPointerEvents='all'
              value={inputData}
              variant='unstyled'
              onChange={(event) => setInputData(event.currentTarget.value)}
              onKeyDown={handleKeyPress} // Allow Enter key submission
              styles={{
                input: {
                  borderTop: 'none',
                  borderRight: 'none',
                  borderBottom: '1px solid black',
                  borderLeft: 'none',
                  borderRadius: 0,
                },
              }}
              rightSection={
                !animateError && (
                  <IconChevronRight
                    onClick={validateInput}
                    style={{ cursor: 'pointer' }}
                    color={inputData === '' ? '#e3d5ca' : '#d5bdaf'}
                  />
                )
              }
            />
          </Input.Wrapper>
        )}
      </Transition>
      <Transition
        mounted={submitCount >= 2}
        transition='fade-left'
        duration={1000}
      >
        {(transitionStyles) => (
          <Text style={transitionStyles} mt='xl' fz='xs' fw={'normal'}>
            Maybe try one of my last names ;)
          </Text>
        )}
      </Transition>
    </Flex>
  );
}

export default FullNameSlide;
