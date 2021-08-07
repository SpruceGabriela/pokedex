import React from 'react';
import { screen } from '@testing-library/react';
import { renderThemed } from '../../helpers/testHelper';
import MainContainer from './MainContainer';

describe('MainContainer', () => {
  it('should be exported', () => {
    expect(MainContainer).toBeDefined();
  });

  it('should render props correctly', () => {
    renderThemed(
      <MainContainer>
        <div>hello</div>
      </MainContainer>,
    );

    expect(screen.getByText('hello')).toBeInTheDocument();
  });
});
