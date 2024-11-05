import { TRANSLATE_META } from "@/common/constants";
import BoothItem from "@/components/Booth/BoothItem";
import Loader from "@/components/Loader/Loader";
import TicketResistration from "@/components/Ticket/TicketResistration";
import { useBooths } from "@/hooks/useBooths";
import Link from "next/link";
import React, { Suspense, useEffect, useState } from "react";
import { Trans, useTranslation } from "react-i18next";

const WaitingListPage = () => {
  const { data, isLoading } = useBooths();
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const { i18n } = useTranslation(TRANSLATE_META.LIST);

  return (
    <Suspense fallback={<Loader />}>
      {isLoading ? (
        <Loader />
      ) : (
        isClient && (
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
              <Link href="/queue/history" className="my_waiting">
                {i18n.t("list.my.histoty.btn")}
              </Link>
            </div>
          </div>
        )
      )}
    </Suspense>
  );
};

export default WaitingListPage;
