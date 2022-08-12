import styled, { useTheme } from "styled-components/native";

const siizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVariant = {
  top: "marginTop",
  left: "marginLeft",
  right: "marginRight",
  bottom: "marginBottom",
};

const getVariant = (position, size, theme) => {
  const sizeIndex = siizeVariant[size];
  const property = positionVariant[position];
  const value = theme.space[sizeIndex];
  return `${property}:${value}`;
};

const SpaceView = styled.View`
  ${({ variant }) => variant}
`;

export const Spacer = ({ position, size, children }) => {
  const theme = useTheme();
  const variant = getVariant(position, size, theme);
  return <SpaceView variant={variant}>{children}</SpaceView>;
};

Spacer.defaultProps = {
  position: "top",
  size: "small",
};
