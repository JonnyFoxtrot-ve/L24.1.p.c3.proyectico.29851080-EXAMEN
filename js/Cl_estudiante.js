export class Estudiante {
  constructor(nombre, cedula, sexo, nota) {
    this.nombre = nombre;
    this.cedula = cedula;
    this.sexo = sexo;
    this.nota = nota;
  }
}

export class Dt_estudiantes {
  constructor() {
    this.estudiantes = [
      new Estudiante("Luis", 1111, "M", 12),
      new Estudiante("Carla", 2222, "F", 16.5),
      new Estudiante("Mery", 3333, "F", 8.5),
      new Estudiante("Carlos", 4444, "M", 10),
      new Estudiante("Laura", 5555, "F", 9.8),
    ];
  }
}
