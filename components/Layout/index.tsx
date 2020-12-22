import { useRouter } from "next/dist/client/router";

import Sidebar from "../Sidebar";

import styles from "./Layout.module.css";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  const router = useRouter();

  return (
    <div className={styles.Container}>
      {router.pathname !== "/login" && <Sidebar />}
      <div className={styles.Content}>{children}</div>
    </div>
  );
};

export default Layout;
