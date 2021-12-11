import styled from "styled-components";
import { Tag } from "antd";

interface TagProps {
  variant: string;
  color?: string;
  bold?: boolean;
  children?: React.ReactNode;
}

const StyledTag = styled(Tag)`
  color: ${(props) =>
    props.color ? `${props.color} !important` : "blue !important"};
  border-color: blue !important;
  background: white !important;
`;

const CustomTag = (props: TagProps) => {
  const { variant, color, bold } = props;

  switch (variant) {
    case "Default":
      return <Tag color="blue">{props.children}</Tag>;
    case "Bordered":
      return (
        <StyledTag color={color}>
          <span style={{ fontWeight: bold ? "bold" : "initial" }}>
            {props.children}
          </span>
        </StyledTag>
      );
    default:
      return null;
  }
};

export default CustomTag;
