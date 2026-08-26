import { useState } from 'react'
function Builder({type}){
  const [val,setVal]=useState("")
  const [todos,setTodos]=useState([])
  const [t,setT]=useState("")
  if(type==="calculator"){
    return (
      <div style={{background:"#fff",color:"#000",padding:12,borderRadius:12,marginTop:8}}>
        <div style={{background:"#000",color:"#0f0",padding:12,fontSize:22,textAlign:"right",borderRadius:8}}>{val||"0"}</div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:6,marginTop:8}}>
          <button onClick={()=>setVal("")} style={{gridColumn:"span 4",padding:10,background:"#ff4444",color:"#fff",border:"none",borderRadius:6}}>CLEAR</button>
          {["7","8","9","/","4","5","6","*","1","2","3","-","0",".","=","+"].map(x=>(
            <button key={x} onClick={()=>{if(x==="="){try{setVal(String(eval(val)))}catch{setVal("Error")}}else setVal(p=>p+x)}} style={{padding:14,background:x==="="?"#000":"#eee",color:x==="="?"#fff":"#000",border:"none",borderRadius:6,fontWeight:700}}>{x}</button>
          ))}
        </div>
      </div>
    )
  }
  if(type==="todo"){
    return (
      <div style={{background:"#fff",color:"#000",padding:12,borderRadius:12,marginTop:8}}>
        <b>Todo App Ready</b>
        <div style={{display:"flex",gap:6,marginTop:8}}>
          <input value={t} onChange={e=>setT(e.target.value)} style={{flex:1,padding:8,border:"1px solid #ccc",borderRadius:6}}/>
          <button onClick={()=>{if(t.trim()){setTodos([...todos,t]);setT("")}}} style={{background:"#000",color:"#fff",padding:"8px 12px",borderRadius:6}}>Add</button>
        </div>
        {todos.map((y,i)=><div key={i} style={{padding:6,borderBottom:"1px solid #eee"}}>{y}</div>)}
      </div>
    )
  }
  return <div style={{background:"#fff",color:"#000",padding:12,borderRadius:12,marginTop:8}}>✅ {type} Built Successfully!</div>
}
export default function App(){
  const [view,setView]=useState("dash")
  const [notes,setNotes]=useState([])
  const [note,setNote]=useState("")
  const [msgs,setMsgs]=useState([{from:"ai",text:"Salam bhai! Main NO QUIT AI hu - Bolo kya banana hai? Calculator, Todo, Portfolio? Foran bana dunga!"}])
  const [input,setInput]=useState("")
  const detect=(q)=>{
    const l=q.toLowerCase()
    if(l.includes("calcul")) return "calculator"
    if(l.includes("todo")) return "todo"
    if(l.includes("port")) return "portfolio"
    if(l.includes("shop")||l.includes("ecom")) return "ecommerce"
    if(l.includes("blog")) return "blog"
    return null
  }
  const send=()=>{
    if(!input.trim()) return
    const q=input
    const b=detect(q)
    setMsgs(m=>[...m,{from:"user",text:q}])
    setNotes(n=>[...n,q])
    setInput("")
    setTimeout(()=>{
      const reply=b?`Lo bhai! ${b.toUpperCase()} bana diya! Neeche dekho!`:"Samajh gaya bhai! Thoda detail batao mai bana deta hu!"
      setMsgs(m=>[...m,{from:"ai",text:reply,build:b}])
    },400)
  }
  return (
    <div style={{minHeight:"100vh",background:"#0a0a0a",color:"#fff",display:"flex",fontFamily:"monospace"}}>
      <div style={{width:120,background:"#111",padding:10,borderRight:"1px solid #222"}}>
        <b>NO QUIT AI</b>
        <div onClick={()=>setView("dash")} style={{marginTop:10,padding:6,background:view==="dash"?"#fff":"#222",color:view==="dash"?"#000":"#fff",cursor:"pointer",borderRadius:5}}>Dashboard</div>
        <div onClick={()=>setView("chat")} style={{marginTop:6,padding:6,background:view==="chat"?"#fff":"#222",color:view==="chat"?"#000":"#fff",cursor:"pointer",borderRadius:5}}>New Chat</div>
      </div>
      <div style={{flex:1,padding:12,overflow:"hidden",display:"flex",flexDirection:"column"}}>
        {view==="dash"?(
          <div>
            <h3>NO QUIT AI - Builder ON</h3>
            <p>Notes: {notes.length}</p>
            <div style={{background:"#111",border:"1px solid #222",borderRadius:8,padding:10,marginTop:10}}>
              <div>Notes Vault</div>
              <div style={{display:"flex",gap:6,marginTop:8}}>
                <input value={note} onChange={e=>setNote(e.target.value)} placeholder="idea..." style={{flex:1,padding:8,background:"#000",border:"1px solid #333",color:"#fff"}}/>
                <button onClick={()=>{if(note.trim()){setNotes([...notes,note]);setNote("")}}}>Add</button>
              </div>
            </div>
            <button onClick={()=>setView("chat")} style={{marginTop:12,width:"100%",padding:14,background:"#fff",color:"#000",borderRadius:8,fontWeight:800}}>OPEN CHAT - Build Instantly</button>
          </div>
        ):(
          <div style={{display:"flex",flexDirection:"column",height:"90vh"}}>
            <div style={{flex:1,overflowY:"auto",display:"flex",flexDirection:"column",gap:8}}>
              {msgs.map((m,i)=>(
                <div key={i} style={{maxWidth:"92%",alignSelf:m.from==="user"?"flex-end":"flex-start"}}>
                  <div style={{background:m.from==="user"?"#fff":"#222",color:m.from==="user"?"#000":"#fff",padding:"8px 12px",borderRadius:10}}>{m.text}</div>
                  {m.build&&<Builder type={m.build}/>}
                </div>
              ))}
            </div>
            <div style={{display:"flex",gap:6,marginTop:10}}>
              <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==="Enter"&&send()} placeholder="Build a modern calculator..." style={{flex:1,padding:12,background:"#1a1a1a",border:"1px solid #333",color:"#fff",borderRadius:8}}/>
              <button onClick={send} style={{background:"#fff",color:"#000",padding:"0 18px",borderRadius:8}}>Send</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
