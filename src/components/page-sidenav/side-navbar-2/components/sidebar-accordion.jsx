import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Collapse from "@mui/material/Collapse"; 
// LOCAL CUSTOM COMPONENTS

import ButtonContent from "./button-content"; 
// STYLED COMPONENTS

import { NavItemButton, ChevronRightIcon, NavExpandRoot } from "../styles"; 
// CUSTOM DATA MODEL


// ================================================================
export default function SidebarAccordion({
  item,
  children
}) {
  const {
    name,
    icon
  } = item || {};
  const pathname = usePathname();
  const [hasActive, setHasActive] = useState(0);
  const [collapsed, setCollapsed] = useState(false);

  const handleClick = () => setCollapsed(state => !state);

  const find = function findPath(item) {
    if (!item.children) return null;

    for (const li of item.children) {
      if (li.path === pathname) return li;
      const childResult = findPath(li);
      if (childResult) return childResult;
    }

    return null;
  }(item);

  useEffect(() => {
    if (find) {
      setCollapsed(true);
      setHasActive(1);
    }

    return () => {
      setCollapsed(false);
      setHasActive(0);
    };
  }, [find]);
  return <NavExpandRoot className="subMenu">
      <NavItemButton disableRipple disableTouchRipple active={hasActive} onClick={handleClick} sx={{
      justifyContent: "space-between"
    }}>
        <ButtonContent name={name} icon={icon} />
        <ChevronRightIcon collapsed={collapsed ? 1 : 0} />
      </NavItemButton>

      <Collapse in={collapsed} unmountOnExit>
        <div className="expansion-panel">{children}</div>
      </Collapse>
    </NavExpandRoot>;
}