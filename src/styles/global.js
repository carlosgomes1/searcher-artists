import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    html,
    body,
    #root {
        min-height: 100%;
    }

    body {
        background: #156acc;
        webkit-font-smoothing: antialiased;
    }

    body, input, button {
        color: #222;
        font-size: 14px;
        font-family: Arial, Helvetica, sans-serif;
    }
`;
