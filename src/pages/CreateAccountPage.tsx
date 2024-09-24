import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  height: 100vh;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  max-width: 624px;
  padding: 86px 56px;

  border-radius: var(--416-px, 16px);
  background: #fff;
  gap: 36px;

  /* shadow/xl */
  box-shadow: 0px 8px 10px -6px rgba(0, 0, 0, 0.3),
    0px 20px 25px -5px rgba(0, 0, 0, 0.1);
`;

const Title = styled.span`
  color: var(--grey-500, #71717a);

  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;

const Input = styled.input`
  display: flex;
  padding: 16px;
  justify-content: center;
  align-items: center;
  gap: var(--28-px, 8px);
  width: 100%;
`;

const Span = styled.span`
  display: inline-block;
  color: var(--grey-900, #18181b);

  font-size: 14px;

  font-weight: 400;
  line-height: normal;
  margin-bottom: 16px;
`;

const Error = styled.span`
  font-family: "secondaryFont";
  font-size: 14px;
  color: red;
`; //Error 문자를 처리

export default function CreateAccount() {
  //계정 생성을 시작할 때 로딩을 true로 바꿀거야. 그래서 초기값은 false
  const [isLoading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //여기서 e는 input요소에서 발생한 이벤트 객체
    //target 객체로부터 name과 value라는 두가지 속성 값을 구조 분해 할당을 통해 꺼내옴.
    //name인 input요소의 name속성을 가르킴. 어떤 input이 변경되었는지 식별할 수 있게해줌.
    //변경된 inputdml name이 무엇인지 아니까 각각의 state를 통해 값을 set해줄 수 있음.

    //input의 event객체로부터 name과 value를 꺼내와 확인해!
    const {
      target: { name, value },
    } = e;
    //name과 value를 꺼내와서 일단 name 속성을 확인 했을 때 email이라면 email을 set해.
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //기본 폼 제출 동작을 막음.
    e.preventDefault();

    //오류확인을 함.
    try {
    } catch (error) {
      //에러가 있으면 무언가를 보여줘야하기에, 에러를 상태관리 하기 위한 state가 필요.
    } finally {
      setLoading(false); // 오류를 다 확인하고 로딩상태를 해제하겠다.
    }

    //계정을 만들고

    //유저 프로필을 설정한다.

    //그 다음 {내가 보내주고자 하는 경로로} redirect
    console.log(email, password);
  };

  //컴포넌트의 value에 상태변수를 넣어주는 이유는, 그 값이 변경될 때마다 React가 자동으로 컴포넌트를 다시 렌더링하여 UI를 업데이트 하기위함.
  //해당 상태값이, input의 현재값이 됨.
  return (
    <Wrapper>
      <Card>
        <Title>welcome to RainRoom</Title>
        {/* Form에 onSubmit 이벤트를 줘서 폼 전체가 제출될 때 특정 동작을 실행. */}
        <Form onSubmit={onSubmit}>
          <div>
            <Span>Email</Span>
            <Input
              onChange={onChange}
              value={email}
              name="email"
              placeholder="Email"
              type="email"
              required
            />
          </div>
          <div>
            <Span>Password</Span>
            <Input
              onChange={onChange}
              value={password}
              name="password"
              placeholder="Password"
              type="password"
              required
            />
          </div>

          {/* 버튼 클릭 시 Form 제출 */}
          <Input
            type="submit"
            value={isLoading ? "Loading.." : "Sing in with email"}
          />
        </Form>
        {error != "" ? <Error>{error}</Error> : null}
      </Card>
    </Wrapper>
  );
}
