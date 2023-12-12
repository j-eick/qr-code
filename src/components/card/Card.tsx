import styles from "./Card.module.scss";

// type cardProps = {
//   children: React.ReactNode;
// };

export default function Card() {
  return (
    <>
      <div className={styles.card}>
        <img className={styles.img_qr} src="/image-qr-code.png" alt="qr_code" />
        <h1 className={styles.h1}>
          Improve your front-end skills by building projects
        </h1>
        <p className={styles.p}>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </>
  );
}
