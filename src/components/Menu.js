import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { setToLS } from "../utils/storage";

const products = [
    {
      logoUrl: "/images/hhmt-logo.svg",
      label: "hhmt",
    },
    {
      logoUrl: "/images/remox-logo.svg",
      label: "remox",
    },
    {
      logoUrl: "/images/fefx-logo.png",
      label: "fefx",
    },
  ];

const Menu = () => {
  return (
    <MenuStyled>
      {products.map((p) => (
        <Link
          key={p.label}
          to={`${p.label}/login`}
          className="product-item"
          onClick={() => setToLS('theme', p.label)}
        >
          <img src={p.logoUrl} height={32} width={32} alt={p.label} />
        </Link>
      ))}
    </MenuStyled>
  );
};

const MenuStyled = styled.div`
  background-color: transparent;
  width: 300px;

  .product-item {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 32px;
    background-color: #fff;
    border: 1px solid #e6e6e6;
    border-radius: 4px;
    margin-bottom: 4px;
    cursor: pointer;

    &:last-child {
      margin-bottom: 0px;
    }

    img {
      width: auto;
      height: 32px;
    }
  }
`;

export default Menu;
