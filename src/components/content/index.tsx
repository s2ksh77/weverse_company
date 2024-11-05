import Link from "next/link";
import React from "react";

const Content = () => {
  return (
    <div className="container -waiting_list">
      <div className="content">
        <p className="waiting_text">
          페스티벌 현장 반경 3km 안에서 신청 가능하며,{" "}
          <strong className="strong">위치 정보 이용 동의</strong>가 필수입니다.
        </p>
        <div className="waiting_wrap">
          <ul className="waiting_list">
            <li className="waiting_item">
              <strong className="booth_title">Weverse 포토부스</strong>
              <div className="booth_time">줄서기 오픈 시간 : 9:00</div>
              {/* 버튼 비활성화시 disabled과 aria-disabled 추가해주세요. */}
              <Link href="/detail">
                <button type="button" className="apply_button -common_button">
                  신청
                </button>
              </Link>
            </li>
          </ul>
        </div>
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
        <Link href="/history" className="my_waiting">
          나의 줄서기 내역
        </Link>
      </div>
    </div>
  );
};

export default Content;
