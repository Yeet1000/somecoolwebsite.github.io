import{_ as o}from"./preload-helper-9b728935.js";const _=(r,e)=>{const t=r[e];return t?typeof t=="function"?t():Promise.resolve(t):new Promise((i,n)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(n.bind(null,new Error("Unknown variable dynamic import: "+e)))})};async function a({params:r}){const e=await _(Object.assign({"../discord.md":()=>o(()=>import("./discord-74274ac8.js"),["./discord-74274ac8.js","./index-fd23df92.js"],import.meta.url),"../malware.md":()=>o(()=>import("./malware-a089aad9.js"),["./malware-a089aad9.js","./index-fd23df92.js"],import.meta.url),"../op1.md":()=>o(()=>import("./op1-e2d661be.js"),["./op1-e2d661be.js","./index-fd23df92.js"],import.meta.url),"../tor.md":()=>o(()=>import("./tor-a7321d75.js"),["./tor-a7321d75.js","./index-fd23df92.js"],import.meta.url)}),`../${r.id}.md`),{title:t,date:i}=e.metadata;return{content:e.default,title:t,date:i}}const u=Object.freeze(Object.defineProperty({__proto__:null,load:a},Symbol.toStringTag,{value:"Module"}));export{u as _,a as l};