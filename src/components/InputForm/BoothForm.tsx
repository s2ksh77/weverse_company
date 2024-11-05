import React, { useState } from "react";

import { PhoneInput } from "./PhoneInput";
import { EmailInput } from "./EmailInput";
import NumberInput from "./NumberInput";

const BoothForm = ({ data: { maxPersonsByTeam }, t }) => {
  const [selectedOption, setSelectedOption] = useState("kakao");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="form_wrap">
      <NumberInput
        maxPersonsByTeam={maxPersonsByTeam}
        onChange={() => console.log("체인지")}
      />
      <div className="alarm_wrap">
        <strong className="form_title">
          {t("detail.booth.input.title.notification")}
        </strong>
        <p className="alarm_text">
          {t("detail.booth.input.desc.notification")}
        </p>
        <div className="radio_wrap">
          <div className="radio_item">
            <input
              type="radio"
              className="input_radio blind"
              id="kakao"
              name="alarm"
              value="kakao"
              checked={selectedOption === "kakao"}
              onChange={handleOptionChange}
            />
            <label htmlFor="kakao" className="radio_label">
              {t("detail.booth.input.notification.option.kakaotalk")}
            </label>
          </div>
          <div className="radio_item">
            <input
              type="radio"
              className="input_radio blind"
              id="email"
              name="alarm"
              value="email"
              checked={selectedOption === "email"}
              onChange={handleOptionChange}
            />
            <label htmlFor="email" className="radio_label">
              {t("detail.booth.input.notification.option.email")}
            </label>
          </div>
        </div>
        <div className="contact_wrap">
          {selectedOption === "kakao" ? (
            <PhoneInput t={t} />
          ) : (
            <EmailInput t={t} />
          )}
        </div>
        <p className="alarm_notice">
          {t("detail.booth.input.notification.notice1")}
        </p>
        <p className="alarm_notice">
          {t("detail.booth.input.notification.notice2")}
        </p>
        <div className="agree_wrap" aria-invalid="true">
          {/* 입력값 에러케이스시 aria-invalid="true" 추가해주세요. */}
          <input type="checkbox" className="input_checkbox blind" id="agree" />
          <label htmlFor="agree" className="checkbox_label">
            (필수) 개인정보 수집 이용 동의
          </label>
          <button type="button" className="detail_link">
            <span className="blind">Go Detail</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BoothForm;
