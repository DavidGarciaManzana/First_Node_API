import express, {Router} from 'express'

export interface Options{
    port:number;
    routes:Router;
    publicPath?:string;
}
export class Server {
    private app = express();
    private readonly port:number;
    private readonly routes:Router;
    private readonly publicPath:string;
    constructor(options:Options) {
        const {port,routes,publicPath='public'}=options;
        this.port=port
        this.routes=routes
        this.publicPath=publicPath

    }
    async start(){

        //*Middlewares (cualquier peticion que venga, serializa el body como un json)
        this.app.use(express.json());

        //*Routes
        this.app.use(this.routes);


        this.app.listen(this.port,()=>{
            console.log(`Server running on port ${ this.port }`)
        })
    }
}