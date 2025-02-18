import { Flex, TextInput } from '@mantine/core';
function ConfigureNameMatch() {
  return (
    <Flex direction={'column'} justify={'center'} align={'center'} gap={'md'}>
      <TextInput
        label='Full Name'
        description='What full name should your significant other enter to proceed'
        placeholder='Moshe Khovailo'
      />
    </Flex>
  );
}

export default ConfigureNameMatch;
