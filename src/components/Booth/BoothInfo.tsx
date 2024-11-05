import { formattedTime } from "@/utils";
import React from "react";

const BoothInfo = ({ data, t }) => {
  return (
    <div className="booth_wrap">
      <h2 className="booth_title">{data.name}</h2>
      <dl className="boooth_list">
        <dt className="boooth_title">
          {t("detail.booth.info.operantion.hours")}
        </dt>
        <dd className="boooth_detail">{`${formattedTime(
          data?.startTime
        )} ~ ${formattedTime(data?.endTime)}`}</dd>
        <dt className="boooth_title">{t("detail.booth.info.location")}</dt>
        <dd className="boooth_detail">{data.locationDescription}</dd>
      </dl>
    </div>
  );
};

export default BoothInfo;
