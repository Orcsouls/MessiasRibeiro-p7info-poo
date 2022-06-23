import { Ponto } from './Ponto'
export class Quadrilatero {
    private Aponto: Ponto
    private Bponto: Ponto

    constructor(A: Ponto, B: Ponto) {
        this.Aponto = A
        this.Bponto = B
    }

    isInside(ponto: Ponto): boolean{
        if(this.Aponto.getX <= ponto.getX && ponto.getX <= this.Bponto.getX
             && this.Bponto.getY <= ponto.getY && ponto.getY <= this.Aponto.getY) {
                 return true
             } else {
                 return false
             }
    }
}