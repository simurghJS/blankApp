import {Application, Router} from "./node_modules/simurgh/core.js"

let myApp=new Application();

myApp.registerRoutes(()=>{

    let router=new Router();
    router.add('',()=>{
        return <p> hello world! </p>
    });
    
});

myApp.build();
