import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { getFromLS } from "../utils/storage";

const menus = [
  "MONEY TRANSFER",
  "FOREIGN EXCHANGE",
  "FAQS",
  "FIND & CONTACT US",
];

const logos = {
  hhmt: "/images/hhmt-logo.svg",
  remox: "/images/remox-logo.svg",
  fefx: "/images/fefx-logo.png",
};

const Header = () => {
  return (
    <AppBar position="static">
      <ContainerStyled maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/">
            <LogoStyled src={logos[getFromLS('theme')]} width={32} height={32} alt="" />
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {menus.map((page) => (
              <Button
                key={page}
                onClick={() => {}}
                sx={{ my: 2, color: "var(--bg-header-text)", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </ContainerStyled>
    </AppBar>
  );
};

const ContainerStyled = styled(Container)`
  display: flex!important;
  max-width: 100%!important;
  justify-content: center;
  background-color: var(--bg-header);
`;
const LogoStyled = styled.img`
  width: auto;
  height: 32px;
  margin-right: 150px;
`;

export default Header;
