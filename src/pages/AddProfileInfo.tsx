// 회원 가입 완료 후, 추가정보를 받는 페이지입니다.

import React, { useState } from "react";
import {
  AuthCard,
  AuthForm,
  AuthInput,
  AuthInputTitle,
  AuthWrapper,
} from "../components/AuthUIComponent";
import { auth, db } from "../firebase";
import { doc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function AddProfileInfo() {
  const navigate = useNavigate();

  const [nickName, setNickName] = useState("");
  const [error, setError] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickName(e.target.value);
    console.log(nickName);
  };

  //submit할 때 확인
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (nickName === "") {
      return;
    }

    try {
      const user = auth.currentUser;
      if (user) {
        //user의 공유한 uid의 레퍼런스를 받아.
        const userDocRef = doc(db, "users", user.uid);

        //해당 레퍼런스에 doc을 업데이트해줘
        await updateDoc(userDocRef, {
          nickname: nickName,
          hasCompletedProfile: true, // 프로필을 완성했다고 표시
        });
      }

      navigate("/rain-room");
    } catch (e) {
      console.log("Firesotr error:", error);
    } finally {
      setNickName("");
      console.log(nickName);
    }
  };

  return (
    <AuthWrapper>
      <AuthCard>
        <AuthForm onSubmit={onSubmit}>
          <div>
            {" "}
            <AuthInputTitle>What's your nickname?</AuthInputTitle>
            <AuthInput
              onChange={onChange}
              value={nickName}
              placeholder="Enter your nickname"
            ></AuthInput>
          </div>
          <AuthInput value="Next" type="submit"></AuthInput>
        </AuthForm>
      </AuthCard>
    </AuthWrapper>
  );
}
