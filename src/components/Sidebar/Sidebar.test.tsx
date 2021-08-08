import React from 'react';
import { screen } from '@testing-library/react';
import { renderThemed } from '../../helpers/testHelper';
import Sidebar from './Sidebar';

describe('Sidebar', () => {
  it('should be exported', () => {
    expect(Sidebar).toBeDefined();
  });

  it('should render props correctly', () => {
    renderThemed(
      <Sidebar>
        <div>hello</div>
      </Sidebar>,
    );

    expect(screen.getByText('hello')).toBeInTheDocument();
  });
});
