import { blob } from "stream/consumers";
import { commit } from "./Commits";
import { Branch } from "./Branch";
import { tree } from "./trees";
import { repositorio } from "./meugit";
import { Blobs } from "./Blobs";
import { transferableAbortController } from "util";
let rl = require('readline-sync')
let menu = true;

let BlobsList: Blobs[] = []
let CommitList: commit[] = []
let BranchList: Branch[] = []
let treeList: tree[] = []
let repositorioList: repositorio[] = []

let BranchEscolha;
let BranchEscolha2;
let PastaEscolha;
let RepositorioEscolha;
let TreeEscolha;
let BlobEscolha;
while(menu){
    console.log
    (` ---------
         MENU
       ---------
    1- Adicionar um Arquivo.
    2- Criar uma nova pasta.
    3- Adicionar Branch.
    4- Adicionar Repositório.
    5- Adicionar Tree.
    6- Ver o ultimo arquivo da pasta.
    7- Unir 2 Branchs.
    8- Inserir Pastas no Branch.
    9- Ver Branch.
    10- Ver Repositório.
    11- Ver Pasta.
    12- Ver Tree.
    13- Inserir arquivo em uma pasta.
    14- Inserir Pastas em uma Branch.
    15- Inserir Branch em uma tree.
    16- Inserir Tree em um Repositório.
    17- Ver Historico.
    0- Sair.
    `)
    let escolha = rl.question("Escolha: \n")
    switch(escolha){
        case 1:
            let NovoBlob = rl.question("INSIRA O BLOB \n")
            BlobsList.push(new Blobs(NovoBlob))
            console.log("Você Criou um novo arquivo.")
        break

        case 2:
        CommitList.push(new commit())
        console.log("Você criou uma pasta Vazia.")
        break

        case 3:
            BranchList.push(new Branch())
            console.log("Você criou uma branch vazia.")
        break

        case 4:
            repositorioList.push(new repositorio())
            console.log("Você criou um repositorio vazio.")
        break

        case 5:
            treeList.push(new tree())
            console.log("Você criou uma Tree vazia.")
        break

        case 6:
             BranchEscolha = rl.questionInt("Insira o branch")
           BranchList[BranchEscolha].head()
        break

        case 7:
            BranchEscolha = rl.questionInt("Insirao branch")
            BranchEscolha2 = rl.questionInt("Insira o segundo branch")

            BranchList[BranchEscolha].merge(BranchList[BranchEscolha2])
        break
        case 8:
            BranchEscolha = rl.questionInt("Insira o branch")
            PastaEscolha = rl.questionInt("Insira o Indica do arquivo que deseja analisar.")
            BranchList[BranchEscolha].commits.push(CommitList[PastaEscolha])
            console.log("Arquivo inserido na Branch.")      
        break
        case 9:
            BranchEscolha = rl.questionInt("Insira o branch")
            console.log(BranchList[BranchEscolha])

        break
        case 10:
            RepositorioEscolha = rl.questionInt("Insira o indice do repositorio")
            console.log(repositorioList[RepositorioEscolha])
        break
        case 11:
            PastaEscolha = rl.questionInt("Escolha o indice da pasta")
            console.log(CommitList[PastaEscolha])
        break
        case 12:
            TreeEscolha = rl.questionInt("Escolha o indice da tree")
            console.log(treeList[TreeEscolha])
        break
        case 13:
            BlobEscolha = rl.questionInt("Insira o indice do arquivo")
            PastaEscolha = rl.questionInt("Insira o indice da pasta")
            CommitList[PastaEscolha].adicionarBlob(BlobsList[BlobEscolha])
            console.log("Arquivo adicionado.")
        break
        case 14: 
        BranchEscolha = rl.questionInt("Insira o indice do branch")
        PastaEscolha = rl.questionInt("Insira o indice da pasta")
        BranchList[BranchEscolha].commits.push(CommitList[PastaEscolha])
        break
        case 15: 
           TreeEscolha = rl.questionInt("Insira o indice da tree")
           BranchEscolha = rl.questionInt("Insira o indice da branch")
           treeList[TreeEscolha].branches.push(BranchList[BranchEscolha])
        break 
        case 16:
            RepositorioEscolha = rl.questionInt("Insira o indice do repositorio")
            TreeEscolha = rl.questionInt("Insira o indice da tree")
            repositorioList[RepositorioEscolha].trees.push(treeList[TreeEscolha])
        case 0:
            menu = false;
            console.log("FECHANDO...")
        break
        default: 
        console.log("OPÇÃO NÃO RECONHECIDA.")
        break
    }
}