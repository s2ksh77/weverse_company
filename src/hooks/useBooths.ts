import { BoothDetailItemType, BoothItemType } from "@/pages/queue/types";
import { boothRepository } from "@/stores/repository/BoothRepository";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export const boothQueryKey = {
  all: ["booths"] as const,
  lists: () => [...boothQueryKey.all, "list"] as const,
  details: () => [...boothQueryKey.all, "detail"] as const,

  list: () => [...boothQueryKey.lists()] as const,
  detail: (id: string) => [...boothQueryKey.details(), id] as const,
};

export const useBooths = (): UseQueryResult<BoothItemType[]> =>
  useQuery<BoothItemType[]>({
    queryKey: boothQueryKey.list(),
    queryFn: () => boothRepository.getBooths(),
  });

export const useBooth = (id: string): UseQueryResult<BoothDetailItemType> =>
  useQuery<BoothDetailItemType>({
    queryKey: boothQueryKey.detail(id),
    queryFn: () => boothRepository.getBoothById(id),
  });
