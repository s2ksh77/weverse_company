import { BoothItemType } from "@/pages/queue/types";
import moment from "moment";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

const BoothItem = ({
  name,
  startTime,
  endTime,
  queuingStartDateTime,
  queuingEndDateTime,
}: BoothItemType) => {
  const { i18n } = useTranslation("booth-list");
  const formattedTime = moment(queuingStartDateTime).format("H:mm");

  console.log(formattedTime);

  const getBoothStatus = () => {
    const now = moment();
    const queuingStart = moment(queuingStartDateTime);
    const queuingEnd = moment(queuingEndDateTime);

    if (now.isAfter(queuingEnd)) {
      return "마감";
    }
    if (now.isBefore(queuingStart)) {
      return "준비중";
    }
    return "신청";
  };

  return (
    <li className="waiting_item">
      <strong className="booth_title">{name}</strong>
      <div className="booth_time">
        {i18n.t("list.booth.operantion.hours", { time: formattedTime })}
      </div>
      {/* 버튼 비활성화시 disabled과 aria-disabled 추가해주세요. */}
      <Link href="/detail">
        <button type="button" className="apply_button -common_button">
          {getBoothStatus()}
        </button>
      </Link>
    </li>
  );
};

export default BoothItem;
