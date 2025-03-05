import { Link } from "react-router";
import { Heart, ShoppingBag } from "lucide-react";
import styles from "./IconsBlockHeader.module.scss";
export default function IconsBlockHeader({className}) {
  return (
    <div className={className || styles.navIcons}>
      <Link to="/likes">
        <Heart className={styles.svgLink} />
      </Link>
      <Link to="/cart">
        <ShoppingBag className={styles.svgLink} />
      </Link>
    </div>
  );
}
