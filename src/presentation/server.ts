import express from 'express'

export interface Options{
    port:number;
    publicPath?:string;
}
export class Server {
    private app = express();
    private readonly port:number;
    private readonly publicPath:string;
    constructor(options:Options) {
        const {port,publicPath='public'}=options;
        this.port=port
        this.publicPath=publicPath
    }
    async start(){

        this.app.get('*', (req, res) => {
            console.log(req.url)
            res.send('Hello World!')
        })


        this.app.listen(this.port,()=>{
            console.log(`Server running on port ${ this.port }`)
        })
    }
}