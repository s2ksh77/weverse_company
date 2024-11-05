import { TRANSLATE_META } from "@/common/constants";
import React from "react";
import { useTranslation } from "react-i18next";

const TicketResistration = () => {
  const { i18n } = useTranslation(TRANSLATE_META.LIST);
  return (
    <div className="standing_wrap">
      <div className="regist_wrap">
        <strong className="regist_title">
          {i18n.t("list.ticket.area.title")}
        </strong>
        <button type="button" className="regist_button">
          {i18n.t("list.ticket.regist.btn")}
        </button>
      </div>
      <p className="standing_text">{i18n.t("list.ticket.area.desc")}</p>
    </div>
  );
};

export default TicketResistration;
