import Image from "next/image";
import NextLink from "next/link";

export const Sidebar = () => {
  return (
    <aside className="menu">
      <p className="menu-label">
        General
      </p>
      <ul className="menu-list">
        <li><a className="is-active">Dashboard</a></li>
        <li><a>Customers</a></li>
      </ul>
      <p className="menu-label">
        Services
      </p>
      <ul className="menu-list">
        <li><a>Payments</a></li>
        <li><a>Transfers</a></li>
        <li><a>Balance</a></li>
      </ul>
    </aside>
  );
};
