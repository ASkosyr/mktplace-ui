"use client";

import { useParams } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
import Collapse from "@mui/material/Collapse"; 
// GLOBAL CUSTOM COMPONENTS

import AccordionHeader from "components/accordion"; 
// LOCAL CUSTOM COMPONENT

import ListItem from "./list-item";
import { renderChild } from "./render-child"; 
// CUSTOM DATA MODEL


// ==============================================================
export default function Accordion({
  item
}) {
  const {
    category
  } = useParams();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  useEffect(() => {
    item.child.forEach(item => {
      if (item.href.endsWith(category)) {
        setOpen(true);
        setActive(item.title);
      }
    });
  }, [category, item.child]);
  return <Fragment>
      {
      /* ACCORDION / COLLAPSE HEADER */
    }
      <AccordionHeader open={open} className="linkList" onClick={() => setOpen(state => !state)}>
        <ListItem item={item} />
      </AccordionHeader>

      {
      /* RENDER NESTED NAV ITEMS */
    }
      {item.child ? <Collapse in={open}>{renderChild(item.child, active)}</Collapse> : null}
    </Fragment>;
}