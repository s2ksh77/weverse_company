import BoothItem from "@/components/Booth/BoothItem";
import TicketResistration from "@/components/Ticket/TicketResistration";
import { useBooths } from "@/hooks/useBooths";
import Link from "next/link";
import React from "react";
import { Trans, useTranslation } from "react-i18next";

const WaitingListPage = () => {
  const { data } = useBooths();
  const { i18n } = useTranslation("booth-list");

  return (
    <div className="container -waiting_list">
      <div className="content">
        <p className="waiting_text">
          <Trans
            i18nKey={"list.booth.gps.desc"}
            components={{ strong: <strong className="strong" /> }}
          />
        </p>
        <div className="waiting_wrap">
          <ul className="waiting_list">
            {data?.map((item, idx) => (
              <BoothItem key={`${item.id}-${idx}`} {...item} />
            ))}
          </ul>
        </div>
        <TicketResistration />
        <Link href="/history" className="my_waiting">
          {i18n.t("list.my.histoty.btn")}
        </Link>
      </div>
    </div>
  );
};

export default WaitingListPage;
