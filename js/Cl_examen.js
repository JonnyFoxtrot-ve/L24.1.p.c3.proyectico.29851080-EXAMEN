export class Cl_examen {
  constructor() {
    this.valor = 20;
    this.minAprueba = 9.6;
  }
}

export function calcularResultados(estudiantes, examen) {
  const totalEstudiantes = estudiantes.length;
  const aprobados = estudiantes.filter((est) => est.nota >= examen.minAprueba);
  const reprobados = estudiantes.filter((est) => est.nota < examen.minAprueba);

  const porcentajeAprobados = (aprobados.length / totalEstudiantes) * 100;
  const porcentajeReprobados = (reprobados.length / totalEstudiantes) * 100;

  return {
    porcentajeAprobados,
    porcentajeReprobados,
    aprobados,
    reprobados,
  };
}

export function estudiantesMejorNota(estudiantes) {
  const mejorNota = Math.max(...estudiantes.map((est) => est.nota));
  return estudiantes.filter((est) => est.nota === mejorNota);
}

export function chicasPorEncimaPromedio(estudiantes) {
  const promedio =
    estudiantes.reduce((acc, est) => acc + est.nota, 0) / estudiantes.length;
  return estudiantes.filter((est) => est.sexo === "F" && est.nota > promedio);
}

export function agregarEstudiante(estudiantes, estudiante) {
  if (estudiante.nota < 0 || estudiante.nota > 20) {
    alert("La nota debe estar entre 0 y 20.");
    return;
  }
  if (estudiante.sexo !== "M" && estudiante.sexo !== "F") {
    alert("El sexo debe ser 'M' o 'F'.");
    return;
  }
  estudiantes.push(estudiante);
}

export function eliminarEstudiante(estudiantes, cedula) {
  const index = estudiantes.findIndex((est) => est.cedula === cedula);
  if (index !== -1) {
    estudiantes.splice(index, 1);
  }
}
