import React from 'react';
import About from '../../block/about/about';
import FeaturesList from '../../block/features-list/features-list';

function MainPage({ features }) {
  return (
    <>
    <About />
    <FeaturesList features={features} />
    </>
  );
}

export default MainPage;