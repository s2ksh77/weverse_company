import Layout from "@/components/layout/Layout";
import "@/styles/weverse_concert_bridge.css";
import "@/styles/weverse_concert_waiting.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
