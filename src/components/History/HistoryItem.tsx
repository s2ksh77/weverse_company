import { TRANSLATE_META } from "@/common/constants";
import { useRemoveReservation } from "@/hooks/useReservation";
import { ReservationType } from "@/pages/queue/types";
import moment from "moment";
import React, { Dispatch, SetStateAction } from "react";
import { useTranslation } from "react-i18next";

interface ReservationTypeProps extends ReservationType {
  setIsAlertOpen: Dispatch<SetStateAction<boolean>>;
}

const HistoryItem = ({
  id,
  boothId,
  applicantsCount,
  status,
  reservedAt,
  language,
  email,
  countryCallingCode,
  phoneNumber,
  setIsAlertOpen,
}: ReservationTypeProps) => {
  const { t } = useTranslation(TRANSLATE_META.HISTORY);
  const isCanceled = status === "CANCELED";
  const isWaiting = status === "WAITING";
  const { mutateAsync, isSuccess } = useRemoveReservation();
  const handleCancel = async () => {
    try {
      const response = await mutateAsync(id);
      handleAlertOpen();
    } catch (error) {
      console.error("예약 생성에 실패했습니다.", error);
    }
  };
  const handleAlertOpen = () => {
    setIsAlertOpen(true);
    setTimeout(() => setIsAlertOpen(false), 3000);
  };

  return (
    <li className="waiting_history_item">
      <em className={`status ${isCanceled ? "-cancel" : ""}`}>
        {isCanceled ? t("history.tab.cancel") : t("history.status.waiting")}
      </em>
      <strong className="booth_title">{boothId}</strong>
      <dl className="info_list">
        <div className="info_item">
          <dt className="info_title">{t("history.info.standbyGroup")}</dt>
          <dd className="info_text">G-1</dd>
        </div>
        <div className="info_item">
          <dt className="info_title">{t("history.info.applicationTime")}</dt>
          <dd className="info_text">
            {moment(reservedAt).format("YYYY. MM. DD HH:mm")}
          </dd>
        </div>
        <div className="info_item">
          <dt className="info_title">{t("history.info.person")}</dt>
          <dd className="info_text">
            {t("history.info.personCount", {
              count: applicantsCount,
            })}
          </dd>
        </div>
        <div className="info_item">
          <dt className="info_title">{t("history.info.notify")}</dt>
          <dd className="info_text">
            {phoneNumber
              ? t("history.info.notify.kakao")
              : t("history.info.notify.email")}
          </dd>
        </div>
      </dl>
      <div className="button_area">
        {isWaiting && (
          <button
            type="button"
            className="history_button"
            onClick={handleCancel}
          >
            {t("history.button.cancel")}
          </button>
        )}
        <button type="button" className="history_button -point">
          {t("history.button.detail")}
        </button>
      </div>
    </li>
  );
};

export default HistoryItem;
