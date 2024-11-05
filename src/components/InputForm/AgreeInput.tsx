import React, {
  ChangeEvent,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { useTranslation } from "react-i18next";

type AgreeInputProps = {};

export const AgreeInput = forwardRef<{}, AgreeInputProps>((props, ref) => {
  const { t } = useTranslation("booth-detail");
  const [isChecked, setIsChecked] = useState(false);
  const [isValid, setIsValid] = useState(true);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    setIsChecked(checked);
  };

  useImperativeHandle(ref, () => ({
    isValid: () => {
      setIsValid(isChecked);
      return isChecked;
    },
    value: isChecked,
  }));

  useEffect(() => {
    if (!isValid) setIsValid(true);
  }, [isChecked]);

  return (
    <div className="agree_wrap">
      <input
        type="checkbox"
        className="input_checkbox blind"
        id="agree"
        value={String(isChecked)}
        onChange={handleCheckboxChange}
        aria-invalid={!isValid}
      />
      <label htmlFor="agree" className="checkbox_label">
        {t("detail.booth.personal.info.collect.consent")}
      </label>
      <button type="button" className="detail_link">
        <span className="blind">Go Detail</span>
      </button>
    </div>
  );
});

AgreeInput.displayName = "AgreeInput";
