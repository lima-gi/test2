export class Animal{
    nome;
    tamanho;
    tosa = true;
    banho = true;
    ida = true;
    volta = true;
    horario;

    constructor(nome, tamanho, tosa, banho, ida, volta, horario){
        this.nome = nome;
        this.tamanho = tamanho;
        this.tosa = tosa;
        this.banho = banho;
        this.ida = ida;
        this.volta = volta;
        this.horario = horario;
    }

}