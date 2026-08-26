import { useState } from 'react'

export default function App(){
  const [chatOpen,setChatOpen]=useState(false)
  const [msgs,setMsgs]=useState([{from:"ai", text:"Bhai bolo kya banana hai? 🔥"}])
  const [input,setInput]=useState("")
  const [tasks,setTasks]=useState([true,true,false])

  const send=()=>{
    if(!input.trim()) return
    setMsgs([...msgs, {from:"user", text:input}, {from:"ai", text:`${input} - Ho jayega bhai! No Quit! 🚀`}])
    setInput("")
  }

  return (
    <div style={{minHeight:"100vh", background:"#0a0a0a", color:"#fff", fontFamily:"Inter, sans-serif"}}>
      {/* Header with CHAT button on left */}
      <div style={{display:"flex", alignItems:"center", gap:10, padding:"14px 14px", borderBottom:"1px solid #1f1f1f", position:"sticky", top:0, background:"#0a0a0a", zIndex:20}}>
        <button onClick={()=>setChatOpen(!chatOpen)} style={{background:"#1a1a1a", border:"1px solid #333", color:"#fff", padding:"8px 12px", borderRadius:8, fontSize:13, cursor:"pointer"}}>💬 CHAT</button>
        <span style={{color:"#facc15"}}>⚡</span><b>NO QUIT AI</b>
        <span style={{marginLeft:"auto", fontSize:10, color:"#555"}}>Never Quit</span>
      </div>

      {/* Chat Sidebar */}
      {chatOpen && (
        <div style={{position:"fixed", left:0, top:0, bottom:0, width:"85%", maxWidth:320, background:"#111113", borderRight:"1px solid #222", zIndex:50, display:"flex", flexDirection:"column"}}>
          <div style={{padding:16, borderBottom:"1px solid #222", display:"flex", justifyContent:"space-between"}}><b>Chat with AI</b><button onClick={()=>setChatOpen(false)} style={{background:"none", border:"none", color:"#fff", fontSize:18, cursor:"pointer"}}>✕</button></div>
          <div style={{flex:1, overflowY:"auto", padding:12, display:"flex", flexDirection:"column", gap:8}}>
            {msgs.map((m,i)=><div key={i} style={{alignSelf:m.from=="user"?"flex-end":"flex-start", background:m.from=="user"?"#2563eb":"#1e1e1e", padding:"8px 12px", borderRadius:12, fontSize:13, maxWidth:"80%"}}>{m.text}</div>)}
          </div>
          <div style={{padding:10, display:"flex", gap:6, borderTop:"1px solid #222"}}>
            <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key=="Enter"&&send()} placeholder="Type..." style={{flex:1, background:"#1a1a1a", border:"1px solid #333", color:"#fff", padding:"10px", borderRadius:8}} />
            <button onClick={send} style={{background:"#fff", color:"#000", border:"none", padding:"10px 14px", borderRadius:8, fontWeight:800, cursor:"pointer"}}>Send</button>
          </div>
        </div>
      )}

      <div style={{maxWidth:900, margin:"0 auto", padding:"14px"}}>
        {/* Tasks clickable */}
        <div style={{background:"#111", border:"1px solid #222", borderRadius:12, padding:12, marginBottom:14}}>
          {["Setup Project","Design UI","Deploy Live"].map((t,i)=>(
            <div key={i} onClick={()=>{const n=[...tasks]; n[i]=!n[i]; setTasks(n)}} style={{display:"flex", alignItems:"center", gap:8, padding:"6px 0", cursor:"pointer", opacity:tasks[i]?1:0.5}}>
              <span style={{width:18, height:18, borderRadius:4, background:tasks[i]?"#22c55e":"#222", display:"grid", placeItems:"center", fontSize:12}}>{tasks[i]?"✓":""}</span>
              <span style={{fontSize:13, textDecoration:tasks[i]?"line-through":"none"}}>{t}</span>
            </div>
          ))}
          <div style={{height:6, background:"#1e1e1e", borderRadius:10, marginTop:10}}><div style={{width:`${tasks.filter(Boolean).length/3*100}%`, height:"100%", background:"#38bdf8", transition:"0.3s"}}></div></div>
          <div style={{fontSize:11, color:"#888", marginTop:6}}>{tasks.filter(Boolean).length} of 3 tasks done</div>
        </div>

        {/* Buttons clickable */}
        <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:12}}>
          {[
            {t:"Build Website", s:"Launch your idea", i:"🌐"},
            {t:"React App", s:"Create with AI", i:"⚛️"},
            {t:"Python Script", s:"Automate tasks", i:"🐍"},
            {t:"Create Game", s:"Fun & interactive", i:"🎮"},
          ].map(c=>(
            <button key={c.t} onClick={()=>{setChatOpen(true); setInput(`Make ${c.t}`)}} style={{background:"#141414", border:"1px solid #222", borderRadius:14, padding:"18px 14px", color:"#fff", cursor:"pointer", textAlign:"center"}}>
              <div style={{fontSize:22}}>{c.i}</div>
              <div style={{fontWeight:700, marginTop:6, fontSize:14}}>{c.t}</div>
              <div style={{fontSize:11, color:"#666", marginTop:2}}>{c.s}</div>
            </button>
          ))}
        </div>

        <button onClick={()=>setChatOpen(true)} style={{width:"100%", marginTop:16, background:"#fff", color:"#000", border:"none", padding:"16px", borderRadius:12, fontWeight:800, fontSize:15, cursor:"pointer"}}>💬 OPEN CHAT & START GRINDING →</button>
        <div style={{textAlign:"center", margin:"30px 0 10px", fontSize:9, letterSpacing:"0.5em", color:"#222"}}>NO EXCUSES. ONLY RESULTS.</div>
      </div>
    </div>
  )
}
