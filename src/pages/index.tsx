import { boothQueryKey, useBooths } from "@/hooks/useBooths";
import { boothRepository } from "@/stores/repository/BoothRepository";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import WaitingListPage from "./queue/list";

export default function Home() {
  return (
    <>
      <WaitingListPage />
    </>
  );
}

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: boothQueryKey.list(),
    queryFn: boothRepository.getBooths,
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
