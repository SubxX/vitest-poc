type SidebarProps = {
  items: Array<{ label: string; href: string }>;
};

const Sidebar = ({ items }: SidebarProps) => {
  return (
    <div>
      {items.map((item) => (
        <a role="navigation" key={item.label} href={item.href}>
          {item.label}
        </a>
      ))}
    </div>
  );
};

export default Sidebar;
