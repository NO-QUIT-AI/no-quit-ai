
import {useState} from 'react'
export default function App(){
const [v,setV]=useState("dash")
const [m,setM]=useState([{f:"ai",t:"Salam bhai! Kya banana hai? Urdu/English sab chalega!"}])
const [i,setI]=useState("")
const send=()=>{
if(!i.trim()) return
const q=i
setM([...m,{f:"user",t:q}])
setI("")
setTimeout(()=>{setM(a=>[...a,{f:"ai",t:"Samajh gaya bhai: "+q}])},400)
}
return(
<div style={{display:"flex",minHeight:"100vh",background:"#0a0a0a",color:"#fff",fontFamily:"monospace"}}>
<div style={{width:120,background:"#080808",borderRight:"1px solid #222",padding:10}}>
<b>NO QUIT AI</b>
<div onClick={()=>setV("dash")} style={{marginTop:10,padding:6,background:v=="dash"?"#fff":"#222",color:v=="dash"?"#000":"#fff",cursor:"pointer",borderRadius:5}}>Dashboard</div>
<div onClick={()=>setV("chat")} style={{marginTop:6,padding:6,background:v=="chat"?"#fff":"#222",color:v=="chat"?"#000":"#fff",cursor:"pointer",borderRadius:5}}>New Chat</div>
</div>
<div style={{flex:1,padding:12}}>
{v=="dash"?<div><h3>⚡ NO QUIT AI</h3><p>System Grow 81%</p><button onClick={()=>setV("chat")} style={{width:"100%",padding:14,background:"#fff",color:"#000",border:"none",borderRadius:8,fontWeight:800}}>💬 OPEN CHAT - Reply Karega!</button></div>:<div style={{display:"flex",flexDirection:"column",height:"85vh"}}><div style={{flex:1}}>{m.map((x,k)=><div key={k} style={{background:x.f=="user"?"#fff":"#222",color:x.f=="user"?"#000":"#fff",padding:"8px 12px",margin:6,borderRadius:10,maxWidth:"80%",alignSelf:x.f=="user"?"flex-end":"flex-start"}}>{x.t}</div>)}</div><div style={{display:"flex",gap:6}}><input value={i} onChange={e=>setI(e.target.value)} onKeyDown={e=>e.key=="Enter"&&send()} placeholder="Urdu/English me likho..." style={{flex:1,padding:12,background:"#1a1a1a",border:"1px solid #333",color:"#fff",borderRadius:8}}/><button onClick={send} style={{background:"#fff",color:"#000",padding:"0 16px",borderRadius:8}}>Send</button></div></div>}
</div>
</div>
)
}
