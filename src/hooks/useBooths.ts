import { BoothItemType } from "@/pages/queue/types";
import { boothRepository } from "@/stores/repository/BoothRepository";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export const boothQueryKey = {
  all: ["booths"] as const,
  lists: () => [...boothQueryKey.all, "list"] as const,

  list: () => [...boothQueryKey.lists()] as const,
};

export const useBooths = (): UseQueryResult<BoothItemType[]> =>
  useQuery<BoothItemType[]>({
    queryKey: boothQueryKey.list(),
    queryFn: () => boothRepository.getBooths(),
  });
