import { Link } from "react-router-dom";

type SidebarProps = {
  items: Array<{ label: string; href: string }>;
};

const Sidebar = ({ items }: SidebarProps) => {
  return (
    <div style={{ display: "flex", gap: 10 }}>
      {items.map((item) => (
        <Link role="navigation" key={item.label} to={item.href}>
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
