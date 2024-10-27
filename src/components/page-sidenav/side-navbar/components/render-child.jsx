import Link from "next/link";
import { Span } from "components/Typography";
import { Circle, StyledList } from "../styles"; 
// ==============================================================


// ==============================================================
export const renderChild = (child, active) => {
  return child.map(({
    title,
    href
  }, index) => <Link href={href} key={index}>
      <StyledList active={active === title}>
        <Circle className="dot" />
        <Span py={0.75} flex="1 1 0">
          {title}
        </Span>
      </StyledList>
    </Link>);
};