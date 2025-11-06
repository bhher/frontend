// Firebase 설정 파일
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase 설정 정보
// 실제 프로젝트에 맞게 수정해야 합니다
const firebaseConfig = {
  apiKey: "AIzaSyB5sGjh6YUI8T3HZhiMkd9H8nsvEyDm9CY",
  authDomain: "router2-fire-junsuk.firebaseapp.com",
  projectId: "router2-fire-junsuk",
  storageBucket: "router2-fire-junsuk.firebasestorage.app",
  messagingSenderId: "807427071307",
  appId: "1:807427071307:web:4593bddb451cbcc05a1cce",
  measurementId: "G-K3K1KS5E34",
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);

// Firestore 데이터베이스 초기화
export const db = getFirestore(app);
export default app;
