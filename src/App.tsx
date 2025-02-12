import WelcomeSlide from './components/WelcomeSlide';
import { useEffect, useState } from 'react';
import FullNameSlide from './components/FullNameSlide';
import { Flex } from '@mantine/core';
import QualitiesSlide from './components/QualitiesSlide';
import PictureBattleSlide from './components/PictureBattleSlide';
import Note from './components/Note';
import { BrowserRouter, Route, Routes } from 'react-router';
import BigQuestionSlide from './components/BigQuestion';

export default function App() {
  const [activeIndex, setActiveIndex] = useState(5);

  useEffect(() => {
    if (activeIndex > 0) return;
    const timeout = setTimeout(() => setActiveIndex(1), 15000);
    return () => clearTimeout(timeout);
  }, [activeIndex]);

  return (
    <Flex
      bg={'#f5ebe0'}
      direction={'column'}
      align={'center'}
      justify={'center'}
      h={'100dvh'}
      w={'100dvw'}
    >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<WelcomeSlide />} />
          <Route path='/full-name' element={<FullNameSlide />} />
          <Route path='/qualities' element={<QualitiesSlide />} />
          <Route path='/picture-battle' element={<PictureBattleSlide />} />
          <Route path='/big-question' element={<BigQuestionSlide />} />
          <Route path='/note' element={<Note />} />
        </Routes>
      </BrowserRouter>
    </Flex>
  );
}
