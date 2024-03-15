import Head from "next/head";
import Link from "next/link";
import Header from "@/components/header";

export default function Detail() {
  return (
    <>
      <Head>
        <title>줄서기 신청 - 사전과제</title>
      </Head>
      <div className="container -waiting_detail">
        <Header />
        <div className="content">
          <div className="booth_wrap">
            <h2 className="booth_title">Weverse 포토부스</h2>
            <dl className="boooth_list">
              <dt className="boooth_title">운영시간</dt>
              <dd className="boooth_detail">9:00 ~ 18:00</dd>
              <dt className="boooth_title">부스위치</dt>
              <dd className="boooth_detail">한얼광장 내 KSPO DOME 앞</dd>
            </dl>
          </div>
          <div className="form_wrap">
            <div className="number_wrap">
              <strong className="form_title">인원</strong>
              <div className="count_wrap">
                {/* 버튼 비활성화시 disabled 추가해주세요. */}
                <button type="button" className="count_button -minus" disabled>
                  <span className="blind">decrease</span>
                </button>
                <div className="count_text">1</div>
                {/* 버튼 비활성화시 disabled 추가해주세요. */}
                <button type="button" className="count_button -plus">
                  <span className="blind">increase</span>
                </button>
              </div>
            </div>
            <div className="alarm_wrap">
              <strong className="form_title">알림 방법</strong>
              <p className="alarm_text">
                선택한 알림 방법으로 줄서기 현황을 확인할 수 있습니다.
              </p>
              <div className="radio_wrap">
                <div className="radio_item">
                  <input
                    type="radio"
                    className="input_radio blind"
                    id="kakao"
                    name="alarm"
                    defaultChecked={true}
                  />
                  <label htmlFor="kakao" className="radio_label">
                    카카오톡
                  </label>
                </div>
                <div className="radio_item">
                  <input
                    type="radio"
                    className="input_radio blind"
                    id="email"
                    name="alarm"
                  />
                  <label htmlFor="email" className="radio_label">
                    e-mail
                  </label>
                </div>
              </div>
              <div className="contact_wrap">
                <div className="phone_wrap">
                  <div className="phone_form">
                    <label className="select_label -area">
                      <span className="blind">area code</span>
                      {/* 입력값 에러케이스시 aria-invalid="true" 추가해주세요. */}
                      <select className="phone_select">
                        <option value="">+82</option>
                      </select>
                    </label>
                    <label className="phone_label">
                      <span className="blind">phone number</span>
                      {/* 입력값 에러케이스시 aria-invalid="true" 추가해주세요. */}
                      <input
                        type="tel"
                        className="contact_input"
                        placeholder="01012345678"
                      />
                    </label>
                  </div>
                </div>
                <div className="email_wrap" style={{ display: "none" }}>
                  <div className="email_form">
                    <label className="id_label">
                      <span className="blind">id</span>
                      {/* 입력값 에러케이스시 aria-invalid="true" 추가해주세요. */}
                      <input type="text" className="contact_input" />
                    </label>
                    <div className="at">@</div>
                    <label className="domain_label">
                      <span className="blind">domain</span>
                      {/* 입력값 에러케이스시 aria-invalid="true" 추가해주세요. */}
                      <input type="text" className="contact_input" />
                    </label>
                  </div>
                  <label className="select_label -domain">
                    <span className="blind">domain</span>
                    {/* 입력값 에러케이스시 aria-invalid="true" 추가해주세요. */}
                    <select className="domain_select">
                      <option value="">직접 입력</option>
                    </select>
                  </label>
                </div>
              </div>
              <p className="alarm_notice">
                줄서기 신청 시, 선택한 카카오톡/e-mail 알림을 꼭 확인해주세요.
              </p>
              <p className="alarm_notice">
                신청자가 입장 알림 이후 부스를 방문하지 않을 시, 입장이
                불가하오니 이용에 유의해 주시기 바랍니다.
              </p>
            </div>
            <div className="agree_wrap">
              {/* 입력값 에러케이스시 aria-invalid="true" 추가해주세요. */}
              <input
                type="checkbox"
                className="input_checkbox blind"
                id="agree"
              />
              <label htmlFor="agree" className="checkbox_label">
                (필수) 개인정보 수집 이용 동의
              </label>
              <button type="button" className="detail_link">
                <span className="blind">Go Detail</span>
              </button>
            </div>
          </div>
          <div className="button_area">
            <Link href="/success">
              <button type="button" className="apply_button -common_button">
                신청하기
              </button>
            </Link>
          </div>
        </div>
        {/* toast 활성화/비활성화, is_active class를 추가/제거 해주세요. */}
        <p className="weverse_common_toast">모든 정보를 입력해주세요</p>
      </div>
    </>
  );
}
