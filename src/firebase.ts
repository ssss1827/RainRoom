// 1. npm install firebase후 해당 코드를 firebase.ts페이지를 만들어 붙혀놓기 해야함.

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAu3gZkhMva55ACi1sdh1PFUBLwyN-4BOA",
  authDomain: "rainroom-2cbc4.firebaseapp.com",
  projectId: "rainroom-2cbc4",
  storageBucket: "rainroom-2cbc4.appspot.com",
  messagingSenderId: "608026642040",
  appId: "1:608026642040:web:34eafa2be2ab6ad5750f8d",
  measurementId: "G-KVC8M13M7G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//2. 로그인/회원가입을 위해 Authntication을 활성화시키고
//Authentication을 원한다는 코드를 입력해줘야함.

//3.우리는 app에 대한 인증을 사용하고 싶다고 말할거야. 그럼으로 인해서 api key 등 여러가지 키값들이 포함된 config 개체가 주어짐.
export const auth = getAuth(app);

//Config옵션을 통해서 app을 생성하고, auth를 통해 그 app에 대한 인증 서비스를 사용하고 싶다고 말한것임.
