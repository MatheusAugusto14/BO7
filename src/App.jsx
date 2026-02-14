
import {useState} from 'react'
import Ashes from './maps/Ashes.jsx'

export default function App(){
const [map,setMap]=useState(null)

if(!map){
return(
<div style={{padding:20}}>
<h1>BO7 Zombies</h1>
<h2>Selecionar mapa</h2>
<button onClick={()=>setMap("ashes")}>
Ashes of the Damned
</button>
</div>
)
}

if(map==="ashes") return <Ashes/>
}
