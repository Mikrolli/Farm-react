import React from 'react';
import PageWrapper from '../layout/page-wrapper/page-wrapper';
import features from '../../moksc/features';
import { GlobalStyle } from './styles';

export default function App () {
  return (
    <>
    <GlobalStyle />
    <PageWrapper features={features} >Контент страницы</PageWrapper>
    </>
  );
}