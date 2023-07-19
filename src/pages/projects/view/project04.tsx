import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "@/styles/page.module.scss";
/* Constants =========================================================== */
import projectDetail04 from "@/public/images/projectdetail04.jpeg";
/* Prop =========================================================== */
type Prop = {};
type projectDetailProps = {
  id: string | undefined;
  title: string;
  content: any;
  url: any;
};
/* <projectDetail/> */
export default function ProjectDetail() {
  const router = useRouter();
  return (
    <div className={styles.pageBox}>
      <div className={styles.box}>
        <h3 className={styles.title}>
          <button
            onClick={() => {
              router.back();
            }}
          >
            목록으로
          </button>
        </h3>
      </div>
      <div className={styles.detail}>
        <div className={styles.title}>건물임대관리</div>
        <Image
          src={projectDetail04}
          alt="건물임대관리"
          className={styles.projectImage}
        />
        <div className={styles.content}>
          임차인 전용 어플리케이션으로 임대정보를 제공하고 이대료 결제 및
          커뮤니티 기능을 제공하는 서비스로 전체적인 UX/UI 디자인과 함께 앱 화면
          퍼블리싱 및 관리자 페이지 퍼블리싱을 맡아 프로젝트를 진행하였습니다.
        </div>
        <Link
          href="http://adena.design.pm5.kr/admin/member/"
          className={styles.link}
          target="_blank"
        >
          관리자페이지 보러가기
        </Link>
        <Link
          href="http://adena.design.pm5.kr/rental/login/login1.html"
          className={styles.link}
          target="_blank"
        >
          앱화면 보러가기
        </Link>
      </div>
    </div>
  );
}

ProjectDetail.defaultProps = {};
