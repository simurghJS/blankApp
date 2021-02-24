import * as simurgh from 'simurgh/app/application';
import { CreateStackNavigation } from 'simurgh/app/navigation';

let myApp = new simurgh.Application();

let mystack = new CreateStackNavigation();
mystack.add('/', () => { return (<h1>hello world</h1>); });
mystack.add('/test', () => { return (<h1>hello world test</h1>); });
myApp.navigation = mystack;

myApp.build();