import BoothItem from "@/components/Booth/BoothItem";
import TicketResistration from "@/components/Ticket/TicketResistration";
import { useBooths } from "@/hooks/useBooths";
import Link from "next/link";
import React from "react";

const WaitingListPage = () => {
  const { data } = useBooths();

  console.log(data);

  return (
    <div className="container -waiting_list">
      <div className="content">
        <p className="waiting_text">
          페스티벌 현장 반경 3km 안에서 신청 가능하며,{" "}
          <strong className="strong">위치 정보 이용 동의</strong>가 필수입니다.
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
          나의 줄서기 내역
        </Link>
      </div>
    </div>
  );
};

export default WaitingListPage;
