import Head from "next/head";
import Link from "next/link";
import Header from "@/components/layout/header";
import { useRouter } from "next/router";
import { useAddReservation, useBooth } from "@/hooks";
import { formattedTime } from "@/utils";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import BoothInfo from "@/components/Booth/BoothInfo";
import BoothForm from "@/components/InputForm/BoothForm";

export default function Detail() {
  const router = useRouter();
  const { t } = useTranslation("booth-detail");
  const { boothId } = router.query;
  const { data } = useBooth(boothId as string) || {};
  const { isSuccess, mutateAsync } = useAddReservation();

  if (!boothId) return;

  const handleSubmit = async (data) => {
    try {
      const response = await mutateAsync(data);
      const reservationId = response.id;
      router.push({
        pathname: "/queue/success",
        query: { id: reservationId },
      });
    } catch (error) {
      console.error("예약 생성에 실패했습니다.", error);
    }
  };

  return (
    <>
      {data && (
        <div className="container -waiting_detail">
          <Header />
          <div className="content">
            <BoothInfo data={data} t={t} />
            <BoothForm data={data} onSubmit={handleSubmit} />
          </div>
        </div>
      )}
    </>
  );
}
