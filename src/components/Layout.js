import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { getFromLS } from "../utils/storage";
import Header from "./Header";

const Layout = ({ children }) => {
  const { pathname } = useLocation();
  const [theme, setTheme] = useState('')

  const isRootPage = pathname === '/'

  useEffect(() => {
    setTheme(getFromLS('theme'))
  }, [pathname])

  return (
    <LayoutStyled>
      {(!isRootPage && theme) && <Header theme={theme} />}
      {children}
    </LayoutStyled>
  );
};

const LayoutStyled = styled.div``;

export default Layout;
