/**Sea la información de varios estudiantes: cédula y nota final. Se sabe que los estudiantes 
aprueban con 48Ptos. 
Se desea procesar a varios estudiantes y determinar la siguiente estadística: porcentaje de 
aprobados y cédula de alguno de los mejores estudiantes. 
Siendo los resultados de un salón de clases los siguientes: cédula(puntos); 888 (60Ptos), 
777 (50Ptos), 999 (40Ptos), 333 (90Ptos), 111 (30Ptos), 666 (90Ptos), 444 (48Ptos) y 
222 (60Ptos) */

import Cl_estudiantes from "./Cl_estudiantes.js";
import Cl_procesar from "./Cl_procesar.js";

let pr = new Cl_procesar();

let est1 = new Cl_estudiantes(888, 60);
let est2 = new Cl_estudiantes(777, 50);
let est3 = new Cl_estudiantes(999, 40);
let est4 = new Cl_estudiantes(333, 90);
let est5 = new Cl_estudiantes(111, 30);
let est6 = new Cl_estudiantes(666, 90);
let est7 = new Cl_estudiantes(444, 48);
let est8 = new Cl_estudiantes(222, 60);

pr.procesarEstudiantes(est1);
pr.procesarEstudiantes(est2);
pr.procesarEstudiantes(est3);
pr.procesarEstudiantes(est4);
pr.procesarEstudiantes(est5);
pr.procesarEstudiantes(est6);
pr.procesarEstudiantes(est7);
pr.procesarEstudiantes(est8);

let salida = document.getElementById("salida");

salida.innerHTML = `
Porcentaje de aprobados: ${pr.porcentajeAprobados()}% <br>
Cedula de uno de los mejores estudiantes: ${pr.mejor}`