
// GLOBAL CUSTOM COMPONENTS
import { H3, Span } from "components/Typography";
import FlexBox from "components/flex-box/flex-box";
import IconComponent from "components/IconComponent"; 
// ==============================================================


// ==============================================================
export default function ServiceCard2({
  icon,
  title,
  description
}) {
  return <FlexBox gap={1} p="1rem">
      <IconComponent icon={icon} color="inherit" fontSize="inherit" sx={{
      color: "grey.900",
      fontSize: "40px"
    }} />

      <div>
        <H3 color="grey.900" lineHeight={1.3}>
          {title}
        </H3>

        <Span color="grey.600">{description}</Span>
      </div>
    </FlexBox>;
}