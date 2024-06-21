import React from "react";

import { Link } from "react-router-dom";
import { navbarItems } from "@/components/layout/navbar/navbar.utils";

import styles from "@/components/layout/navbar/navbar.module.css"

type NavbarProps = React.HTMLAttributes<HTMLDivElement>;

const Navbar = (props: NavbarProps) => {
  return (
    <nav {...props} className={styles.navContainer}>
      <ul>
        {navbarItems.map((item) => (
          <li key={item.label}>
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export { Navbar };
