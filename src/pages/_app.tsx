import Layout from "@/components/layout/layout";
import "@/styles/weverse_concert_bridge.css";
import "@/styles/weverse_concert_waiting.css";
import {
  QueryClient,
  QueryClientProvider,
  HydrationBoundary,
} from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { useState } from "react";
import i18n from "../i18n";
import { I18nextProvider } from "react-i18next";

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: { refetchOnWindowFocus: false, staleTime: 60 * 1000 },
        },
      })
  );

  return (
    <I18nextProvider i18n={i18n}>
      <QueryClientProvider client={queryClient}>
        <HydrationBoundary state={pageProps.dehydratedState}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </HydrationBoundary>
      </QueryClientProvider>
    </I18nextProvider>
  );
}
