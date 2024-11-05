import { DomainType } from "@/pages/queue/types";
import { domainRepository } from "@/stores/repository/DomainRepository";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export const domainQueryKey = {
  all: ["domains"] as const,
  lists: () => [...domainQueryKey.all, "list"] as const,
  list: () => [...domainQueryKey.lists()] as const,
};

export const useDomains = (): UseQueryResult<DomainType[]> =>
  useQuery<DomainType[]>({
    queryKey: domainQueryKey.list(),
    queryFn: () => domainRepository.getDomains(),
  });
