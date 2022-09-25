import { Nav } from '../nav/Nav';
export const Header = () => {
  return (
    <header className='app-header'>
      <p className='nombre-usuario'>
        Bienvenido: <span>César Fernández</span>
      </p>
      <Nav />
    </header>
  );
};
