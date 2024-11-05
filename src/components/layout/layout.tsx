import React, { PropsWithChildren, useEffect, useState } from "react";
import Header from "./header";
import Footer from "./footer";
import { useRouter } from "next/router";
import Head from "next/head";
import { PAGE_TITLE_META } from "@/common/constants";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();
  const [isHome, setIsHome] = useState(false);

  const pathKey = router.pathname
    .replace(/^\//, "")
    .replace(/\//g, "_") as keyof typeof PAGE_TITLE_META;

  const meta = PAGE_TITLE_META[pathKey] || PAGE_TITLE_META.home;

  useEffect(() => {
    setIsHome(router.pathname === "/");
  }, [router.pathname]);

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Head>
      <Header
        home={isHome}
        close={router.pathname.includes("/queue/success")}
      />
      <div className="container">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
