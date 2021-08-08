export const breakpoints = {
  max: {
    xs: 575.98,
    sm: 767.98,
    md: 991.98,
    lg: 1199.98,
    xl: 1599.98,
  },
  min: {
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1600,
  },
};

const mountMedia = (condition: 'max' | 'min', size: number) => `(${condition}-width: ${size / 16}em)`;

export const screen = {
  max: {
    xs: mountMedia('max', breakpoints.max.xs),
    sm: mountMedia('max', breakpoints.max.sm),
    md: mountMedia('max', breakpoints.max.md),
    lg: mountMedia('max', breakpoints.max.lg),
    xl: mountMedia('max', breakpoints.max.xl),
    custom: (size: number) => mountMedia('max', size),
  },
  min: {
    sm: mountMedia('min', breakpoints.min.sm),
    md: mountMedia('min', breakpoints.min.md),
    lg: mountMedia('min', breakpoints.min.lg),
    xl: mountMedia('min', breakpoints.min.xl),
    xxl: mountMedia('min', breakpoints.min.xxl),
    custom: (size: number) => mountMedia('min', size),
  },
};
