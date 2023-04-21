import styles from "./Splash.module.css";
const Splash = () => {
  return (
    <div className={styles.splash}>
      <div className={styles.arcaContinentalSabContainer}>
        <p className={styles.arcaContinentalSab}>
          Arca Continental S.A.B. de C.V., Derechos reservados ©2023
        </p>
        <p className={styles.arcaContinentalSab}>
          Av. San Jerónimo 813 Pte. C.P. 64640, Monterrey, México
        </p>
      </div>
      <div className={styles.fullHouseIncParent}>
        <div className={styles.fullHouseInc}>{`FULL HOUSE INC.® `}</div>
        <img
          className={styles.logoFullhouseIcon}
          alt=""
          src="/logo-fullhouse@2x.png"
        />
        <img className={styles.xIcon} alt="" src="/x.svg" />
        <img className={styles.logoArcaIcon} alt="" src="/logo-arca@2x.png" />
      </div>
    </div>
  );
};

export default Splash;
