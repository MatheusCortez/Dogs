import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { UserContext } from "../../../../Hooks/Context/UserContext";
import useMedia from "../../../../Hooks/useMedia";
import styles from "./UserHeaderNav.module.css";
import { ReactComponent as MinhasFotos } from "../../../../Assets/feed.svg";
import { ReactComponent as Estatisticas } from "../../../../Assets/estatisticas.svg";
import { ReactComponent as Adicionar } from "../../../../Assets/adicionar.svg";
import { ReactComponent as Sair } from "../../../../Assets/sair.svg";

function UserHeaderNav() {
  const { userLogout } = React.useContext(UserContext);
  const mobile = useMedia("(max-width:40rem)");
  const [mobileMenu, setMobileMenu] = React.useState(false);


  const{pathname}=useLocation()

  React.useEffect(()=>{
    setMobileMenu(false)
  },[pathname])
  return (
    <>
      {mobile && (
        <button
        className={` ${styles.mobileBtn} ${mobileMenu&& styles.mobileBtnActive}`}
          aria-label="Menu"
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}

      <nav className={`${mobile? styles.navMobile : styles.nav } ${mobileMenu &&styles.navMobileActive }`}>
        <NavLink to="/conta" end activeClassName={styles.active}>
          <MinhasFotos />
          {mobile && "Minhas Fotos"}
        </NavLink>
        <NavLink to="/conta/estatisticas" activeClassName={styles.active}>
          <Estatisticas />
          {mobile && "Estatisticas"}
        </NavLink>
        <NavLink to="/conta/postar" activeClassName={styles.active}>
          <Adicionar />
          {mobile && "Adicionar Fotos"}
        </NavLink>
        <button onClick={userLogout}>
          {" "}
          <Sair /> {mobile && "Sair"}
        </button>
      </nav>
    </>
  );
}

export default UserHeaderNav;
