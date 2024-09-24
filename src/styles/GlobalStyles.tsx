import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  /* 모든 곳에 적용시켜 주겠다. */
  *{ 
    box-sizing: border-box;
    line-height: 1;
  }
  
  
  /* 글로벌 폰트 설정 */
  @font-face {
    font-family: 'PrimaryFont';
    src: url('src/assets/fonts/PublicPixel.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'SecondaryFont';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;

}

html {
        background-color: #18181B;
        height:100%;
    }

    body {
        font-family: "PrimaryFont", "SecondaryFont";
        margin: 0;
        padding: 0;
    }

  a {
  all: unset;
  cursor: pointer;

  text-decoration: none;
  } 

    #root {
    height: 100%;  /* 모든 콘텐츠가 전체 화면을 채울 수 있게 설정 */
  }

`;

export default GlobalStyles;
