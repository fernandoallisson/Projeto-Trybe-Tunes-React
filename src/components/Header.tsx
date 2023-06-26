import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUser } from '../services/userAPI';

function Header() {
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await getUser();
        setUserName(user.name);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <header data-testid="header-component">
      <nav>
        <NavLink to="/search" data-testid="link-to-search">
          Search
        </NavLink>
        <NavLink to="/favorites" data-testid="link-to-favorites">
          Favorites
        </NavLink>
        <NavLink to="/profile" data-testid="link-to-profile">
          Profile
        </NavLink>
      </nav>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <p data-testid="header-user-name">
          Bem-vindo,
          {' '}
          {userName}
        </p>
      )}
    </header>
  );
}

export default Header;
