import { createGlobalStyle } from 'styled-components';
import { screen } from '../_screen';

const ScrollBar = createGlobalStyle`
  @media ${screen.min.lg} {
    * {
      ::-webkit-scrollbar {
        width: 2px;
      }
      ::-webkit-scrollbar-track {
        background: transparent;
      }
      ::-webkit-scrollbar-thumb {
        border-radius: 6px;
        background: #ececec;
      }
      &:hover::-webkit-scrollbar-thumb {
        background: #e4e4e4;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: #e4e4e4;
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
