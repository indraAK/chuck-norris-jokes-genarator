import { useLocation } from "react-router";
import styles from "./appbar.module.css";
import GoBack from "./go-back";

const AppBar = () => {
  const location = useLocation();
  const isHomePage = location.search === "" && location.pathname === "/";

  return (
    <header className={styles.appbar}>
      <div className={`container ${styles.container}`}>
        {!isHomePage && <GoBack />}
        <h1 className={styles.title}>CHUCK NORRIS</h1>
      </div>
    </header>
  );
};

export default AppBar;
