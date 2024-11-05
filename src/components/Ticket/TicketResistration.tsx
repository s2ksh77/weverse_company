import React from "react";

const TicketResistration = () => {
  return (
    <div className="standing_wrap">
      <div className="regist_wrap">
        <strong className="regist_title">티켓 등록</strong>
        <button type="button" className="regist_button">
          등록
        </button>
      </div>
      <p className="standing_text">
        스탠딩존은 티켓 등록이 필요하며, 위버스 앱에서만 신청 가능합니다.
      </p>
    </div>
  );
};

export default TicketResistration;
