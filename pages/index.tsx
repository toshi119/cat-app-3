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

  // The Cat APIを取得する関数
  const fetchCatImage = async () => {
    const res = await fetch("https://api.thecatapi.com/v1/images/search");
    const result = await res.json();
    // console.log(result[0]);
    return result[0];
  };

  const handleClick = async () => {
    const catImage = await fetchCatImage();
    console.log(catImage);
  };

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

      <button style={{ marginTop: "18" }} onClick={handleClick}>
        きゃー！発見
      </button>
    </div>
  );
};

export default Home;
