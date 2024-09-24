// 로그아웃 기능을 위한 페이지

import { auth } from "../firebase";

export default function LogOut() {
  const logOut = () => {
    auth.signOut();
  };

  return <button onClick={logOut}>Log OUt</button>;
}
