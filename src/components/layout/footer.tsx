export default function Footer() {
  return (
    <footer className={"footer"}>
      <div
        className="inner"
        style={{ height: "192px", padding: "50px 25px 52px 25px" }}
      >
        <div className="logo_area" style={{ columnGap: 0 }}>
          <a
            className="logo"
            target="_blank"
            style={{ position: "absolute", left: 0, scale: "0.58" }}
          >
            <span className="blind">HYBE</span>
          </a>
          <a
            className="logo -weverse"
            target="_blank"
            style={{ position: "absolute", left: "90px", scale: "0.58" }}
          >
            <span className="blind">WEVERSE</span>
          </a>
        </div>
        <span
          style={{ fontSize: "14px", marginTop: "27px" }}
          className="copyright"
        >
          © WEVERSE COMPANY. All rights reserved.
        </span>
        <ul className="link_list" style={{ marginTop: "14px", padding: 0 }}>
          <li>
            <a className="link" target="_blank" style={{ fontSize: "14px" }}>
              개인정보처리방침
            </a>
          </li>
          <li>
            <a className="link" target="_blank" style={{ fontSize: "14px" }}>
              쿠키 정책
            </a>
          </li>
          <li>
            <a href="#" className="link" style={{ fontSize: "14px" }}>
              쿠키 설정
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
