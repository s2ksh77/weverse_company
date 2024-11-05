import React, { ChangeEvent, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useForm, FormProvider } from "react-hook-form";
import { PhoneInput, EmailInput, NumberInput, AgreeInput } from ".";
import moment from "moment";
import { TRANSLATE_META } from "@/common/constants";

const BoothForm = ({ data, onSubmit }) => {
  const { t, i18n } = useTranslation(TRANSLATE_META.DETAIL);
  const [selectedOption, setSelectedOption] = useState("kakao");
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const numberRef = useRef<{ isValid: () => boolean; value: boolean }>(null);
  const agreeRef = useRef<{ isValid: () => boolean; value: boolean }>(null);
  const phoneRef = useRef<{
    isValid: () => boolean;
    value: { countryCode: string; value: string };
  }>(null);
  const emailRef = useRef<{ isValid: () => boolean; value: string }>(null);

  const handleOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const isPhoneValid = phoneRef.current?.isValid();
    const isEmailValid = emailRef.current?.isValid();
    const isAgreeValid = agreeRef.current?.isValid();

    const isValueValid =
      selectedOption === "kakao" ? isPhoneValid : isEmailValid;
    if (!isValueValid || !isAgreeValid) {
      handleAlertOpen();
      return;
    }

    console.log(
      phoneRef.current?.value,
      emailRef.current?.value,
      agreeRef.current?.value,
      numberRef.current?.value
    );
    const applicantsCount = numberRef.current?.value;
    const email = emailRef.current?.value;
    const countryCallingCode = phoneRef.current?.value.countryCode;
    const phoneNumber = phoneRef.current?.value.value;

    onSubmit({
      ...data,
      boothId: data.id,
      applicantsCount,
      reservedAt: moment().format("YYYY-MM-DDTHH:mm:ss"),
      launguage: i18n.language,
      status: "WAITING",
      ...(selectedOption === "kakao"
        ? { countryCallingCode, phoneNumber }
        : { email }),
    });
  };

  const handleAlertOpen = () => {
    setIsAlertOpen(true);
    setTimeout(() => setIsAlertOpen(false), 3000);
  };

  return (
    <>
      <div className="form_wrap">
        <NumberInput ref={numberRef} maxPersonsByTeam={data.maxPersonsByTeam} />
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
              <PhoneInput ref={phoneRef} />
            ) : (
              <EmailInput ref={emailRef} />
            )}
          </div>
          <p className="alarm_notice">
            {t("detail.booth.input.notification.notice1")}
          </p>
          <p className="alarm_notice">
            {t("detail.booth.input.notification.notice2")}
          </p>
          <AgreeInput ref={agreeRef} />
        </div>
      </div>
      <div className="button_area">
        <button
          onClick={handleSubmit}
          type="button"
          className="apply_button -common_button"
        >
          {t("detail.booth.apply.btn")}
        </button>
      </div>
      <p className={`weverse_common_toast ${isAlertOpen ? "is_active" : ""}`}>
        {t("detail.alert.enter.required")}
      </p>
    </>
  );
};

export default BoothForm;
