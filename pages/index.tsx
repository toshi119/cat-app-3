import type { GetServerSideProps, NextPage } from "next"
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

interface SearchCatImage {
  id: string;
  url: string;
  width: number;
  height: number;
}

interface IndexPageProps {
  initialCatImageURL: string;
}

// The Cat APIを取得する関数
// 型を指定してあげることで間違ったものを取得したときにエラーがでるようになる
const fetchCatImage = async (): Promise<SearchCatImage> => {
  const res = await fetch("https://api.thecatapi.com/v1/images/search");
  const result = await res.json();
  // console.log(result[0]);
  return result[0];
};

const Home: NextPage<IndexPageProps> = ({ initialCatImageURL }) => {

  const [catImageURL, setCatImageURL] = useState(initialCatImageURL);

  const handleClick = async () => {
    const catImage = await fetchCatImage();
    // console.log(catImage.url);
    setCatImageURL(catImage.url);
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
      <img src={catImageURL} width={500} height="auto"/>

      <button style={{ marginTop: 18 }} onClick={handleClick}>
        きゃー！発見
      </button>
    </div>
  );
};

// SSR(サーバーサイドレンダリング)の実装
export const getServerSideProps: GetServerSideProps<IndexPageProps> = async () => {
  const catImage = await fetchCatImage();

  return {
    props: {
      initialCatImageURL: catImage.url,
    },
  };
};

export default Home;
