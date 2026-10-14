// Usage: node tests/apps-script.test.js apps-script/Code.gs
// Node harness for apps-script/Code.gs with mocked Google services
const fs=require('fs'); const vm=require('vm');
const code=fs.readFileSync(process.argv[2],'utf8');
const sheets={};
function mkSheet(name){const rows=[];return {rows,appendRow:r=>rows.push(r),setFrozenRows(){},
  getRange(a,b,c,d){ if(typeof a==='string') return {createTextFinder:(id)=>({matchEntireCell(){return this},findNext(){const i=rows.findIndex(r=>r[0]===id);return i<0?null:{getRow:()=>i+1}}})};
    return {getValues:()=>[rows[a-1]]};}};}
const ctx={console,Math,JSON,Date,Object,Array,String,Number,
 SpreadsheetApp:{getActiveSpreadsheet:()=>({getSheetByName:n=>sheets[n],insertSheet:n=>(sheets[n]=mkSheet(n))})},
 ContentService:{createTextOutput:t=>({t,setMimeType(){return this}}),MimeType:{JSON:'json'}},
 CacheService:{getScriptCache:()=>({get:()=>null,put(){}})},UrlFetchApp:{fetch:()=>({getResponseCode:()=>200,getContentText:()=>fs.readFileSync('dist/static/exam/key.json','utf8')})},LockService:{getScriptLock:()=>({waitLock(){},releaseLock(){}})},Logger:{log:console.log}};
vm.createContext(ctx); vm.runInContext(code,ctx);
const key=vm.runInContext('ANSWER_KEY',ctx); const ids=Object.keys(key);
function post(body){return JSON.parse(ctx.doPost({postData:{contents:JSON.stringify(body)}}).t)}
function get(p){return JSON.parse(ctx.doGet({parameter:p}).t)}
const pick=ids.slice(0,50);
// all correct
let r=post({action:'submit',name:'Asha  Verma',ids:pick,answers:pick.map(i=>key[i].a)});
console.log('pass:',r.passed,r.percent,r.certId, r.results.length);
// 37/50 -> 74% fail ; 38/50 -> 76% pass
let a37=pick.map((i,n)=>n<37?key[i].a:(key[i].a+1)%4); let f=post({action:'submit',name:'Ravi Kumar',ids:pick,answers:a37});
console.log('37/50:',f.passed,f.percent,f.certId);
let a38=pick.map((i,n)=>n<38?key[i].a:-1); let g=post({action:'submit',name:'Ravi Kumar',ids:pick,answers:a38});
console.log('38/50:',g.passed,g.percent);
console.log('verify ok:',JSON.stringify(get({action:'verify',id:r.certId})));
console.log('verify lower:',get({action:'verify',id:r.certId.toLowerCase()}).valid);
console.log('verify bad:',JSON.stringify(get({action:'verify',id:'RVX-202610-ZZZZZZ'})));
console.log('verify junk:',JSON.stringify(get({action:'verify',id:'hello'})));
console.log('short exam:',JSON.stringify(post({action:'submit',name:'A B',ids:pick.slice(0,10),answers:[]})));
console.log('dup:',post({action:'submit',name:'A B',ids:pick.slice(0,49).concat(pick[0]),answers:pick.map(()=>0)}).error);
console.log('stale:',JSON.stringify(post({action:'submit',name:'A B',ids:pick.slice(0,49).concat('nope'),answers:pick.map(()=>0)})).slice(0,120));
console.log('xss name:',post({action:'submit',name:'<script>x</script> Bob',ids:pick,answers:pick.map(i=>key[i].a)}).name);
console.log('ping:',JSON.stringify(get({action:'ping'})));
console.log('attempts rows:',sheets.Attempts.rows.length,'certs rows:',sheets.Certificates.rows.length);
console.log('verify unknown (valid format):',JSON.stringify(get({action:'verify',id:'RVX-202610-ZZZZZZZZ'})));
// Revocation: the owner changes Status in the sheet; verification must then fail.
const row=sheets.Certificates.rows.find(x=>x[0]===r.certId); row[6]='Revoked';
console.log('verify revoked:',JSON.stringify(get({action:'verify',id:r.certId})));
console.log('verify omits score:', !('percent' in get({action:'verify',id:g.certId})) && !('score' in get({action:'verify',id:g.certId})));
