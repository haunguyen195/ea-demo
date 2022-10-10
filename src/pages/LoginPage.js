import { TextField } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { ThemeStyleSheet } from "../constants";
import useLoadCss from "../hooks/useLoadCss";
import { setToLS } from "../utils/storage";

const LoginPage = ({ defaultTheme }) => {
  const { theme = defaultTheme } = useParams();
  const navigate = useNavigate();

  useLoadCss(ThemeStyleSheet[theme]);

  useEffect(() => {
    if (document.location.pathname !== '/hhmt' || document.location.pathname !== '/remox') {
      navigate("/hhmt");
    }
  }, [])

  useEffect(() => {
    setToLS("theme", theme);
  }, [theme]);

  return (
    <LoginStyled>
      <div className="text-field">
        <TextField id="demo-helper-text-misaligned" label="username" />
      </div>
      <div>
        <TextField id="demo-helper-text-misaligned" label="password" />
      </div>
    </LoginStyled>
  );
};

const LoginStyled = styled.div`
  margin-inline: auto;
  width: fit-content;
  padding: 24px;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  background-color: var(--bg-login);

  .text-field {
    margin-bottom: 8px;
  }
`;

export default LoginPage;
