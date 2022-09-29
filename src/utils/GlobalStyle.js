import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        list-style: none;
        box-sizing: border-box;
    }

    :root {
        --bg-header: #fff;
        --bg-header-text: #fff;
        --bg-body: #fff;
        --color-body-text: #fff;
        --bg-login: #fff;
        --color-login-text: #fff;
    }

    body {
        background-color: var(--bg-body);
        clip-path: polygon(0 0, 100% 0%, 100% 60%, 50% 100%, 0 60%);
    }
`;

export default GlobalStyle;
