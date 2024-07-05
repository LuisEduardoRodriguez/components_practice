import PropTypes from 'prop-types'

export const MyComponent = ( {name} ) => {

    const student = {
        name: "Alejandro",
        lastName: "Rodriguez",
        mobile: "3056785478",
        linkendinProfile: "https://www.linkedin.com/alejo"
    };
  return (
    <div>
        <hr />
        <h4>Este es mi primer componente </h4>
        <p>Teams React</p>
        <p>Estudiante: {name}</p>
        <ul>
            <li>Componentes</li>
            <li>Eventos</li>
            <li>Estados - Hooks</li>
            <li>EComincacion</li>
        </ul>
        <p>Estudiante: {student.name} {student.lastName}</p>
        <ul>
            <li>Mobile: {student.mobile}</li>
            <li>Linkedin: {student.linkendinProfile}</li>
        </ul>
        <hr />
        <p>Estudiante: {JSON.stringify(student)}</p>
    </div>
  )
}

MyComponent.propTypes = {
    name: PropTypes.string
}