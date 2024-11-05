import React, { PropsWithChildren, Suspense, useEffect, useState } from "react";
import Header from "./header";
import Footer from "./footer";
import { useRouter } from "next/router";
import Head from "next/head";
import { PAGE_TITLE_META } from "@/common/constants";
import Loader from "../Loader/Loader";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();
  const [isHome, setIsHome] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const pathKey = router.pathname
    .replace(/^\//, "")
    .replace(/\//g, "_") as keyof typeof PAGE_TITLE_META;

  const meta = PAGE_TITLE_META[pathKey] || PAGE_TITLE_META.home;

  useEffect(() => {
    setIsHome(router.pathname === "/");
  }, [router.pathname]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Head>
      <Header
        home={isHome}
        close={router.pathname.includes("/queue/success")}
      />
      {isClient && <div className="container">{children}</div>}
      <Footer />
    </Suspense>
  );
};

export default Layout;
