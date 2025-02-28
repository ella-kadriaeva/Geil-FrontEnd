import { Link } from "react-router";
import { Heart, ShoppingBag, Menu } from "lucide-react";
import styles from "./IconsBlockHeader.module.scss";
export default function IconsBlockHeader() {
  return (
    <div className={styles.icons}>
      <div className={styles.navIcons}>
        <Link to="/likes">
          <Heart className={styles.svgLink} />
        </Link>
        <Link to="/cart">
          <ShoppingBag className={styles.svgLink} />
        </Link>
      </div>
      <Menu className={styles.svgBtn} />
    </div>
  );
}
