import React from "react";
import styled from "styled-components";
import Header from "./Header";

const Layout = ({ theme, children }) => {
  const isRootPage = window.location.pathname === '/'

  return (
    <LayoutStyled>
      {!isRootPage && <Header theme={theme} />}
      {children}
    </LayoutStyled>
  );
};

const LayoutStyled = styled.div``;

export default Layout;
