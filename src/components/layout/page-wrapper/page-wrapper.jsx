import React from "react";
import Header from '../../layout/header/header';
import Footer from '../../layout/footer/footer';
import MainPage from '../../pages/main-page/main-page';
import './style.css';

//Обертка для контента страниц
function PageWrapper({ children, features }) {
  return (
    <>
    <Header />
    <main className="page-wrapper__main">
      <MainPage features={features} />
    </main>
    <Footer />
    </>
  );
}

export default PageWrapper;
