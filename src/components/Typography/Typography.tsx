import React from 'react';
import { TypographyProps } from './Typography.types';
import * as css from './Typography.styles';

const Typography = ({
  children,
  as,
  color,
  size,
  ...props
}: TypographyProps) => (
  <css.Container
    color={color}
    size={size}
    as={as}
    weight={props.weight}
  >
    {children}
  </css.Container>
);

export default Typography;
