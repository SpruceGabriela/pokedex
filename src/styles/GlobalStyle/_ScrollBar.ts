import { createGlobalStyle } from 'styled-components';
import { screen } from '../_screen';

const ScrollBar = createGlobalStyle`
  @media ${screen.min.lg} {
    * {
      ::-webkit-scrollbar {
        width: 6px;
      }
      ::-webkit-scrollbar-track {
        background: #E5E5E5;
      }
      ::-webkit-scrollbar-thumb {
        border-radius: 6px;
        background: #B9B9B9;
      }
      &:hover::-webkit-scrollbar-thumb {
        background: #B9B9B9;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: #959595;
      }
    }
  }
  @media ${screen.max.md} {
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

export default ScrollBar;
