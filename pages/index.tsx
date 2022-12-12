import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="p-8 flex justify-center items-center">
      你 好, 郑 虎<span className="font-black pl-8">Hello, Hu Zheng</span>
    </div>
  );
}
