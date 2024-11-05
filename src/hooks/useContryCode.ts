import { CountryCodeType } from "@/pages/queue/types";
import { countryCodeRepository } from "@/stores/repository/CountryCodeRepository";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export const countryCodeQueryKey = {
  all: ["countryCodes"] as const,
  lists: () => [...countryCodeQueryKey.all, "list"] as const,
  list: () => [...countryCodeQueryKey.lists()] as const,
};

export const useCountryCodes = (): UseQueryResult<CountryCodeType[]> =>
  useQuery<CountryCodeType[]>({
    queryKey: countryCodeQueryKey.list(),
    queryFn: () => countryCodeRepository.getCodes(),
  });
