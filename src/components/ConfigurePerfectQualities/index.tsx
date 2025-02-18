import {
  Badge,
  Divider,
  Flex,
  Group,
  Text,
  TextInput,
  Tooltip,
} from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import { useState } from 'react';

function ConfigurePerfectQualities() {
  const [goodQualities, setGoodQualities] = useState<string[]>([]);
  const [badQualities, setBadQualities] = useState<string[]>([]);
  const [goodQualityInput, setGoodQualityInput] = useState('');
  const [badQualityInput, setBadQualityInput] = useState('');

  const requiredGoodQualities = 9;
  const requiredBadQualities = 6;
  const maxTotalQualities = requiredGoodQualities + requiredBadQualities;

  const totalQualities = goodQualities.length + badQualities.length;
  const canAddGoodQuality = goodQualities.length < requiredGoodQualities;
  const canAddBadQuality = badQualities.length < requiredBadQualities;

  const addGoodQuality = () => {
    if (goodQualityInput.trim() && canAddGoodQuality) {
      setGoodQualities([...goodQualities, goodQualityInput.trim()]);
      setGoodQualityInput('');
    }
  };

  const addBadQuality = () => {
    if (badQualityInput.trim() && canAddBadQuality) {
      setBadQualities([...badQualities, badQualityInput.trim()]);
      setBadQualityInput('');
    }
  };

  const removeGoodQuality = (quality: string) => {
    setGoodQualities(goodQualities.filter((q) => q !== quality));
  };

  const removeBadQuality = (quality: string) => {
    setBadQualities(badQualities.filter((q) => q !== quality));
  };

  return (
    <Flex
      w='100%'
      h='100%'
      direction='row'
      justify='space-evenly'
      align='center'
      gap='4rem'
    >
      {/* Good Qualities Section */}
      <Flex w='45%' h='100%' direction='column' justify='center' align='center'>
        <Badge size='xl' color='teal'>
          Good Qualities
        </Badge>
        <Text size='sm' c='gray'>
          {goodQualities.length}/{requiredGoodQualities}
        </Text>
        <TextInput
          w='100%'
          label='Add Good Quality'
          placeholder='Beautiful'
          value={goodQualityInput}
          onChange={(e) => setGoodQualityInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') addGoodQuality();
          }}
          rightSection={
            <IconPlus
              onClick={addGoodQuality}
              style={{
                cursor: canAddGoodQuality ? 'pointer' : 'not-allowed',
                opacity: canAddGoodQuality ? 1 : 0.5,
              }}
            />
          }
          disabled={!canAddGoodQuality}
        />
        <Group
          w='100%'
          mih={'50%'}
          mah={'50%'}
          justify='center'
          mt='1rem'
          style={{ overflowY: 'auto' }}
        >
          {goodQualities.map((quality, index) => (
            <Tooltip key={index} label='Remove' position='top'>
              <Badge
                color='teal'
                variant='light'
                size='lg'
                style={{ cursor: 'pointer' }}
                onClick={() => removeGoodQuality(quality)}
              >
                {quality}
              </Badge>
            </Tooltip>
          ))}
        </Group>
      </Flex>

      <Divider orientation='vertical' size='sm' color='#d5bdaf' />

      {/* Bad Qualities Section */}
      <Flex w='45%' h='100%' direction='column' justify='center' align='center'>
        <Badge size='xl' color='red'>
          Bad Qualities
        </Badge>
        <Text size='sm' c='gray'>
          {badQualities.length}/{requiredBadQualities}
        </Text>
        <TextInput
          w='100%'
          label='Add Bad Quality'
          placeholder='Stubborn'
          value={badQualityInput}
          onChange={(e) => setBadQualityInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') addBadQuality();
          }}
          rightSection={
            <IconPlus
              onClick={addBadQuality}
              style={{
                cursor: canAddBadQuality ? 'pointer' : 'not-allowed',
                opacity: canAddBadQuality ? 1 : 0.5,
              }}
            />
          }
          disabled={!canAddBadQuality}
        />
        <Group
          w='100%'
          mih={'50%'}
          mah={'50%'}
          justify='center'
          mt='1rem'
          style={{ overflowY: 'auto' }}
        >
          {badQualities.map((quality, index) => (
            <Tooltip key={index} label='Remove' position='top'>
              <Badge
                color='red'
                variant='light'
                size='lg'
                style={{ cursor: 'pointer' }}
                onClick={() => removeBadQuality(quality)}
              >
                {quality}
              </Badge>
            </Tooltip>
          ))}
        </Group>
      </Flex>
    </Flex>
  );
}

export default ConfigurePerfectQualities;
