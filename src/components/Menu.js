import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { setToLS } from "../utils/storage";
import { ProductItems } from "../constants";

const Menu = () => {
  return (
    <MenuStyled>
      {ProductItems.map((p) => (
        <Link
          key={p.label}
          to={`/${p.label}/login`}
          className="menu__item"
          onClick={() => setToLS("theme", p.label)}
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

  .menu__item {
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
