import styled from "styled-components";

export const AuthWrapper = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  height: 100vh;
`;

export const AuthInput = styled.input`
  display: flex;
  padding: 16px;
  justify-content: center;
  align-items: center;
  gap: var(--28-px, 8px);
  width: 100%;
`;

export const AuthInputTitle = styled.span`
  display: inline-block;
  color: var(--grey-900, #18181b);

  font-size: 14px;

  font-weight: 400;
  line-height: normal;
  margin-bottom: 16px;
`;

export const AuthTitle = styled.span`
  color: var(--grey-500, #71717a);

  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  text-align: center;
`;

export const AuthCard = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  max-width: 624px;
  padding: 86px 56px;

  border-radius: var(--416-px, 16px);
  background: #fff;
  gap: 36px; //gap은 flex상태에서 적용된다.
  z-index: 999;
  /* shadow/xl */
  box-shadow: 0px 8px 10px -6px rgba(0, 0, 0, 0.3),
    0px 20px 25px -5px rgba(0, 0, 0, 0.1);
`;

export const AuthError = styled.span`
  font-family: "secondaryFont";
  font-size: 14px;
  color: red;
  text-align: center;
`; //Error 문자를 처리

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;

export const Switcher = styled.span`
  display: flex;
  justify-content: space-between;
  font-weight: 100;
  font-size: 12px;
  color: grey;
  a {
    color: #7979e1;
    text-decoration: underline;
  }
`;
