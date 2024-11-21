import {
  Cl_examen,
  calcularResultados,
  estudiantesMejorNota,
  chicasPorEncimaPromedio,
  agregarEstudiante,
  eliminarEstudiante,
} from "./Cl_examen.js";
import { Dt_estudiantes, Estudiante } from "./Cl_estudiante.js";

// Crear instancias de examen y lista de estudiantes
const examen = new Cl_examen();
const listaEstudiantes = new Dt_estudiantes().estudiantes;

// Funciones para manejar el DOM y lógica
let salida = document.getElementById("salida");
let opciones = document.getElementById("opciones");

salida.innerHTML = `<br>Seleccionar una opcion:
<br>1. Agregar estudiante
<br>2. Porcentaje de estudiantes aprobados y reprobados
<br>3. Estudiantes con la mejor nota
<br>4. Chicas por encima de la nota promedio
<br>5. Mostrar todos los estudiantes
<br>6. Mostrar resultados
<br>7. Eliminar estudiante
<br>0. Salir`;

opciones.onclick = () => {
  let opcion = +prompt("Seleccione una opcion");

  switch (opcion) {
    case 1:
      let nombre = prompt("Ingrese el nombre del estudiante");
      let cedula = +prompt("Ingrese la cedula del estudiante");
      let sexo = prompt("Ingrese el sexo del estudiante: [M/F]");
      let nota = +prompt("Ingrese la nota del estudiante [0-20]");
      agregarEstudiante(
        listaEstudiantes,
        new Estudiante(nombre, cedula, sexo, nota)
      );
      alert("Estudiante agregado correctamente.");
      break;
    case 2:
      const resultados = calcularResultados(listaEstudiantes, examen);
      alert(
        `El porcentaje de estudiantes aprobados es de ${resultados.porcentajeAprobados.toFixed(
          2
        )}% y el porcentaje de estudiantes reprobados es de ${resultados.porcentajeReprobados.toFixed(
          2
        )}%`
      );
      break;
    case 3:
      const mejoresEstudiantes = estudiantesMejorNota(listaEstudiantes);
      alert(
        `Los estudiantes con la mejor nota son: ${mejoresEstudiantes
          .map((est) => est.nombre)
          .join(", ")}`
      );
      break;
    case 4:
      const chicasEncimaPromedio = chicasPorEncimaPromedio(listaEstudiantes);
      alert(
        `Las chicas por encima de la nota promedio son: ${chicasEncimaPromedio
          .map((est) => est.nombre)
          .join(", ")}`
      );
      break;
    case 5:
      mostrarDatosEstudiantes();
      break;
    case 6:
      mostrarResultados();
      break;
    case 7:
      //MOstrar lista de estudiantes para saber cual eliminar
      alert(
        `Lista de estudiantes: ${JSON.stringify(
          listaEstudiantes.map((est) => est.cedula)
        )}`
      );
      let cedulaEliminar = +prompt(
        "Ingrese la cedula del estudiante a eliminar"
      );
      eliminarEstudiante(listaEstudiantes, cedulaEliminar);
      alert("Estudiante eliminado correctamente.");
      break;
    case 0:
      alert("Saliendo...");
      break;
    default:
      alert("Opcion no valida");
      break;
  }
};

function mostrarDatosEstudiantes() {
  salida.innerHTML = `
        <h2>Datos de los Estudiantes</h2>
        <table border="1">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Cédula</th>
                    <th>Sexo</th>
                    <th>Nota</th>
                </tr>
            </thead>
            <tbody>
                ${listaEstudiantes
                  .map(
                    (est) => `
                    <tr>
                        <td>${est.nombre}</td>
                        <td>${est.cedula}</td>
                        <td>${est.sexo}</td>
                        <td>${est.nota}</td>
                    </tr>`
                  )
                  .join("")}
            </tbody>
        </table>`;
}

function mostrarResultados() {
  const resultadosActualizados = calcularResultados(listaEstudiantes, examen);
  const mejoresEstudiantesActualizados = estudiantesMejorNota(listaEstudiantes);
  const chicasEncimaPromedioActualizadas =
    chicasPorEncimaPromedio(listaEstudiantes);

  salida.innerHTML = `
        <h2>Resultados del Examen</h2>
        <table border="1">
            <thead>
                <tr>
                    <th>Descripción</th>
                    <th>Resultado</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Porcentaje de Aprobados</td>
                    <td>${resultadosActualizados.porcentajeAprobados.toFixed(
                      2
                    )}%</td>
                </tr>
                <tr>
                    <td>Porcentaje de Reprobados</td>
                    <td>${resultadosActualizados.porcentajeReprobados.toFixed(
                      2
                    )}%</td>
                </tr>
                <tr>
                    <td>Estudiantes con la Mejor Nota</td>
                    <td>${mejoresEstudiantesActualizados
                      .map((est) => est.nombre)
                      .join(", ")}</td>
                </tr>
                <tr>
                    <td>Chicas por encima de la Nota Promedio</td>
                    <td>${chicasEncimaPromedioActualizadas
                      .map((est) => est.nombre)
                      .join(", ")}</td>
                </tr>
            </tbody>
        </table>`;
}
