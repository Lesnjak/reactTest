import React from 'react';
import {render} from 'react-dom';
import Articles from './components/Articles';
import {articles} from "./fixtures";



render(<Articles articles={articles} />, document.querySelector("#container"));
// class Task {
//     constructor(t = 'задача'){
//         this._done = false
//     }
//     get done() {
//         return this._done === true ? "Выполнена" : "не выполнена";
//     }
//
//     set done(value) {
//         console.log(value);
//     if(value !== undefined && typeof value === "boolean"){
//         this._done = value;
//     }else {
//         console.error("Ошибка");
//     }
//     }
//
//     complete(){
//         this.done = true;
//         console.log('ok');
//     }
// }
// let res = new Task;
// // res.complete();
// console.log(res.done, res._done);
