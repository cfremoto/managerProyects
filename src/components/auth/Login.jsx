import { useState } from 'react'
import { Link } from 'react-router-dom'

const initialState = {
  email: '',
  password: ''
}

const Login = () => {

  const [user, setUser] = useState(initialState)

  const iniciarSesion = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const loginUser = () => {}


  return (
    <section className="form-usuario">
      <div className="contenedor-form sombra-drak">
        <h1>Iniciar Sesion</h1>

        <form onSubmit={loginUser}>
          <div className="campo-form">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@example.com"
              value={user.email}
              onChange={iniciarSesion}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="********"
              value={user.password}
              onChange={iniciarSesion}
            />
          </div>

          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block" value="Iniciar Sesion"
            />
          </div>

        </form>
        <p>¿Aun no tienes una cuenta? Haz click
          <Link to="/nueva-cuenta"> Aqui!</Link>
        </p>
      </div>

    </section>
  )
}
export default Login
