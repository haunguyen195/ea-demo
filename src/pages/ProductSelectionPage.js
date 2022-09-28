import React, { useEffect } from "react";
import styled from "styled-components";
import Menu from "../components/Menu";

const ProductSelectionPage = ({ theme }) => {
  const isRootPage = window.location.pathname === '/'

  useEffect(() => {
    if (isRootPage) {
      theme('')
    }
  }, [isRootPage, theme])

  return (
    <ProductSelectionStyled>
      <Menu theme={theme} />
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
