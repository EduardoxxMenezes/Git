import { error } from "console";
import { branch, BranchDevelop, BranchFeature, BranchHotFix, BranchMaster, BranchRelease } from "./Branch";

let rl = require('readline-sync')
let estermos = ``

let menu = true;
let branches: branch[] = []

let Nomes;
let Datas;
let branchOficial = rl.question("Insira o Nome da Branch Principal.")
let DataPrincipal = rl.question("Insira a data da Branch Principal.")

branches.push(new BranchMaster(branchOficial,DataPrincipal))
function ListarBranches(){
    let branchList = ``
    for(let i = 0; i < branches.length; i++){
        branchList += `${i}. ${branches[i].nome} (${branches[i].tipo}) \n`;
    }
    return branchList
    
}

let menu0 = true
while(menu0){
console.log
(` --------------------
    ESCOLHA SUA BRANCH!
   --------------------
   ${ListarBranches()}
   -1 - SAIR
    
`)
  let escolha: number = rl.questionInt("INSIRA O INDICE DA BRANCH.")

  let branchAtual: branch = branches[escolha];
  branchAtual.Commits.push('aaaaa')

  if(escolha < 0 ){
    console.log("Fechando...")
    menu0 = false
  }else{
    menu = true;
  if(branchAtual.tipo == 'BranchMaster'){
    estermos = `BRANCHMASTER \n -1. Criar Branch. `
  }
  else if(branchAtual.tipo == "BranchDevelop"){
     estermos = `BRANCHDEVELOP \n -1. Finalizar sprint. `
  }
  else if(branchAtual.tipo == "BranchHotFix"){
     estermos = `BRANCHHOTFLIX \n -1. Corrigir Bug.`
  }
  else if(branchAtual.tipo == "BranchFeature"){
     estermos = `BRANCHFEATURE \n -1. Implementar funcionalidade.`
  }
  else if(branchAtual.tipo == "BranchRelease"){
     estermos = `BRANCHRELEASE \n -1. Promover para produção.`
  }
  
while(menu){
   
    console.log
    (` ${estermos}
    -2. Criar Commit.
    -3. Merge.
    -4. Ver Histórico.
    -5 Ver branch.
    -6 Ver Commits.
    -0. CheckOut.
    
    `)
  
    let escolha:number = rl.questionInt("RESPOSTA: \n")
    switch(escolha){
        case 1:
            if(branchAtual.tipo == 'BranchMaster'){
            let menu2 = true;
            while(menu2){
                console.log
                (`  MENU
                -1. Criar BranchMaster.
                -2. Criar BranchDevelop.
                -3. Criar BranchHotFlix.
                -4. Criar BranchFeature.
                -5. Criar BranchRelease.
                -0. SAIR.
                `)
           
            let escolha2 = rl.questionInt("RESPOSTA: \n")
            switch(escolha2){
                case 1:
                    Nomes = rl.question("Insira o nome da branch.")
                    Datas = rl.question("Insira a data de criação da branch.")
                    branchAtual.criarBranch(Nomes,Datas, branches,1)
                break
                case 2:
                    Nomes = rl.question("Insira o nome da branch.")
                    Datas = rl.question("Insira a data de criação da branch.")
                    branchAtual.criarBranch(Nomes,Datas, branches,2)
                break
                case 3:
                    Nomes = rl.question("Insira o nome da branch.")
                    Datas = rl.question("Insira a data de criação da branch.")
                    branchAtual.criarBranch(Nomes,Datas,branches,3)
                break
                case 4:
                    Nomes = rl.question("Insira o nome da branch.")
                    Datas = rl.question("Insira a data de criação da branch.")
                    branchAtual.criarBranch(Nomes,Datas,branches,4)
                break
                case 5:
                    Nomes = rl.question("Insira o nome da branch.")
                    Datas = rl.question("Insira a data de criação da branch.")
                    branchAtual.criarBranch(Nomes,Datas,branches,5)
                break
                case 0:
                    menu2 = false;
                    console.log("RETORNANDO...")
                break
                default: console.log("OPÇÃO NÃO RECONHECIDA.")
                break
            }}}
            else if(branchAtual.tipo == "BranchDevelop"){
                console.log(` ${ListarBranches()}`)
                let Branch22 = rl.questionInt("Insira o indice da branch de release: ")
                let datas = rl.question("Insira a data atual")
                
                branches.push(branches[escolha].FinalizarSprint(Branch22));
                branches[branches.length - 1].DataCriacao = datas;
                if(branches[branches.length -1].nome == ''){
                    branches.splice(branches.length -1);
                    console.log("A opção não é do tipo desejado.")
                }else{ 
                    console.log("Branch criada com sucesso!")}
               
            }
            else if(branchAtual.tipo == "BranchHotFix"){
                let NovoBug = rl.question("Insira a correção: ")
                branchAtual.CorrigirBug()
            }
            else if(branchAtual.tipo == "BranchFeature"){
                let NovaFuncionalidade = rl.question("Insira a nova funcionalidade: ")
                branchAtual.ImplementarFuncionalidade()
            }
            else if(branchAtual.tipo == "BranchRelease"){
                branchAtual.PromoverParaProducao()
            }
            else{console.log("Seu tipo não se enquadra em nenhum.")}
        break
        case 2:
            branchAtual.CriarCommit()
            console.log("Commit criado com sucesso!")

        break
        case 3:
            console.log(` ${ListarBranches()}`)
            let Branch2 = rl.questionInt("Insira o indice da branch 2: ")
            let data = rl.question("Insira a data atual")
            branches.push(branchAtual.Merge(Branch2));
            console.log("Branch criada com sucesso!")
        break
        case 4:
            branchAtual.ApresentarHistorico()
        break
        case 5:
            branchAtual.getbranch()
        break
        case 6:
            console.log(branchAtual.getCommits())
            console.log("Commit removido.")
        break
        case 0:
            console.log("FECHANDO...")
            branches[escolha] = branchAtual;
             menu = branchAtual.Checkout()
        break
        default: 
        console.log("OPÇÃO NÃO RECONHECIDA.")
        break
    }}

}}