import { commit } from "./Commits";

let rl = require('readline-sync');
export class Branch{
    commits: commit[];
    historico: commit[];

    constructor(){
        this.commits = [];
        this.historico = [];
    }
    head(): void{
        console.log(this.commits.length - 1)
    }
    index(commit2: commit): void{
        let confirmar = rl.question("Inserir Commits na branch? [Sim ou Não]")
        confirmar = confirmar.toLowerCase()
        if(confirmar == 'sim'){
            this.commits.push(commit2);
            this.historico.push(commit2);
        }else if(confirmar == 'não'){
            console.log("Os Commits não foram salvos.")
        }else{
            console.log("OPÇÃO NÃO RECONHECIDA.")
        }
    }
    merge(outroBranch: Branch){
        for(let i = 0; i < this.commits.length - 1; i++){
            this.commits.push(outroBranch.commits[i])
        }
    }
}