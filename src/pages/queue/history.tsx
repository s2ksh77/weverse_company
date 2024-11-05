import Head from "next/head";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import HistoryItem from "@/components/History/HistoryItem";
import { useReservations } from "@/hooks/useReservation";
import { ReservationType } from "./types";

export default function History() {
  const { t } = useTranslation("history");
  const [selectedTab, setSelectedTab] = useState("WAITING");
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const { data } = useReservations();

  return (
    <>
      <div className="container -waiting_history">
        <Header />
        <div className="booth_tab_list" role="tablist">
          <button
            type="button"
            className="booth_tab_item"
            role="tab"
            {...(selectedTab === "WAITING" && { "aria-selected": true })}
            onClick={() => setSelectedTab("WAITING")}
          >
            {t("history.tab.progress")}
          </button>
          <button
            type="button"
            className="booth_tab_item"
            role="tab"
            {...(selectedTab === "CANCELED" && { "aria-selected": true })}
            onClick={() => setSelectedTab("CANCELED")}
          >
            {t("history.tab.cancel")}
          </button>
        </div>
        <div className="booth_tab_content" role="tabpanel">
          <ul className="waiting_history_list">
            {data
              ?.filter((item) => item.status === selectedTab)
              ?.map((item: ReservationType, idx) => (
                <HistoryItem
                  key={`${item.id}-${idx}`}
                  {...item}
                  setIsAlertOpen={setIsAlertOpen}
                />
              ))}
          </ul>
        </div>
        {/* toast 활성화/비활성화, is_active class를 추가/제거 해주세요. */}
        <p className={`weverse_common_toast ${isAlertOpen ? "is_active" : ""}`}>
          줄서기가 취소 되었습니다.
        </p>
      </div>
    </>
  );
}
