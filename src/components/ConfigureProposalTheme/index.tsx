import { Select } from '@mantine/core';
function ConfigureProposalTheme() {
  const THEME_OPTIONS = ['Date', 'Valentines', 'Prom'];
  return <Select w={'50%'} placeholder='Pick one' data={THEME_OPTIONS} />;
}

export default ConfigureProposalTheme;
