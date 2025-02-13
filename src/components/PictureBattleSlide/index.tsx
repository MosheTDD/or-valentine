import { useState, useEffect } from 'react';
import { Flex, Title, Image, Text } from '@mantine/core';
import PICTURE_ONE from '../../assets/duck.jpg';
import PICTURE_TWO from '../../assets/odeya.jpg';
import PICTURE_THREE from '../../assets/darth-vader.jpg';
import PICTURE_FOUR from '../../assets/dani.jpg';
import OR_PICTURE from '../../assets/or.jpg';
import './styles.scss';
import { useNavigate } from 'react-router';

function PictureBattleSlide() {
  const navigate = useNavigate();

  const images = [PICTURE_ONE, PICTURE_TWO, PICTURE_THREE, PICTURE_FOUR];
  const [imageIndex, setImageIndex] = useState<number>(0);
  const [isImageFlashing, setIsImageFlashing] = useState(false);

  const handleOrImageClicked = () => {
    if (imageIndex === 4) return;
    setIsImageFlashing(false);
    setImageIndex((prev) => prev + 1);
  };

  const handleWrongPictureClicked = () => {
    setIsImageFlashing(true);
  };

  useEffect(() => {
    if (isImageFlashing) {
      const timeout = setTimeout(() => {
        setIsImageFlashing(false);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [isImageFlashing]);

  useEffect(() => {
    if (imageIndex !== 4) return;
    const timeout = setTimeout(() => {
      navigate('/big-question');
    }, 2000);
    return () => clearTimeout(timeout);
  }, [imageIndex]);

  return (
    <Flex
      w={'100%'}
      h={'100%'}
      direction='column'
      justify='center'
      align='center'
      gap={'xl'}
    >
      <Title fz={'h2'} ta={'center'} fw={'lighter'}>
        Best Person in the World Competition
      </Title>
      <Flex direction={'row'} justify='center' align={'center'} gap={'md'}>
        <Image
          miw={imageIndex !== 4 ? '7rem' : '15rem'}
          mah={imageIndex !== 4 ? '7rem' : '15rem'}
          src={OR_PICTURE}
          onClick={handleOrImageClicked}
          style={{
            cursor: imageIndex === 4 ? '' : 'pointer',
            borderRadius: '5px',
          }}
        />
        {imageIndex !== 4 && (
          <>
            <Title ta={'center'} fz={'h5'} fw={'bold'}>
              V.S.
            </Title>
            <Image
              miw={'7rem'}
              mah={'7rem'}
              className={`${isImageFlashing ? 'shaking' : ''}`}
              src={images[imageIndex]}
              onClick={handleWrongPictureClicked}
              style={{ cursor: 'pointer', borderRadius: '5px' }}
            />
          </>
        )}
      </Flex>
      {imageIndex === 4 && (
        <Text fz={'3rem'} className='color-change'>
          V I C T O R Y
        </Text>
      )}
    </Flex>
  );
}

export default PictureBattleSlide;
