import Head from "next/head";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

export default function History() {
  return (
    <>
      <Head>
        <title>줄서기 내역 - 사전과제</title>
      </Head>
      <div className="container -waiting_history">
        <Header />
        <div className="booth_tab_list" role="tablist">
          {/* 선택됐을 경우 aria-selected="true" 추가해주세요 */}
          <button
            type="button"
            className="booth_tab_item"
            role="tab"
            aria-selected="true"
          >
            예정 및 완료
          </button>
          <button type="button" className="booth_tab_item" role="tab">
            취소
          </button>
        </div>
        <div className="booth_tab_content" role="tabpanel">
          <ul className="waiting_history_list">
            <li className="waiting_history_item">
              <em className="status">입장예정</em>
              <strong className="booth_title">인생네컷 체험</strong>
              <dl className="info_list">
                <div className="info_item">
                  <dt className="info_title">대기그룹</dt>
                  <dd className="info_text">G-1</dd>
                </div>
                <div className="info_item">
                  <dt className="info_title">신청시간</dt>
                  <dd className="info_text">2023.06.10 13:34</dd>
                </div>
                <div className="info_item">
                  <dt className="info_title">인원</dt>
                  <dd className="info_text">4명</dd>
                </div>
                <div className="info_item">
                  <dt className="info_title">알림방법</dt>
                  <dd className="info_text">카카오톡</dd>
                </div>
              </dl>
              <div className="button_area">
                <button type="button" className="history_button">
                  취소하기
                </button>
                <button type="button" className="history_button -point">
                  상세보기
                </button>
              </div>
            </li>
            <li className="waiting_history_item">
              <em className="status -cancel">취소</em>
              <strong className="booth_title">인생네컷 체험</strong>
              <dl className="info_list">
                <div className="info_item">
                  <dt className="info_title">대기그룹</dt>
                  <dd className="info_text">G-1</dd>
                </div>
                <div className="info_item">
                  <dt className="info_title">신청시간</dt>
                  <dd className="info_text">2023.06.10 13:34</dd>
                </div>
                <div className="info_item">
                  <dt className="info_title">인원</dt>
                  <dd className="info_text">1명</dd>
                </div>
                <div className="info_item">
                  <dt className="info_title">알림방법</dt>
                  <dd className="info_text">e-mail</dd>
                </div>
              </dl>
              <div className="button_area">
                <button type="button" className="history_button -point">
                  상세보기
                </button>
              </div>
            </li>
          </ul>
        </div>
        {/* toast 활성화/비활성화, is_active class를 추가/제거 해주세요. */}
        <p className="weverse_common_toast">줄서기가 취소 되었습니다.</p>
      </div>
      <Footer />
    </>
  );
}
