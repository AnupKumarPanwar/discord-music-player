import{d as t,l as e,c as n,L as s,o as a,b as o,e as r,f as l}from"./vendor.bc5ef72f.js";import{u as p}from"./index.b9bcb76e.js";import{_ as c,m as i}from"./SourceButton.vue_vue&type=script&setup=true&lang.da4c0473.js";const u={class:"\n\t\t\tprose prose-discord\n\t\t\tdark:prose-light\n\t\t\tmx-auto\n\t\t\tpy-16\n\t\t\tpx-4\n\t\t\tbreak-words-legacy\n\t\t\tsm:px-8\n\t\t\tlg:py-8\n\t\t\tw-full\n\t\t\tmax-w-4xl\n\t\t\tlg:max-w-full\n\t\t"};var m=t({setup(t){const m=e(),d=p(),f=n((()=>d.state.docs)),v=n((()=>d.state.file)),y=n((()=>{var t,e;const n=null==(e=null==(t=f.value)?void 0:t.custom[m.params.category])?void 0:e.files[m.params.file];if(!n)return;let s;return d.commit({type:"setFile",file:n}),s="md"===n.type?n.content:`# ${n.name}\n\`\`\`${n.type}\n${n.content}\n\`\`\``,i(s)}));return s((()=>{const t=document.getElementById("container");t&&t.scrollTop>200&&t.scrollTo({top:0,behavior:"smooth"})})),(t,e)=>{var n;return a(),o("div",u,[r(c,{class:"float-right mt-2",path:null==(n=l(v))?void 0:n.path},null,8,["path"]),r("div",{innerHTML:l(y)},null,8,["innerHTML"])])}}});export{m as default};