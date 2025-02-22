import { useState } from 'react';
import {
  Divider,
  Flex,
  Group,
  Text,
  Image,
  ScrollArea,
  Tooltip,
} from '@mantine/core';
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { IconPhoto, IconUpload, IconX } from '@tabler/icons-react';

function ConfigureUltimateChampion(props: Partial<DropzoneProps>) {
  const NOT_ALLOWED_IMAGE_TYPES: string[] = ['image/heic'];
  const ALLOWED_IMAGE_TYPES: string[] = IMAGE_MIME_TYPE.filter(
    (type) => !NOT_ALLOWED_IMAGE_TYPES.includes(type)
  );
  const [significantOtherImage, setSignificantOtherImage] = useState<
    string | null
  >(null);
  const [competitorImages, setCompetitorImages] = useState<string[]>([]);

  const handleSignificantOtherDrop = (files: File[]) => {
    const file = files[0];
    if (file) {
      setSignificantOtherImage(URL.createObjectURL(file));
    }
  };

  const handleCompetitorDrop = (files: File[]) => {
    if (competitorImages.length < 5) {
      const urls = files.map((file) => URL.createObjectURL(file));
      setCompetitorImages((prev) => [...prev, ...urls].slice(0, 5));
    }
  };

  const handleRemoveCompetitorImage = (index: number) => {
    setCompetitorImages((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <Flex
      w='100%'
      h='100%'
      direction='row'
      justify='center'
      align='center'
      gap='5rem'
      p='2rem'
    >
      {/* Significant Other's Image */}
      <Flex direction='column' align='center'>
        <Dropzone
          w={'20rem'}
          h={'18rem'}
          onDrop={handleSignificantOtherDrop}
          maxFiles={1}
          maxSize={5 * 1024 ** 2}
          accept={ALLOWED_IMAGE_TYPES}
          styles={{
            root: {
              backgroundColor: '#f5e8dc',
              borderRadius: '12px',
              border: 'none',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            },
          }}
          {...props}
        >
          {significantOtherImage ? (
            <Flex w={'100%'} justify={'center'}>
              <Image
                src={significantOtherImage}
                w={'15rem'}
                h={'15rem'}
                alt='Preview'
                radius='md'
              />
            </Flex>
          ) : (
            <Group justify='center' gap='lg' mih={'5rem'}>
              <Dropzone.Accept>
                <IconUpload size={52} color='teal' stroke={1.5} />
              </Dropzone.Accept>
              <Dropzone.Reject>
                <IconX size={52} color='red' stroke={1.5} />
              </Dropzone.Reject>

              <div style={{ textAlign: 'center' }}>
                <Dropzone.Idle>
                  <IconPhoto size={52} color='gray' stroke={1.5} />
                </Dropzone.Idle>
                <Text size='xl' fw={600}>
                  Upload Your Significant Other's Picture
                </Text>
                <Text size='sm' c='dimmed' mt={7}>
                  Max file size: 5MB
                </Text>
              </div>
            </Group>
          )}
        </Dropzone>
      </Flex>

      <Divider orientation='vertical' size='md' color='gray' />

      {/* Competitors' Images */}
      <Flex direction={'column'} justify={'center'} align={'center'}>
        <Dropzone
          w={'20rem'}
          h={'13rem'}
          onDrop={handleCompetitorDrop}
          maxFiles={5}
          maxSize={5 * 1024 ** 2}
          accept={ALLOWED_IMAGE_TYPES}
          disabled={competitorImages.length >= 5}
          styles={{
            root: {
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#f5e8dc',
              borderTopLeftRadius: '12px',
              borderTopRightRadius: '12px',
              padding: '1rem',
              opacity: competitorImages.length >= 5 ? 0.5 : 1,
              border: 'none',
              cursor: competitorImages.length >= 5 ? 'default' : 'pointer',
            },
          }}
          {...props}
        >
          <Group justify='center' gap='lg' h={'10rem'}>
            <Dropzone.Accept>
              <IconUpload size={52} color='teal' stroke={1.5} />
            </Dropzone.Accept>
            <Dropzone.Reject>
              <IconX size={52} color='red' stroke={1.5} />
            </Dropzone.Reject>
            <Dropzone.Idle>
              <IconPhoto size={52} color='gray' stroke={1.5} />
            </Dropzone.Idle>
            <div style={{ textAlign: 'center' }}>
              <Text size='xl' fw={600}>
                Upload Competitors' Pictures
              </Text>
              <Text size='sm' c='dimmed' mt={7}>
                <Text>{competitorImages.length} / 5</Text>
                <br />
                Max size: 5MB each
              </Text>
            </div>
          </Group>
        </Dropzone>
        <ScrollArea
          w={'20rem'}
          h={'4.5rem'}
          bg={'#f5e8dc'}
          px={10}
          style={{
            borderBottomLeftRadius: '12px',
            borderBottomRightRadius: '12px',
            borderTop: 'solid 1px #d5bdaf',
            bottom: 2,
          }}
        >
          <Flex
            h={'4.3rem'}
            w={'20rem'}
            gap='sm'
            direction='row'
            justify='center'
            align={'center'}
          >
            {competitorImages.length > 0 ? (
              competitorImages.map((src, index) => (
                <Tooltip key={index} label='Remove' withArrow>
                  <Image
                    src={src}
                    alt={`Competitor ${index + 1}`}
                    width={'60rem'}
                    height={'60rem'}
                    radius='md'
                    onClick={() => handleRemoveCompetitorImage(index)}
                    style={{ cursor: 'pointer' }}
                  />
                </Tooltip>
              ))
            ) : (
              <Text c={'#d5bdaf'} fw={'bolder'} fz={'h4'}>
                N O N E
              </Text>
            )}
          </Flex>
        </ScrollArea>
      </Flex>
    </Flex>
  );
}

export default ConfigureUltimateChampion;
