import { BoothItemType } from "@/pages/queue/types";
import { formattedTime } from "@/utils";
import moment from "moment";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

const BoothItem = ({
  id,
  name,
  queuingStartDateTime,
  queuingEndDateTime,
}: BoothItemType) => {
  const { i18n } = useTranslation("booth-list");

  const getBoothStatus = () => {
    const now = moment();
    const queuingStart = moment(queuingStartDateTime);
    const queuingEnd = moment(queuingEndDateTime);

    if (now.isAfter(queuingEnd)) return "close";
    if (now.isBefore(queuingStart)) return "ready";
    return "apply";
  };
  const isDisabled = ["close", "ready"].includes(getBoothStatus());

  return (
    <li className="waiting_item">
      <strong className="booth_title">{name}</strong>
      <div className="booth_time">
        {i18n.t("list.booth.operantion.hours", {
          time: formattedTime(queuingStartDateTime),
        })}
      </div>
      {/* 버튼 비활성화시 disabled과 aria-disabled 추가해주세요. */}
      <Link href={`/queue/detail/${id}`}>
        <button
          type="button"
          disabled={isDisabled}
          aria-disabled={isDisabled}
          className="apply_button -common_button"
        >
          {i18n.t(`list.booth.${getBoothStatus()}.btn`)}
        </button>
      </Link>
    </li>
  );
};

export default BoothItem;
