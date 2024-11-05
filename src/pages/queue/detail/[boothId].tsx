import Head from "next/head";
import Link from "next/link";
import Header from "@/components/layout/header";
import { useRouter } from "next/router";
import { useBooth } from "@/hooks";
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

  const [selectedOption, setSelectedOption] = useState("kakao");

  if (!boothId) return;

  console.log(data);

  return (
    <>
      {data && (
        <div className="container -waiting_detail">
          <Header />
          <div className="content">
            <BoothInfo data={data} t={t} />
            <BoothForm data={data} t={t} />
            <div className="button_area">
              <Link href="/success">
                <button type="button" className="apply_button -common_button">
                  {t("detail.booth.apply.btn")}
                </button>
              </Link>
            </div>
          </div>
          {/* toast 활성화/비활성화, is_active class를 추가/제거 해주세요. */}
          <p className="weverse_common_toast">
            {t("detail.alert.enter.required")}
          </p>
        </div>
      )}
    </>
  );
}
