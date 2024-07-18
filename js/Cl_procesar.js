export default class Cl_procesar {
    constructor() {
        this.contAprobados = 0;
        this.contTotal = 0;
        this.mejor = 0;
        this.notaMayor = 0;
    }
    procesarEstudiantes(e) {
        if (e.notafinal >= 48) {
            this.contAprobados++;
        }
        this.contTotal++;
        if (e.notafinal > this.notaMayor) {
            this.mejor = e.cedula;
            this.notaMayor = e.notafinal;
        }
    }
    porcentajeAprobados() {
        return ((this.contAprobados / this.contTotal) * 100);
    }
}