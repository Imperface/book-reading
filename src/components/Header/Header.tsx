import { NavLink } from 'react-router-dom';
import { HeaderWrapper } from './Header.styled.ts';

export const Header = () => {
  return <HeaderWrapper>
    <nav>
        <NavLink to="/login">login</NavLink>
        <NavLink to="/register">register</NavLink>
        <NavLink to="/library">library</NavLink>
        <NavLink to="/training">training</NavLink>
      </nav>
  </HeaderWrapper>;
};
