"use strict";

 const getJSON =  (url,cb) => {
   const xhr = new XMLHttpRequest();

   xhr.addEventListener("load", () => {
     if (xhr.status !== 200){
       return cb(new Error("Error loading JSON FROM:" + url + "(" + xhr.status + ")"));
     }
     cb(null, )
   });
 }
