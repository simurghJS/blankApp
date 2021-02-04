import {Application, Router} from "simurgh"

let myApp=new Application();

myApp.registerRoutes(()=>{

    let router=new Router();
    router.add('',()=>{
        return <p> hello world! </p>
    });
    
});

myApp.build();
