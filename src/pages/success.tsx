import Head from "next/head";
import Link from "next/link";
import Header from "@/components/layout/header";

export default function Success() {
  return (
    <>
      <Head>
        <title>줄서기 신청 완료 - 사전과제</title>
      </Head>
      <div className="container -waiting_success">
        <Header close />
        <div className="result_area">
          <h2 className="title">신청완료</h2>
          <div className="result">
            나의 대기그룹<em className="group">G -1</em>
          </div>
        </div>
        <div className="content">
          <div className="waiting_info">
            <dl className="info_list">
              <div className="info_item">
                <dt className="info_title">부스</dt>
                <dd className="info_text">Weverse 포토부스</dd>
              </div>
              <div className="info_item">
                <dt className="info_title">위치</dt>
                <dd className="info_text">한얼광장 내 KSPO DOME 앞</dd>
              </div>
              <div className="info_item">
                <dt className="info_title">인원</dt>
                <dd className="info_text">1명</dd>
              </div>
              <div className="info_item">
                <dt className="info_title">알림방법</dt>
                <dd className="info_text">
                  카카오톡 <br />
                  +82 10****5678
                </dd>
              </div>
            </dl>
          </div>
          <div className="notification_area">
            <strong className="title">안내사항</strong>
            <p className="notification">
              줄서기 신청 시, 선택한 카카오톡/e-mail 알림을 꼭 확인해주세요.
            </p>
            <p className="notification">
              신청자가 입장 알림 이후 부스를 방문하지 않을 시, 입장이 불가하오니
              이용에 유의해 주시기 바랍니다.
            </p>
          </div>
          <div className="button_area">
            <a className="confirm_button">현황보기</a>
            <Link href="/history" className="normal_button">
              내역보기
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
