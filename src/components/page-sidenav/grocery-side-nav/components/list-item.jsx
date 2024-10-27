import { Span } from "components/Typography";
import FlexBox from "components/flex-box/flex-box";
import IconComponent from "components/IconComponent"; 
// ==============================================================


// ==============================================================
export default function ListItem({
  title,
  icon
}) {
  return <FlexBox py={1} gap={1.5} alignItems="center">
      <IconComponent icon={icon} fontSize="small" />
      <Span fontWeight={600}>{title}</Span>
    </FlexBox>;
}