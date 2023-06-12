import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderCom from './component/header/HeaderCom';
import Section_1 from './component/main/section1/Section_1';
import Section_2_main from './component/main/section2/Section_2_main';
import Section_3 from './component/main/section3/Section_3';
import Section_4_main from './component/main/section4/Section_4_main';
import Section_5 from './component/main/section5/Section_5';
import Section_6_main from './component/main/section6/Section_6_main';
import Section_7 from './component/main/section7/Section_7';
import Section_8_main from './component/main/section8/Section_8_main';
import Section_9 from './component/main/section9/Section_9';
import Section_10_main from './component/main/section10/Section_10_main';
import Section_11 from './component/main/section11/Section_11';
import Section_12_mail from './component/main/section12/Section_12_mail';
import Section_13 from './component/main/section13/Section_13';
import Section_13_main from './component/main/section13/Section_13_main';
import Section_14 from './component/main/section14/Section_14';
import Section_15 from './component/main/section15/Section_15';
import Section_16 from './component/main/section16/Section_16';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXEa9atOrbGLjvkopKX2SbWruMviJkoqA",
  authDomain: "turing-guard-388011.firebaseapp.com",
  projectId: "turing-guard-388011",
  storageBucket: "turing-guard-388011.appspot.com",
  messagingSenderId: "129716380484",
  appId: "1:129716380484:web:03fb91b4ce7244f9b2ad11",
  measurementId: "G-MVMH0QRTYJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


function App() {
  return (
    <>
      <HeaderCom />
      <Section_1 />
      <Section_2_main />
      <Section_3 />
      <Section_4_main />
      <Section_5 />
      <Section_6_main />
      <Section_7 />
      <Section_8_main />
      <Section_9 />
      <Section_10_main />
      <Section_11 />
      <Section_12_mail />
      <Section_13_main />
      <Section_14 />
      <Section_15 />
      <Section_16 />
    </>
  );
}

export default App;
