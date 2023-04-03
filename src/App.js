import { useState } from 'react';

export const CourseList = () => {
    let [cursos, setCursos] = useState([{
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
    }]);

    const filasTabla = cursos.map((curso, index) => (
        <tr key={index}>
            <td>{curso.id}</td>
            <td>{curso.materia}</td>
            <td>{curso.descripcion}</td>
            <td><button onClick={() => CourseItem(index)} id={curso.id}>Eliminar</button></td>
        </tr>
    ));

    const CourseItem = (index) => {
        if (index !== undefined) {
            setCursos(cursos.filter((_, i) => i !== index)); //el segundo parametro indica la posicion y la filtra de la lista
        }else{

            const id =document.getElementById("id").value
            const materia =document.getElementById("nombre").value
            const descripcion =document.getElementById("descripcion").value
            setCursos(cursos.concat({id,materia,descripcion}))
            
        }
    }
    
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
                    {filasTabla}
                </tbody>
            </table>

            <form >
                <label>
                ID:
                <input
                    type="number"
                    id="id"
 
                />
                </label>
                <label>
                Nombre:
                <input
                    type="text"
                    id="nombre"
                    
                />
                </label>
                <label>
               Descripción:
                <input
                    type="text"
                    id="descripcion"
                
                />
                </label>
            </form> <br></br>
            <button onClick={ () => CourseItem(undefined)} >Agregar curso</button>
    </div>
            
    )
};

