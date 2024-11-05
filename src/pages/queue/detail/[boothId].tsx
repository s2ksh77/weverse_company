import Header from "@/components/layout/header";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import BoothInfo from "@/components/Booth/BoothInfo";
import BoothForm from "@/components/InputForm/BoothForm";
import { useAddReservation } from "@/hooks/useReservation";
import { TRANSLATE_META } from "@/common/constants";

import {
  BoothDetailItemType,
  BoothItemType,
  ReservationSubmitType,
} from "../types";
import { boothRepository } from "@/stores/repository/BoothRepository";

export default function Detail({ data }: { data: BoothDetailItemType }) {
  const router = useRouter();
  const { t } = useTranslation(TRANSLATE_META.DETAIL);
  const { boothId } = router.query;
  const { mutateAsync } = useAddReservation();

  if (!boothId) return;

  const handleSubmit = async (data: ReservationSubmitType) => {
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
    <div className="container -waiting_detail">
      <Header />
      <div className="content">
        <BoothInfo data={data as BoothDetailItemType} />
        <BoothForm data={data as BoothDetailItemType} onSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const booths = await boothRepository.getBooths();

  const paths = booths.map((booth: BoothItemType) => ({
    params: { boothId: booth.id },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context: { params: { boothId: string } }) {
  const { params } = context;
  const boothId = params.boothId;

  const data = await boothRepository.getBoothById(boothId);

  return {
    props: {
      data,
    },
  };
}
