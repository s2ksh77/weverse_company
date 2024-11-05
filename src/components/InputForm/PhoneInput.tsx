import { useCountryCodes } from "@/hooks/useContryCode";
import { useState } from "react";

export const PhoneInput = ({ t }) => {
  const [value, setValue] = useState("");
  const [isError, setIsError] = useState(false);
  const { data } = useCountryCodes();

  const isValidPhoneNumber = (number: string) => /^010\d{8}$/.test(number);

  const handleChange = (e) => {
    const { value } = e.target;
    setValue(value);
  };

  return (
    <div className="phone_wrap">
      <div className="phone_form">
        <label className="select_label -area" aria-invalid="true">
          <span className="blind">area code</span>
          <select className="phone_select">
            {data?.map((item, idx) => (
              <option key={`${item.value}-${idx}`} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </label>
        <label className="phone_label" aria-invalid="true">
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
};
