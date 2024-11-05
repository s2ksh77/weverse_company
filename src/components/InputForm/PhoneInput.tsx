import { useCountryCodes } from "@/hooks/useContryCode";
import {
  ChangeEvent,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";

type PhoneInputProps = {};

export const PhoneInput = forwardRef<{}, PhoneInputProps>((props, ref) => {
  const [value, setValue] = useState("");
  const { data } = useCountryCodes();
  const [countryCode, setCountryCode] = useState("");
  const [isValid, setIsValid] = useState(true);

  useImperativeHandle(ref, () => ({
    isValid: () => {
      const isError = value.trim().length > 0 && isValid;
      setIsValid(isError);
      return isError;
    },
    value: {
      value,
      countryCode,
    },
  }));

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setCountryCode(value);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value: targetValue } = e.target;
    const value = targetValue.replace(/\D/g, "");
    setValue(value);
  };

  useEffect(() => {
    if (!isValid) setIsValid(true);
  }, [value]);

  useEffect(() => {
    if (data && data.length > 0 && !countryCode) setCountryCode(data[0].value);
  }, [data, countryCode]);

  return (
    <div className="phone_wrap">
      <div className="phone_form">
        <label className="select_label -area" aria-invalid={!isValid}>
          <span className="blind">area code</span>
          <select
            className="phone_select"
            onChange={handleSelectChange}
            defaultValue={data ? (data[0].value as string) : "SOUTH_KOREA"}
          >
            {data?.map((item, idx) => (
              <option key={`${item.value}-${idx}`} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </label>
        <label className="phone_label" aria-invalid={!isValid}>
          <span className="blind">phone number</span>
          <input
            type="tel"
            className="contact_input"
            placeholder="01012345678"
            value={value}
            onChange={handleChange}
          />
        </label>
      </div>
    </div>
  );
});

PhoneInput.displayName = "PhoneInput";
