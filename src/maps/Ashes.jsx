
import {useState} from 'react'

const img = (name)=>`/assets/${name}.png`

const codeNumbers = {
1:["04","13","06","08","13","04"],
2:["11","00","20","13","02","07"],
3:["17","14","02","10","04","19"],
4:["22","04","00","15","14","13"]
}

export default function Ashes(){

const [symbols,setSymbols]=useState({A:null,B:null,C:null})
const [lines,setLines]=useState([])
const [code,setCode]=useState(null)
const [memory,setMemory]=useState([])

/* STEP 1 */
const renderSymbolGroup=(loc)=>(
<div style={{marginBottom:25}}>
<h3>Local {loc}</h3>
<div style={{display:"flex",gap:12,flexWrap:"wrap"}}>
{[1,2,3,4].map(n=>{
const name=`${loc}${n}`
const selected=symbols[loc]===n
return(
<img
key={name}
src={img(name)}
onClick={()=>setSymbols({...symbols,[loc]:n})}
style={{
width:90,
height:90,
border:selected?"3px solid red":"2px solid #444",
borderRadius:10,
cursor:"pointer"
}}
/>
)
})}
</div>
</div>
)

/* STEP 2 */
const toggleLine=(n)=>{
const exists = lines.includes(n)
if(exists){
setLines(lines.filter(v=>v!==n))
return
}
if(lines.length===3) return
setLines([...lines,n])
}
const orderOf=(n)=>lines.indexOf(n)+1

return(
<div style={{padding:20}}>
<h1>Ashes of the Damned</h1>

<h2>Passo 1 — Necrofluid Gauntlet</h2>
{renderSymbolGroup("A")}
{renderSymbolGroup("B")}
{renderSymbolGroup("C")}

<h2>Passo 2 — Selecionar 3 Linhas na Ordem</h2>
<div style={{display:"flex",gap:12,flexWrap:"wrap"}}>
{[1,2,3,4,5].map(n=>{
const selected=lines.includes(n)
const order=orderOf(n)
return(
<div key={n} style={{position:"relative"}}>
<img
src={img(`linha${n}`)}
onClick={()=>toggleLine(n)}
style={{
width:110,
border:selected?"3px solid red":"2px solid #444",
borderRadius:10,
cursor:"pointer"
}}
/>
{selected && (
<div style={{
position:"absolute",
top:-8,
right:-8,
background:"red",
color:"white",
width:28,
height:28,
borderRadius:"50%",
display:"flex",
alignItems:"center",
justifyContent:"center",
fontWeight:"bold"
}}>
{order}
</div>
)}
</div>
)
})}
</div>
<p>Ordem escolhida: {lines.join(" → ")}</p>

<h2>Passo 3 — Código</h2>
<div style={{display:"flex",gap:12}}>
{[1,2,3,4].map(n=>{
const selected=code===n
return(
<img
key={n}
src={img(`codigo${n}`)}
onClick={()=>setCode(n)}
style={{
width:120,
border:selected?"3px solid red":"2px solid #444",
borderRadius:10,
cursor:"pointer"
}}
/>
)
})}
</div>

{code && (
<div style={{
marginTop:15,
padding:15,
background:"#111",
borderRadius:10,
fontSize:22,
letterSpacing:2
}}>
Números do código {code}: {codeNumbers[code].join(" - ")}
</div>
)}

<h2>Passo 4 — Memória</h2>
<div style={{display:"flex",gap:12}}>
{[1,2,3,4].map(n=>(
<img
key={n}
src={img(`memoria${n}`)}
onClick={()=>setMemory([...memory,n])}
style={{
width:90,
border:"2px solid #444",
borderRadius:10,
cursor:"pointer"
}}
/>
))}
</div>
<p>Sequência: {memory.join(" → ")}</p>

<div style={{height:200}}/>
</div>
)
}
