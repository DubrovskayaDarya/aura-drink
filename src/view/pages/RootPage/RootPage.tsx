import React, { FC, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ROUTES } from '../../../config';
import { About } from '../About';

const MainPage = lazy(() =>
  import('../Main').then(({ Main }) => ({
    default: Main,
  }))
);

const ShopPage = lazy(() =>
  import('../Shop').then(({ Shop }) => ({
    default: Shop,
  }))
);

const QuizPage = lazy(() =>
  import('../Quiz').then(({ Quiz }) => ({
    default: Quiz,
  }))
);

const AboutPage = lazy(() =>
  import('../About').then(({ About }) => ({
    default: About,
  }))
);

export const RootPage: FC = () => {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path={ROUTES.main} element={<MainPage />} />
        <Route path={ROUTES.shop} element={<ShopPage />} />
        <Route path={ROUTES.quiz} element={<QuizPage />} />
        <Route path={ROUTES.about} element={<AboutPage />} />
      </Routes>
    </Suspense>
  );
};
