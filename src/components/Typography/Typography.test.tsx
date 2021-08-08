import React from 'react';
import { screen } from '@testing-library/react';
import { renderThemed } from '../../helpers/testHelper';
import Typography from './Typography';

describe('Typography', () => {
  it('should be exported', () => {
    expect(Typography).toBeDefined();
  });

  it('should add the fontSize using the size prop', async () => {
    renderThemed(
      <Typography size="18">
        hello world
      </Typography>,
    );

    const text = screen.getByText('hello world');
    expect(window.getComputedStyle(text).fontSize).toBe('18px');
  });

  it('should add the weight using the weight prop', async () => {
    renderThemed(
      <Typography weight="500">
        hello world
      </Typography>,
    );

    const text = screen.getByText('hello world');
    expect(window.getComputedStyle(text).fontWeight).toBe('500');
  });

  it('should add the color using the color prop', async () => {
    renderThemed(
      <Typography color="fire">
        hello world
      </Typography>,
    );

    const text = screen.getByText('hello world');
    expect(window.getComputedStyle(text).color).toBe('rgb(173, 88, 43)');
  });
});
