import { stringify } from "querystring";
import { commit } from "../Commits";


let rl = require('readline-sync')

export class branch{
    tipo: string;
    nome: string;
    DataCriacao: String;
    Commits: string[];
    BranchPai: branch;
    merge: branch[];
    historico: string[];
    constructor(nome: string, dataCriacao: string){
        this.nome = nome;
        this.Commits = [];
        this.historico = [];
        this.merge = [];
        this.DataCriacao = dataCriacao;
        this.tipo = ""
    }
    CriarCommit(): void{
        let NovaCommit = rl.question("Insira a nova commit")
  
        this.Commits.push(NovaCommit)
        this.historico.push(NovaCommit)

    }
    Merge(OutroBranch: branch): branch{
       
        this.merge.push(new BranchMaster('merge','26/8/2024'))
        this.Commits.concat(OutroBranch.Commits)
        return this.merge[this.merge.length - 1]
           
    }

    ApresentarHistorico(): void{
        console.log(this.historico)
     
     }

    Checkout(): boolean{
       return false
    }
    getbranch():void{
        console.log(`
            BranchAtual: ${this.nome}
            tipo: ${this.tipo}
            commits[0]${this.Commits[0]}
            `)
    }
    getCommits(): string{
        let commitsy = ``
        for(let i = 0; i < this.Commits.length; i++){
            commitsy += `commit: ${this.Commits[i]} \n`
        }
        return commitsy
    }
    removeCommit(): void{
        console.log(this.getCommits())
        let Removavel = rl.questionInt("Insira o indice do commit que deseja remover")
        this.Commits.splice(Removavel,1);

    }

   
}


export class BranchMaster extends  branch{
    tipo: string;
    constructor(nome:string, datadecriacao: string){
    super(nome, datadecriacao)
    this.tipo = 'BranchMaster';
    }
    criarBranch(nome: string, data: string, branches: branch[], tipo: number): void{
        if(tipo == 1){
        branches.push(new BranchMaster(nome,data))}
        else if(tipo == 2){
            branches.push(new BranchDevelop(nome,data))
        }
        else if(tipo == 3){
            branches.push(new BranchHotFix(nome,data))
        }
        else if(tipo == 4){
            branches.push(new BranchFeature(nome,data))
        }
        else if(tipo == 5){
            branches.push(new BranchRelease(nome,data))
        }
    }
}

export class BranchDevelop extends  branch{
    tipo: string;
    constructor(nome:string, datadecriacao: string){
    super(nome, datadecriacao)
        this.tipo = 'BranchDevelop'
    }
    FinalizarSprint(OutroBranch: BranchRelease):branch{
        if(OutroBranch.tipo == 'BranchRelease'){
        this.merge.push(new branch('Sprint','26/8/2024'))
        this.Commits.concat(OutroBranch.Commits)
        return this.merge[this.merge.length - 1]}
        return new branch('','')
        
    }
}

export class BranchHotFix extends  branch{
    tipo: string;
    constructor(nome:string, datadecriacao: string){
    super(nome, datadecriacao)
    this.tipo = 'BranchHotFix'
    }
    CorrigirBug(descricao): void{
       this.Commits.push(descricao)
       
        //dicionar um commit.
    }
}


export class BranchFeature extends  branch{
    tipo: string;
    constructor(nome:string, datadecriacao: string){
    super(nome, datadecriacao)
    this.tipo = 'BranchFeature';
    }
    ImplementarFuncionalidade(descricao): void{
       this.Commits.push(descricao);
       
    }
}

export class BranchRelease extends  branch{
    tipo: string;
    constructor(nome:string, datadecriacao: string){
    super(nome, datadecriacao)
    this.tipo = 'BranchRelease';
    }
    PromoverParaProducao(): void{
      console.log("Os commits estão prontos para produção")
    }
}

