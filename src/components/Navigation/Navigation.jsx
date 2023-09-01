// import { useAuth } from 'hooks';
import { Container, Link } from './Navigation.styled';

export const Navigation = () => {
  //   const { isLoggedIn } = useAuth();

  return (
    <Container>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Log In</Link>
        <Link to="/register">Register</Link>
        <Link to="/contacts">Contacts</Link>
        {/* {isLoggedIn && <Link to="/contacts">Contacts</Link>} */}
      </nav>
    </Container>
  );
};
