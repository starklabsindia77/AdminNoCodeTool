import { Typography } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import { useSelector } from "react-redux";
import styles from "../styles/Home.module.css";

export default function Home() {
  const reduxValue = useSelector((state) => state.counter.value);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Typography variant="h3" className="text-center">
        This is index page - {reduxValue}
      </Typography>
      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  );
}
