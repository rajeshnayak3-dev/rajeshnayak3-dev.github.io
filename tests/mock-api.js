// Local stand-in for the Apps Script web app, for testing only. Usage: node tests/mock-api.js apps-script/Code.gs dist/static/exam/key.json
const fs=require('fs'),vm=require('vm'),http=require('http');
const code=fs.readFileSync(process.argv[2],'utf8'); const keyPath=process.argv[3];
const sheets={};
function mkSheet(){const rows=[];return {rows,appendRow:r=>rows.push(r),setFrozenRows(){},getRange(a){ if(typeof a==='string') return {createTextFinder:id=>({matchEntireCell(){return this},findNext(){const i=rows.findIndex(r=>r[0]===id);return i<0?null:{getRow:()=>i+1}}})}; return {getValues:()=>[rows[a-1]]};}};}
const ctx={console,Math,JSON,Date,Object,Array,String,Number,
 SpreadsheetApp:{getActiveSpreadsheet:()=>({getSheetByName:n=>sheets[n],insertSheet:n=>(sheets[n]=mkSheet())})},
 ContentService:{createTextOutput:t=>({t,setMimeType(){return this}}),MimeType:{JSON:'json'}},
 CacheService:{getScriptCache:()=>({get:()=>null,put(){}})},
 UrlFetchApp:{fetch:()=>({getResponseCode:()=>200,getContentText:()=>fs.readFileSync(keyPath,'utf8')})},
 LockService:{getScriptLock:()=>({waitLock(){},releaseLock(){}})},Logger:{log(){}}};
vm.createContext(ctx); vm.runInContext(code,ctx);
http.createServer((req,res)=>{res.setHeader('Access-Control-Allow-Origin','*');
 const u=new URL(req.url,'http://x');
 if(req.method==='POST'){let b='';req.on('data',d=>b+=d);req.on('end',()=>{res.end(ctx.doPost({postData:{contents:b}}).t)});}
 else res.end(ctx.doGet({parameter:Object.fromEntries(u.searchParams)}).t);
}).listen(8790,()=>console.log('mock on 8790'));
