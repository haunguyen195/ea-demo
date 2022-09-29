import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";

const Layout = ({ children }) => {
  const { pathname } = useLocation();

  const isRootPage = pathname === '/'

  return (
    <LayoutStyled>
      {!isRootPage && <Header />}
      {children}
    </LayoutStyled>
  );
};

const LayoutStyled = styled.div``;

export default Layout;
