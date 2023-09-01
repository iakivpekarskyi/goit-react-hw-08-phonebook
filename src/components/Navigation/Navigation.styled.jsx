import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #2a363b;
  &:active {
    color: #e84a5f;
  }
  &:hover {
    transform: scale(1.1);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  padding: 8px 0;

  border-bottom: 0.5px solid #626262;

  > nav {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
`;
