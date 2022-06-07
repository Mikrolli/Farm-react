import React from "react";
import Header from "../../layout/header/header";
import Footer from "../../layout/footer/footer";
import { Outlet } from "react-router-dom";
import { Main } from "./styles";

//Обертка для контента страниц
function PageWrapper({ products }) {
  return (
    <>
      <Header />
      <Main>
        <Outlet  />
      </Main>
      <Footer />
    </>
  );
}

export default PageWrapper;
