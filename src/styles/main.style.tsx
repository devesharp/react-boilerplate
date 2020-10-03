import { createGlobalStyle } from 'styled-components';

const css = createGlobalStyle;

export default css`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    html,
    body,
    #root {
        height: 100%;
        font-family: 'Raleway', sans-serif;
        background: #222;
        color: #212529;
        font-size: 14px;
    }
    body {
        -webkit-font-smoothing: antialiased;
    }
`;
