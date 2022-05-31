import React from "react";
import Header from '../../layout/header/header';
import Footer from '../../layout/footer/footer';
import MainPage from '../../pages/main-page/main-page';
import { Main } from './styles';

//Обертка для контента страниц
function PageWrapper({ children, features }) {
  return (
    <>
    <Header />
    <Main>
      <MainPage features={features} />
    </Main>
    <Footer />
    </>
  );
}

export default PageWrapper;
