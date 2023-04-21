import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LogIn.module.css";
const LogIn = () => {
  const navigate = useNavigate();

  const onOlvidMiContraseaClick = useCallback(() => {
    navigate("/2aa-olvide-contrasea");
  }, [navigate]);

  const onBotonContainerClick = useCallback(() => {
    navigate("/landing-pagehome-desarrollador");
  }, [navigate]);

  const onNuevoUsuarioRegistrateClick = useCallback(() => {
    navigate("/2b-registar-nuevo-usuario");
  }, [navigate]);

  return (
    <div className={styles.logIn}>
      <img className={styles.logoArcaIcon} alt="" src="/logo-arca1@2x.png" />
      <div className={styles.logIn1}>
        <div className={styles.logInContrasea}>
          <div className={styles.contrasea}>CONTRASEÑA</div>
          <div className={styles.logInContraseaChild} />
          <div className={styles.escribeTuContrasea}>
            Escribe tu contraseña aquí...
          </div>
        </div>
        <div className={styles.logInUsuario}>
          <div className={styles.logInContraseaChild} />
          <div className={styles.escribeTuNombre}>
            Escribe tu nombre de usuario aquí...
          </div>
          <div className={styles.nombreDeUsuario}>NOMBRE DE USUARIO</div>
        </div>
        <b className={styles.iniciarSession}>INICIAR SESSION</b>
      </div>
      <b className={styles.olvidMiContrasea} onClick={onOlvidMiContraseaClick}>
        Olvidé mi contraseña y/o nombre de usuario.
      </b>
      <div className={styles.boton} onClick={onBotonContainerClick}>
        <div className={styles.navbar}>
          <div className={styles.box} />
        </div>
        <div className={styles.entrar}>Entrar</div>
      </div>
      <div
        className={styles.nuevoUsuarioRegistrateContainer}
        onClick={onNuevoUsuarioRegistrateClick}
      >
        {`Nuevo usuario? `}
        <span className={styles.registrate}>Registrate</span>.
      </div>
    </div>
  );
};

export default LogIn;
