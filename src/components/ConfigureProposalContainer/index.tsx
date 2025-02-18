import { Button, Image, Flex, Stepper, Text } from '@mantine/core';
import { useState } from 'react';
import ConfigureProposalTheme from '../ConfigureProposalTheme';
import ConfigureNameMatch from '../ConfigureNameMatch';
import NameMatchDemo from '../../assets/demos/name-match-demo.gif';
import PerfectQualitiesDemo from '../../assets/demos/best-qualities-demo.gif';
import CompetitionDemo from '../../assets/demos/competition-demo.gif';
import BigQuestionDemo from '../../assets/demos/big-question-demo.gif';
import ConfigurePerfectQualities from '../ConfigurePerfectQualities';
import ConfigureUltimateChampion from '../ConfigureUltimateChampion';
function ConfigureProposalContainer() {
  const PROPOSAL_CONFIG_VIEWS = [
    {
      component: <ConfigureProposalTheme />,
      title: 'Proposal Theme',
      description: "What's the occasion?",
      demo: NameMatchDemo,
    },
    {
      component: <ConfigureNameMatch />,
      title: 'Name Match',
      description: 'Name Match',
      demo: NameMatchDemo,
    },
    {
      component: <ConfigurePerfectQualities />,
      title: 'Perfect Qualities',
      description: 'Select 15 qualities',
      demo: PerfectQualitiesDemo,
    },
    {
      component: <ConfigureUltimateChampion />,
      title: 'Ultimate Champion',
      description:
        'Upload a picture of your significant other and up to 5 others',
      demo: CompetitionDemo,
    },
    {
      component: <div></div>,
      title: 'The Big Question',
      description: 'Customize the question and up to 9 response buttons',
      demo: BigQuestionDemo,
    },
    {
      component: <div></div>,
      title: 'Heartfelt Note',
      description: 'Write a personal message for your significant other',
    },
  ];

  const [activeStep, setActiveStep] = useState(0);
  const nextStep = () => setActiveStep((prev) => (prev < 3 ? prev + 1 : prev));
  const prevStep = () => setActiveStep((prev) => (prev > 0 ? prev - 1 : prev));

  return (
    <Flex
      w={'90%'}
      mih={'100%'}
      mah={'100%'}
      direction={'column'}
      justify={'space-evenly'}
      align={'center'}
      gap={'sm'}
    >
      <Stepper
        w={'100%'}
        active={activeStep}
        color='#d5bdaf'
        allowNextStepsSelect={false}
        onStepClick={setActiveStep}
        styles={{
          separator: {
            backgroundColor: '#d5bdaf',
          },
        }}
      >
        {PROPOSAL_CONFIG_VIEWS.map((view) => (
          <Stepper.Step label={view.title} />
        ))}
      </Stepper>
      <Flex
        w={'100dvw'}
        mih={'50%'}
        bg={'#e3d5ca'}
        direction={'row'}
        justify={'space-evenly'}
        align={'center'}
      >
        <Flex
          w={'60%'}
          h={'80%'}
          direction={'column'}
          justify={'center'}
          align={'center'}
          gap={'md'}
        >
          <Text fz={'h2'} fw={'lighter'}>
            {PROPOSAL_CONFIG_VIEWS[activeStep].description}
          </Text>
          {PROPOSAL_CONFIG_VIEWS[activeStep].component}
        </Flex>
        <Image
          radius={10}
          bd={'2px solid #d5bdaf'}
          src={PROPOSAL_CONFIG_VIEWS[activeStep].demo}
          w={'25rem'}
        />
      </Flex>
      <Flex direction={'row'} justify={'center'} align={'center'} gap={'md'}>
        {activeStep >= 1 && (
          <Button color='#d5bdaf' onClick={prevStep}>
            Back
          </Button>
        )}
        <Button color='#d5bdaf' onClick={nextStep}>
          Continue
        </Button>
      </Flex>
    </Flex>
  );
}

export default ConfigureProposalContainer;
