/// <reference path="globals/classnames/index.d.ts" />
/// <reference path="globals/react-dom/index.d.ts" />
/// <reference path="globals/react/index.d.ts" />

declare const require : (string)=> any;
declare const __dirname : string;
declare const process : any;
declare const module : any;

// declare module "mongo" {
//     const ObjectId : any;
//     // export = e;
// }
declare module "express" {
    function e() : any;
    namespace e {
        var static : any;
        var Router : any;
    }
    export = e;
}

declare const FB: any;
declare const $: any;

declare module 'react-router' {
    // var x: any;

    export var Router: any;
    export var Route: any;
    export var IndexRedirect: any;
    export var hashHistory: any;
    export var IndexRoute: any;
    export var Link: any;

    // export = x;
}