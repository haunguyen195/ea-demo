import { TextField } from "@mui/material";
import React from "react";
import styled from "styled-components";

const LoginPage = () => {
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
