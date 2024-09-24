/**
 * 로그인한 사용자는 Protected route를 볼 수 있게되고,
 * 로그인하지 않은 경우 로그인 또는 계정 생성 페이지로 리디렉션될 것임.
 * 이 컴포넌트에서 하는 건, Firebase에 유저 정보를 요청하는 것임. why? --> 유저가 로그인 했는지 확인하기 위해.
 */

import React from "react";
import { auth } from "../firebase";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  //currentUser은 user가 로그인했는지 여부를 알려줌. (user값을 주거나 null을 넘겨줌)
  const user = auth.currentUser;

  //만약 user가 null이 아니라면 children을 볼 수 있어야함.
  if (user === null) {
    return <Navigate to="/login" />;
  }

  return children;
}
