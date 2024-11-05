import Link from "next/link";
import { useRouter } from "next/router";
import { ChangeEvent } from "react";
import { useTranslation } from "react-i18next";

interface IHeaderProps {
  home?: boolean;
  close?: boolean;
}

export default function Header({ home = false, close = false }: IHeaderProps) {
  const router = useRouter();
  const { i18n } = useTranslation();

  const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    i18n.changeLanguage(value);
  };

  const handleClick = () => {
    if (close) router.push("/");
    else if (!home) router.back();
  };

  return (
    <div className="header">
      <h1 className="blind">Weverse Con Festival</h1>
      {close ? (
        <button type="button" className="close_button" onClick={handleClick}>
          <span className="blind">close</span>
        </button>
      ) : (
        <button type="button" className="prev_button" onClick={handleClick}>
          <span className="blind">previous</span>
        </button>
      )}
      {!home ? (
        <>
          <div className="spacer"></div>
          <div className="home_button">
            <Link href="/">Home</Link>
          </div>
        </>
      ) : null}
      <div className="waiting_language_select">
        <select defaultValue="ko" onChange={handleLanguageChange}>
          <option value="en">English</option>
          <option value="ko">한국어</option>
          <option value="ja">日本語</option>
        </select>
      </div>
    </div>
  );
}
