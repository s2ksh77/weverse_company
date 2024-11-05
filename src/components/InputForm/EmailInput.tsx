import { TRANSLATE_META } from "@/common/constants";
import { useDomains } from "@/hooks/useDomain";
import {
  ChangeEvent,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { useTranslation } from "react-i18next";

type EmailInputProps = {};

export const EmailInput = forwardRef<{}, EmailInputProps>((props, ref) => {
  const { data } = useDomains();
  const { t } = useTranslation(TRANSLATE_META.DETAIL);
  const [isValid, setIsValid] = useState(true);
  const [selectedDomain, setSelectedDomain] = useState("");
  const [domain, setDomain] = useState("");
  const [emailId, setEmailId] = useState("");

  const handleDomainSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setSelectedDomain(value);
    if (value !== "") setDomain(value);
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
    type: "domain" | "email"
  ) => {
    const { value } = event.target;
    type === "domain" ? setDomain(value) : setEmailId(value);
  };

  useImperativeHandle(ref, () => ({
    isValid: () => {
      const isError = emailId.trim().length > 0 && domain.trim().length > 0;
      setIsValid(isError);
      return isError;
    },
    value: `${emailId}@${domain}`,
  }));

  useEffect(() => {
    if (!isValid) setIsValid(true);
  }, [emailId, domain]);

  return (
    <div className="email_wrap">
      <div className="email_form">
        <label className="id_label" aria-invalid={!isValid}>
          <span className="blind">id</span>
          <input
            type="text"
            className="contact_input"
            onChange={(e) => handleChange(e, "email")}
          />
        </label>
        <div className="at">@</div>
        <label className="domain_label" aria-invalid={!isValid}>
          <span className="blind">domain</span>
          {selectedDomain === "" ? (
            <input
              type="text"
              className="contact_input"
              onChange={(e) => handleChange(e, "domain")}
            />
          ) : (
            <span className="selected_domain">{domain}</span>
          )}
        </label>
      </div>
      <label className="select_label -domain">
        <span className="blind">domain</span>
        <select className="domain_select" onChange={handleDomainSelect}>
          <option value="">{t("detail.booth.input.email.direct")}</option>
          {data?.map((item, idx) => (
            <option key={`${item.value}-${idx}`} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
});

EmailInput.displayName = "EmailInput";
