import {Server} from "./presentation/server";
import {envs} from "./config/envs";


(async()=>{
    await main()
})()

function main(){
    const server = new Server({port:envs.PORT})
    server.start()
}