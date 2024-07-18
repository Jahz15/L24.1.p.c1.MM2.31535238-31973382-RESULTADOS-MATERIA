export default class Cl_estudiantes {
    constructor(cedula, notafinal) {
        this.cedula = cedula;
        this.notafinal = notafinal;
    }
    set cedula(cedula) {
        this._cedula = cedula;
    }
    get cedula() {
        return this._cedula;
    }
    set notafinal(notafinal) {
        this._notafinal = notafinal;
    }
    get notafinal() {
        return this._notafinal;
    }
}