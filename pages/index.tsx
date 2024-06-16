import type { NextPage } from "next"
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

// export default function Home() {
//   return (
//     <div className={styles.container}>
//       <h1>今日の子猫ちゃん</h1>
//     </div>
//   );
// }

const Home: NextPage = () => {
  return (
    <div 
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh"
      }}
    >
      <h1>今日の子猫ちゃん🐈</h1>
      <img 
        src="https://cdn2.thecatapi.com/images/39m.jpg"
        width={500}
        height="auto"
      />

      <button style={{ marginTop: "18" }}>
        きゃー！発見
      </button>
    </div>
  );
};

export default Home;
