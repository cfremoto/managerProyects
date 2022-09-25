import { ListadoProyectos } from '../proyectos/ListadoProyectos';
import { NuevoProyecto } from '../proyectos/NuevoProyecto';

const SideBar = () => {
  return (
    <aside>
      <h1>
        Cesar<span>Tasks</span>
      </h1>
      <NuevoProyecto />
      <section className='proyectos'>
        <h2>Tus Proyectos</h2>
        <ListadoProyectos />
      </section>
    </aside>
  );
};
export default SideBar;
