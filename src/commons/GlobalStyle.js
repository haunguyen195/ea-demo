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

    .hhmt {
        --bg-header: #000;
        --bg-header-text: #ffc107;
        --bg-body: #fff;
        --color-body-text: #000;
        --bg-login: #fff;
    }

    .remox {
        --bg-header: #fff;
        --bg-header-text: #002357;
        --bg-body: #e6e6e6;
        --color-body-text: #000;
        --bg-login: #fff;
    }

    .fefx {
        --bg-header: #fff;
        --bg-header-text: #000;
        --bg-body: #fff8e9;
        --color-body-text: #000;
        --bg-login: #fff;
    }

    body {
        background-color: var(--bg-body);
        clip-path: polygon(0 0, 100% 0%, 100% 60%, 50% 100%, 0 60%);
    }
`;

export default GlobalStyle;
