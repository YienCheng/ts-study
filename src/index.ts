/// <reference path="../typings/axios.d.ts"/>

// 引入自定义ts模块
import printModuleName, { moduleName } from "./a";

// 引入npm模块 自定义声明文件
import axios from "axios";

// 全局命名空间的使用 global
const square: Shapes.Square = { width: 100, height: 100 };

// 全局变量的使用 global
const ajax = jQuery.ajax;

printModuleName();

console.log(moduleName);

console.log(axios);

console.log(ajax);

console.log(square);

