import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Menu from "../components/Menu";
import { setToLS } from "../utils/storage";

const ProductSelectionPage = () => {
  const { pathname } = useLocation();

  const isRootPage = pathname === '/'

  useEffect(() => {
    if (isRootPage) {
      setToLS('theme', '')
    }
  }, [isRootPage])

  return (
    <ProductSelectionStyled>
      <Menu />
    </ProductSelectionStyled>
  );
};

const ProductSelectionStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: var(--bg-header);
`;

export default ProductSelectionPage;
