interface IHeaderProps {
  home?: boolean;
  close?: boolean;
}

export default function Header({ home = false, close = false }: IHeaderProps) {
  return (
    <div className="header">
      <h1 className="blind">Weverse Con Festival</h1>
      {close ? (
        <button type="button" className="close_button">
          <span className="blind">close</span>
        </button>
      ) : (
        <button type="button" className="prev_button">
          <span className="blind">previous</span>
        </button>
      )}
      {!home ? (
        <>
          <div className="spacer"></div>
          <div className="home_button">Home</div>
        </>
      ) : null}
      <div className="waiting_language_select">
        <select defaultValue="한국어">
          <option value="English">English</option>
          <option value="한국어">한국어</option>
          <option value="日本語">日本語</option>
        </select>
      </div>
    </div>
  );
}
