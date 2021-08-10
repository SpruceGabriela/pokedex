import styled from 'styled-components';

export const Card = styled.section`
  box-sizing: border-box;
  padding: 2rem;
  background-color: ${({ theme }) => theme.white};
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  transform: scale(1);
  transition: transform .4s;

  & > *:not(:last-child) {
    margin-bottom: 10px;
  }

  &:hover {
    transform: scale(1.01);
    box-shadow: 10px 10px 60px ${({ theme }) => theme.shadowColor};
  }
`;

export const PokemonId = styled.h2`
  font-size: 100px;
  color: ${(props) => props.theme.gray};
`;

export const CardFlag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > p:first-child {
    margin-right: 5px;
  }

  & > p:first-child::after {
    content: "";
    background-color: ${({ theme }) => theme.gray};
    border-radius: 50%;
    display: inline-block;
    height: 5px;
    margin-left: 5px;
    vertical-align: middle;
    width: 5px;
  }

  & > span:first-child {
    margin-right: 5px;
  }

  & > span:nth-child(2) {
    margin-left: 5px;
  }
`;
