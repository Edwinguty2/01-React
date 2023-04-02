let cursos = [{
    id: "001",
    materia: "Calculo diferencial",
    descripcion: "Esta materia de tres creditos desarrolla las habilidades logicas en funciones"
},
{
    id: "002",
    materia: "Fisica Mecanica",
    descripcion: "Esta materia de tres creditos fundamenta las leyes de Newton"
},
{
    id: "003",
    materia: "Programación orientada a objetos",
    descripcion: "Esta materia de tres creditos desarrolla la habilidad de 'Objetos' en programación"
}];

export const CourseList = () => {

    return (

        <div>
            <h1>Planificador de cursos</h1>
            <table id='tabla'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>MATERIA</th>
                        <th>DESCRIPCIÓN</th>
                        <th>ELIMINAR</th>
                    </tr>
                </thead>

                <tbody>
                    {cursos.map(function (curso) {
                        return (
                            <tr key={curso.id}>
                                <td>{curso.id}</td>
                                <td>{curso.materia}</td>
                                <td>{curso.descripcion}</td>
                                <td><button id={curso.id}>Eliminar</button></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>


    )
};