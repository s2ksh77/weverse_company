import { ReservationType, SuccessReservationType } from "@/pages/queue/types";
import { reservationRepository } from "@/stores/repository/reservationRepository";
import { useMutation, useQuery, UseQueryResult } from "@tanstack/react-query";

export const reservationQueryKey = {
  all: ["reservation"] as const,
  lists: () => [...reservationQueryKey.all, "list"] as const,
  list: () => [...reservationQueryKey.lists()] as const,
  details: () => [...reservationQueryKey.all, "detail"] as const,
  detail: (id: string) => [...reservationQueryKey.details(), id] as const,
};

export const useReservations = (): UseQueryResult<ReservationType[]> =>
  useQuery<ReservationType[]>({
    queryKey: reservationQueryKey.list(),
    queryFn: () => reservationRepository.getReservations(),
  });

export const useReservation = (
  id: string
): UseQueryResult<SuccessReservationType> =>
  useQuery<SuccessReservationType>({
    queryKey: reservationQueryKey.details(),
    queryFn: () => reservationRepository.getReservation(id),
  });

export const useAddReservation = () =>
  useMutation({
    mutationFn: (dto) => reservationRepository.createReservation(dto),
    onSuccess: (data) => data,
  });

export const useRemoveReservation = () =>
  useMutation({
    mutationFn: (id) => reservationRepository.deleteReservation(id),
    onSuccess: (data) => data,
  });
