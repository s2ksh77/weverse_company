import Header from "@/components/layout/header";
import { useRouter } from "next/router";
import { useBooth } from "@/hooks";
import { useTranslation } from "react-i18next";
import BoothInfo from "@/components/Booth/BoothInfo";
import BoothForm from "@/components/InputForm/BoothForm";
import { useAddReservation } from "@/hooks/useReservation";
import { TRANSLATE_META } from "@/common/constants";
import { Suspense } from "react";
import Loader from "@/components/Loader/Loader";

export default function Detail() {
  const router = useRouter();
  const { t } = useTranslation(TRANSLATE_META.DETAIL);
  const { boothId } = router.query;
  const { data, isLoading } = useBooth(boothId as string) || {};
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
    <Suspense fallback={<Loader />}>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="container -waiting_detail">
          <Header />
          <div className="content">
            <BoothInfo data={data} />
            <BoothForm data={data} onSubmit={handleSubmit} />
          </div>
        </div>
      )}
    </Suspense>
  );
}
