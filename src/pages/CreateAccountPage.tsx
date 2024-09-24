import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth, db } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import PhaserRainEffect from "../components/RainEffect";
import { PhaserContainer } from "./LandingPage";
import { doc, setDoc } from "firebase/firestore";
import {
  AuthCard,
  AuthError,
  AuthForm,
  AuthInput,
  AuthInputTitle,
  AuthTitle,
  AuthWrapper,
  Switcher,
} from "../components/AuthUIComponent";
import { FirebaseError } from "firebase/app";

//firebase에서 에러문구를 가져와서 친절하게 말해줘
/* const errors = {
  "auth/email-already-in-use": "That email already exist",
}; */

export default function CreateAccount() {
  const navigate = useNavigate(); // 어떤 행동이 끝난 후, 사용자를 이동 시키기 위해, useNavigate 훅 사용

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

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    //기본 폼 제출 동작을 막음.
    e.preventDefault();
    //inform의 value를 submit하면 우선 오류확인을 함.
    //onSubmit함수를 종료시킬 경우를 생각해. 로딩중이거나, email 혹은 password에 값이없으면 submit하지마.
    if (isLoading || email === "" || password === "") {
      return; //다음 로직이 실행되는것을 막는다.
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    //------여기서 부터 위의 조건이 충족되었을 때 실행 돼.---------
    //inform의 value를 submit하면 우선 오류확인을 함.
    try {
      //우선 실행될때 로딩 화면을 띄어
      setLoading(true);
      setError("");
      //createUser...을 읽어보면, 해당 함수를 성공하면 자격증명을 받게돼.
      //즉, firebase에 계정이 생성됨.
      const credentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      //user 정보를 가르킬 수 있는 인스턴스 주소를 알려줄게. 여기 저장하면돼.
      const userDocRef = doc(db, "users", credentials.user.uid);
      //해당 주소에 다음과 같은 데이터를 저장할게, 앞으로 여기업데이트 하면돼.
      await setDoc(userDocRef, {
        email: credentials.user.email, //사용자 이메일 저장.
        hasCompletedProfile: false, //사용자의 프로필 정보가 완성되었는지 여부를 나타냄.
      });

      //계정 생성 후 추가 정보 입력 페이지로 이동.
      navigate("/add-profile-nickname");
    } catch (e) {
      if (e instanceof FirebaseError) {
        setError(e.message);
      }
      //에러가 있으면 무언가를 보여줘야하기에, 에러를 상태관리 하기 위한 state가 필요.
    } finally {
      setEmail("");
      setPassword("");
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
    <AuthWrapper>
      <PhaserContainer>
        <PhaserRainEffect /> {/* Phaser 캔버스를 맨 아래에 렌더링 */}
      </PhaserContainer>
      <AuthCard>
        <AuthTitle>Register an Account</AuthTitle>
        {/* Form에 onSubmit 이벤트를 줘서 폼 전체가 제출될 때 특정 동작을 실행. */}
        <AuthForm onSubmit={onSubmit}>
          <div>
            <AuthInputTitle>Email</AuthInputTitle>
            <AuthInput
              onChange={onChange}
              value={email}
              name="email"
              placeholder="Email"
              type="email"
              required
            />
          </div>
          <div>
            <AuthInputTitle>Password</AuthInputTitle>
            <AuthInput
              onChange={onChange}
              value={password}
              name="password"
              placeholder="Password"
              type="password"
              required
            />
          </div>

          {/* 버튼 클릭 시 Form 제출 */}
          <AuthInput
            type="submit"
            value={isLoading ? "Loading.." : "Sing in with email"}
          />
        </AuthForm>
        {/* 에러가 비어있지 않으면 Form밑에 에러표시해주겠다. */}
        {error != "" ? <AuthError>{error}</AuthError> : null}
        <Switcher>
          Already have an account? <Link to="/login">Login &rarr;</Link>
        </Switcher>
      </AuthCard>
    </AuthWrapper>
  );
}
