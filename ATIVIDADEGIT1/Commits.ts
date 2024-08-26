import { Blobs } from "./Blobs";

export class commit{
    Blob: Blobs[];
    constructor(){
        this.Blob = []
    }
    adicionarBlob(blob2:Blobs): void{
        this.Blob.push(blob2)
    }
}