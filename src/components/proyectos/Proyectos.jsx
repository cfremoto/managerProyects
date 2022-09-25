import { Header } from '../layout/Header';
import SideBar from '../layout/SideBar';
import { FormTareas } from '../tareas/FormTareas';
import { ListadoTareas } from '../tareas/ListadoTareas';

const Proyectos = () => {
  return (
    <section className='contenedor-app'>
      <SideBar />

      <section className='seccion-principal'>
        <Header />

        <main>
          <FormTareas />
          <div className='contenedor-tareas'>
            <ListadoTareas />
          </div>
        </main>
      </section>
    </section>
  );
};
export default Proyectos;
