import styled from "styled-components";
import Icon from "./Icon";

// code from: https://medium.com/@colebemis/building-a-checkbox-component-with-react-and-styled-components-8d3aa1d826dd

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 19px;
  height: 19px;
  background: #E9E5F4;
  border-radius: 3px;
  box-shadow: 0 0 0 3px rgb(128, 155, 243, 0.4);
  transition: all 150ms;
  position: absolute;
  top: 3.4px;
  left: 0;
  ${Icon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")}
`;

export default StyledCheckbox;
