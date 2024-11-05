import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCountryCodes } from "@/hooks/useContryCode";
import { useTranslation } from "react-i18next";
import { useReservation } from "@/hooks/useReservation";

export default function Success() {
  const { t } = useTranslation("waiting-success");
  const router = useRouter();
  const { id } = router.query;
  const { data } = useReservation(id);
  const { data: countryData } = useCountryCodes();

  const filteredCodes = countryData?.filter(
    (item) => item.value === data?.countryCallingCode
  )[0]?.label;

  return (
    <>
      <div className="container -waiting_success">
        <div className="result_area">
          <h2 className="title">{t("waiting.success.title")}</h2>
          <div className="result">
            {t("waiting.success.group")}
            <em className="group">G -1</em>
          </div>
        </div>
        <div className="content">
          <div className="waiting_info">
            <dl className="info_list">
              <div className="info_item">
                <dt className="info_title">{t("waiting.info.booth")}</dt>
                <dd className="info_text">{data?.name}</dd>
              </div>
              <div className="info_item">
                <dt className="info_title">{t("waiting.info.location")}</dt>
                <dd className="info_text">{data?.locationDescription}</dd>
              </div>
              <div className="info_item">
                <dt className="info_title">{t("waiting.info.people.count")}</dt>
                <dd className="info_text">
                  {t("waiting.info.people.count.unit", {
                    peopleCount: data?.applicantsCount,
                  })}
                </dd>
              </div>
              <div className="info_item">
                <dt className="info_title">
                  {t("waiting.info.notification.channel")}
                </dt>
                <dd className="info_text">
                  {data?.phoneNumber ? "카카오톡" : "이메일"} <br />
                  {filteredCodes} {data?.phoneNumber}
                </dd>
              </div>
            </dl>
          </div>
          <div className="notification_area">
            <strong className="title">{t("waiting.notice.title")}</strong>
            <p className="notification">{t("waiting.notice.1")}</p>
            <p className="notification">{t("waiting.notice.2")}</p>
          </div>
          <div className="button_area">
            <a className="confirm_button">{t("waiting.status.btn")}</a>
            <Link href="/queue/history" className="normal_button">
              {t("waiting.history.btn")}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
