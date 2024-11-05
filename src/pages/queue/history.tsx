import { useTranslation } from "react-i18next";
import { Suspense, useState } from "react";
import HistoryItem from "@/components/History/HistoryItem";
import { useReservations } from "@/hooks/useReservation";
import { ReservationType } from "./types";
import { TRANSLATE_META } from "@/common/constants";
import Loader from "@/components/Loader/Loader";

export default function History() {
  const { t } = useTranslation(TRANSLATE_META.HISTORY);
  const [selectedTab, setSelectedTab] = useState("WAITING");
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const { data, isLoading } = useReservations();

  return (
    <Suspense fallback={<Loader />}>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="container -waiting_history">
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
          <p
            className={`weverse_common_toast ${isAlertOpen ? "is_active" : ""}`}
          >
            {t("history.detail.button.cancel.info")}
          </p>
        </div>
      )}
    </Suspense>
  );
}
