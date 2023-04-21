import styles from "./AgendaAdmin.module.css";
const AgendaAdmin = () => {
  return (
    <div className={styles.agendaAdmin}>
      <img
        className={styles.arcaContinentalLogo4Icon}
        alt=""
        src="/arca-continental-logo-4@2x.png"
      />
      <img className={styles.navbarIcon} alt="" src="/navbar.svg" />
      <div className={styles.jueves9DeMarzoParent}>
        <b className={styles.jueves9De}>Jueves 9 de Marzo</b>
        <div className={styles.groupChild} />
        <div className={styles.groupItem} />
        <div className={styles.aprobadaParent}>
          <b className={styles.aprobada}>Aprobada</b>
          <div className={styles.rectangleParent}>
            <div className={styles.groupInner} />
            <div className={styles.aBlackJadeSkyBlue}>
              <div className={styles.jadeSkyBlue}>
                <img
                  className={styles.clipPathGroup}
                  alt=""
                  src="/clip-path-group.svg"
                />
                <b className={styles.l}>L</b>
              </div>
            </div>
          </div>
          <div className={styles.abarrotesLaCentral}>Abarrotes La Central</div>
          <div className={styles.desarrolladorDavidBeltrnWrapper}>
            <div className={styles.desarrolladorDavidBeltrn}>
              Desarrollador: David Beltrán
            </div>
          </div>
        </div>
        <div className={styles.pendienteParent}>
          <b className={styles.pendiente}>Pendiente</b>
          <div className={styles.rectangleParent}>
            <div className={styles.groupInner} />
            <div className={styles.aBlackJadeSkyBlue}>
              <div className={styles.jadeSkyBlue}>
                <img
                  className={styles.clipPathGroup}
                  alt=""
                  src="/clip-path-group1.svg"
                />
                <b className={styles.n}>N</b>
              </div>
            </div>
          </div>
          <div className={styles.abarrotesLaCentral}>Nortesur Tiendita</div>
          <div className={styles.desarrolladorDavidBeltrnWrapper}>
            <div className={styles.desarrolladorDavidBeltrn}>
              Desarrollador: David Beltrán
            </div>
          </div>
        </div>
        <div className={styles.groupParent}>
          <div className={styles.groupWrapper}>
            <div className={styles.rectangleContainer}>
              <div className={styles.groupInner} />
              <div className={styles.aBlackJadeSkyBlue}>
                <div className={styles.jadeSkyBlue}>
                  <img
                    className={styles.clipPathGroup}
                    alt=""
                    src="/clip-path-group2.svg"
                  />
                  <b className={styles.m}>M</b>
                </div>
              </div>
            </div>
          </div>
          <b className={styles.aprobada1}>Aprobada</b>
          <div className={styles.abarrotesLaCentral}>Abarrote Montesurri</div>
          <div className={styles.desarrolladorMarucaCantWrapper}>
            <div className={styles.desarrolladorDavidBeltrn}>
              Desarrollador: Maruca Cantú
            </div>
          </div>
        </div>
      </div>
      <b className={styles.pendiente1}>Pendiente</b>
      <b className={styles.pendiente2}>Pendiente</b>
      <div className={styles.viernes10DeMarzoParent}>
        <b className={styles.jueves9De}>Viernes 10 de Marzo</b>
        <div className={styles.groupChild} />
        <div className={styles.groupItem} />
        <div className={styles.groupContainer}>
          <div className={styles.groupDiv}>
            <div className={styles.groupInner} />
            <div className={styles.aBlackJadeSkyBlue}>
              <div className={styles.jadeSkyBlue}>
                <img
                  className={styles.clipPathGroup}
                  alt=""
                  src="/clip-path-group3.svg"
                />
                <b className={styles.l}>L</b>
              </div>
            </div>
          </div>
          <div className={styles.abarrotesLaCentral}>Abarrotes La Central</div>
          <div className={styles.desarrolladorMarucaCantWrapper}>
            <div className={styles.desarrolladorDavidBeltrn}>
              Desarrollador: Maruca Cantú
            </div>
          </div>
        </div>
        <div className={styles.groupParent1}>
          <div className={styles.groupDiv}>
            <div className={styles.groupInner} />
            <div className={styles.aBlackJadeSkyBlue}>
              <div className={styles.jadeSkyBlue}>
                <img
                  className={styles.clipPathGroup}
                  alt=""
                  src="/clip-path-group4.svg"
                />
                <b className={styles.n}>N</b>
              </div>
            </div>
          </div>
          <div className={styles.abarrotesLaCentral}>Nortesur Tiendita</div>
          <div className={styles.desarrolladorMarucaCantWrapper}>
            <div className={styles.desarrolladorDavidBeltrn}>
              Desarrollador: Maruca Cantú
            </div>
          </div>
          <b className={styles.pendiente3}>Pendiente</b>
        </div>
        <div className={styles.groupParent2}>
          <div className={styles.groupWrapper}>
            <div className={styles.rectangleContainer}>
              <div className={styles.groupInner} />
              <div className={styles.aBlackJadeSkyBlue}>
                <div className={styles.jadeSkyBlue}>
                  <img
                    className={styles.clipPathGroup}
                    alt=""
                    src="/clip-path-group5.svg"
                  />
                  <b className={styles.m}>M</b>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.abarrotesLaCentral}>Abarrote Montesurri</div>
          <div className={styles.desarrolladorDavidBeltrnWrapper}>
            <div className={styles.desarrolladorDavidBeltrn}>
              Desarrollador: David Beltrán
            </div>
          </div>
        </div>
      </div>
      <div className={styles.groupParent3}>
        <div className={styles.aprobadaGroup}>
          <b className={styles.aprobada2}>Aprobada</b>
          <div className={styles.abarroteMontesurri2}>Abarrote Montesurri</div>
          <div className={styles.desarrolladorDavidBeltrnWrapper1}>
            <div className={styles.desarrolladorDavidBeltrn}>
              Desarrollador: David Beltrán
            </div>
          </div>
        </div>
        <div className={styles.groupWrapper1}>
          <div className={styles.rectangleContainer}>
            <div className={styles.groupInner} />
            <div className={styles.aBlackJadeSkyBlue}>
              <div className={styles.jadeSkyBlue}>
                <img
                  className={styles.clipPathGroup}
                  alt=""
                  src="/clip-path-group6.svg"
                />
                <b className={styles.j}>J</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgendaAdmin;
