import { Flex, Text, Title } from '@mantine/core';

function Note() {
  return (
    <Flex
      h={'100%'}
      direction={'column'}
      justify={'space-evenly'}
      align={'center'}
      px={'sm'}
    >
      <Title fw={'lighter'}>My Or</Title>
      <Text fz={'h4'} component='p' ta={'center'} fw={'lighter'}>
        I never loved someone as much as I love you <br />
        You are my light, my world, my everything <br />
        I will do anything for you <br />
        <br />
        <br />
        <br />I promise to hug
        <br />I promise to listen
        <br />I promise to understand
        <br /> I promise to keep you safe
        <br />I promise to never stop loving you
        <br />
        <br />
        <br />
        Your are the best thing that ever happened to me
        <br />
        <br />
        <br />
        Thank you for being there for me
        <br />
        I can't wait to spend the rest of my time on this earth with you
        <br />
        <br />
        <br />
        Love forever,
        <br />
        Your Moshe
      </Text>
    </Flex>
  );
}

export default Note;
