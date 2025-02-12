import {
  Button,
  Chip,
  DEFAULT_THEME,
  Flex,
  Group,
  Text,
  Title,
  Transition,
} from '@mantine/core';
import { useState, useMemo } from 'react';
import { IconX } from '@tabler/icons-react';
import { useNavigate } from 'react-router';

function QualitiesSlide() {
  const navigate = useNavigate();

  const goodQualities = [
    'Supportive',
    'Kind & Compassionate',
    'Honest & Trustworthy',
    'Fun & Playful',
    'Independent',
    'Emotionally Mature',
    'Good Communicator',
    'Loyal',
    'TOP LOOKING GIRL',
  ];

  const badQualities = [
    'Manipulative',
    'Overly Jealous',
    'Lack of Ambition',
    'Poor Communication',
    'Self-Centered',
    'Disrespectful',
  ];

  const randomSortedQualities = useMemo(() => {
    return [...goodQualities, ...badQualities].sort(() => Math.random() - 0.5);
  }, []);

  const [selectedChips, setSelectedChips] = useState<string[]>([]);
  const [clickedBadQualities, setClickedBadQualities] = useState<string[]>([]);

  const handleChipChange = (value: string[]) => {
    if (value.length > 9 || badQualities.includes(value[value.length - 1]))
      return;
    setSelectedChips(value);
  };

  const handleRemoveBadQuality = (quality: string) => {
    setClickedBadQualities((prev) => [...prev, quality]);
  };

  const handleContinueClicked = () => {
    navigate('/picture-battle');
  };

  return (
    <Flex direction='column' align='center' justify='center' gap='lg'>
      <Flex direction='column' align='center' justify='center' gap='xs'>
        <Title fz='h3' fw='lighter'>
          Why should I date you?
        </Title>
        <Title fz='h6' fw='lighter'>
          Choose at least 9
        </Title>
        <Text fz='h6' fw='lighter'>
          {selectedChips.length} / 9
        </Text>
      </Flex>
      <Chip.Group multiple value={selectedChips} onChange={handleChipChange}>
        <Group
          align='center'
          justify='center'
          h='15rem'
          maw='25rem'
          bg='#e3d5ca'
          p='xs'
          style={{ borderRadius: 10, overflow: 'auto' }}
        >
          {randomSortedQualities.map((quality) => (
            <Transition
              mounted={!clickedBadQualities.includes(quality)}
              transition='fade-down'
              duration={1000}
              timingFunction='ease'
              key={quality}
            >
              {(transitionStyles) => (
                <Flex
                  direction='column'
                  justify='center'
                  align='center'
                  style={{ ...transitionStyles, zIndex: 1 }}
                  gap='sm'
                >
                  <Chip
                    value={quality}
                    icon={
                      goodQualities.includes(quality) ? null : (
                        <IconX size={16} />
                      )
                    }
                    onClick={() => {
                      if (
                        badQualities.includes(quality) &&
                        !clickedBadQualities.includes(quality)
                      ) {
                        handleRemoveBadQuality(quality);
                      }
                    }}
                    color={goodQualities.includes(quality) ? 'teal' : 'red'}
                  >
                    {quality}
                  </Chip>
                  <Title
                    hidden={!clickedBadQualities.includes(quality)}
                    fz='h1'
                    fw='bold'
                    c={DEFAULT_THEME.colors.red[4]}
                  >
                    {Math.random() > 0.5 ? 'Whoops' : 'Nope'}
                  </Title>
                </Flex>
              )}
            </Transition>
          ))}
        </Group>
      </Chip.Group>
      <Button
        onClick={handleContinueClicked}
        variant='filled'
        disabled={selectedChips.length !== 9}
      >
        Continue
      </Button>
    </Flex>
  );
}

export default QualitiesSlide;
