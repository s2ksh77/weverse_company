import { useDomains } from "@/hooks/useDomain";
import { useState } from "react";

export const EmailInput = ({ t }) => {
  const { data } = useDomains();
  const [selectedDomain, setSelectedDomain] = useState("");
  const [emailId, setEmailId] = useState("");

  const handleDomainChange = (event) => {
    setSelectedDomain(event.target.value);
  };

  const handleEmailIdChange = (event) => {
    setEmailId(event.target.value);
  };

  return (
    <div className="email_wrap">
      <div className="email_form">
        <label className="id_label">
          <span className="blind">id</span>
          <input type="text" className="contact_input" />
        </label>
        <div className="at">@</div>
        <label className="domain_label">
          <span className="blind">domain</span>
          {selectedDomain === "" ? (
            <input type="text" className="contact_input" />
          ) : (
            <span className="selected_domain">{selectedDomain}</span>
          )}
        </label>
      </div>
      <label className="select_label -domain">
        <span className="blind">domain</span>
        <select className="domain_select" onChange={handleDomainChange}>
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
};
