"use client";

import { useParams } from "next/navigation";
import clsx from "clsx"; 
// GLOBAL CUSTOM COMPONENTS

import { Span } from "components/Typography";
import IconComponent from "components/IconComponent"; 
// CUSTOM DATA MODEL


// ==============================================================
export default function ListItem({
  item
}) {
  const {
    category
  } = useParams();
  return <div className={clsx({
    "list-item": true,
    active: item.href.endsWith(category)
  })}>
      <IconComponent icon={item.icon} fontSize="small" color="inherit" />
      <Span color="inherit" fontWeight="600">
        {item.title}
      </Span>
    </div>;
}