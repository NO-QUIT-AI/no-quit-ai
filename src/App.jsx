import { useState } from 'react'
export default function App(){
  const [note,setNote]=useState("")
  const [notes,setNotes]=useState([])
  const [chat,setChat]=useState(false)
  return(
    <div style={{minHeight:"100vh", background:"#0a0a0a", color:"#e5e5e5", fontFamily:"monospace", display:"flex"}}>
      <div style={{width:150, background:"#080808", borderRight:"1px solid #1a1a1a", padding:"10px 8px", fontSize:11}}>
        <div style={{fontWeight:800, fontSize:10}}>NO QUIT AI<br/><span style={{fontSize:7, color:"#666"}}>ALWAYS BUILDING</span></div>
        <div style={{marginTop:12, color:"#666", fontSize:8}}>NAVIGATION</div>
        <div style={{background:"#fff", color:"#000", padding:"6px 8px", borderRadius:4, fontWeight:700, marginTop:4}}>Dashboard</div>
        <div onClick={()=>setChat(true)} style={{padding:"6px 8px", color:"#888", cursor:"pointer", marginTop:4}}>New Chat</div>
        <div style={{marginTop:10, color:"#333", fontSize:8}}>RECENT CHATS</div>
        <div style={{color:"#555", fontSize:10, marginTop:4}}>aslam o alaikum</div>
      </div>
      <div style={{flex:1, padding:"12px 10px"}}>
        <div style={{display:"flex", gap:8, alignItems:"center", marginBottom:12}}><span>⚡</span><div><div style={{fontWeight:800, fontSize:14}}>NO QUIT AI</div><div style={{fontSize:8, color:"#666"}}>Your personal AI coder</div></div></div>
        <div style={{background:"#121212", border:"1px solid #1e1e1e", borderRadius:6, padding:8, fontSize:8, marginBottom:10}}>
          <div style={{display:"flex", justifyContent:"space-between", color:"#666"}}>● ALL WORLD FUTURE WARNING - LIVE <span>LIVE</span></div>
          <div style={{marginTop:6, background:"#000", padding:"6px 8px", borderRadius:4, display:"flex", justifyContent:"space-between", fontSize:9}}><span>🌎 1 km NW of The Geysers, CA</span><span>M1.31 - 4:17:31 PM</span></div>
        </div>
        <div style={{background:"#111113", border:"1px solid #1e1e1e", borderRadius:8, padding:10, marginBottom:10}}>
          <div style={{display:"flex", justifyContent:"space-between", fontSize:8, color:"#22d3ee"}}>● SYSTEM GROW - AUTO IMPROVING <span style={{color:"#666"}}>LVL 81%</span></div>
          <div style={{height:4, background:"#1a1a1a", borderRadius:10, margin:"8px 0"}}><div style={{width:"81%", height:"100%", background:"#22d3ee"}}></div></div>
          <div style={{fontSize:8, color:"#888", lineHeight:1.8}}>
            <div>🚀 System upgraded: Build speed +12%</div>
            <div>🧠 Saving knowledge to memory...</div>
            <div>🔧 Self-improving prompt engine...</div>
            <div>💡 New component: modern calculator</div>
          </div>
        </div>
        <div style={{background:"#111113", border:"1px solid #1e1e1e", borderRadius:8, padding:10, marginBottom:10}}>
          <div style={{fontSize:8, color:"#a3a3a3"}}>● AUTO EVOLVE - COMPETITOR ANALYSIS</div>
          <div style={{fontSize:8, color:"#86efac", margin:"6px 0"}}>🔍 Analyzed Bolt.new - Adding smarter version...</div>
          <div style={{display:"flex", justifyContent:"space-between", background:"#0a0a0a", padding:5, fontSize:8, marginTop:4, border:"1px solid #1a1a1a"}}><span>Lovable.dev</span><span style={{color:"#22c55e"}}>✓ Better</span></div>
          <div style={{display:"flex", justifyContent:"space-between", background:"#0a0a0a", padding:5, fontSize:8, marginTop:4, border:"1px solid #1a1a1a"}}><span>Bolt.new</span><span style={{color:"#22c55e"}}>✓ Improved</span></div>
        </div>
        <div style={{background:"#111113", border:"1px solid #1e1e1e", borderRadius:8, padding:10, marginBottom:12}}>
          <div style={{fontSize:8, color:"#666"}}>● NOTES VAULT</div>
          <div style={{display:"flex", gap:6, marginTop:8}}>
            <input value={note} onChange={e=>setNote(e.target.value)} placeholder="Write your idea..." style={{flex:1, background:"#000", border:"1px solid #222", color:"#fff", padding:8, borderRadius:4, fontSize:10}} />
            <button onClick={()=>{if(note.trim()){setNotes([...notes,note]); setNote("")}}} style={{background:"#fff", color:"#000", border:"none", padding:"6px 12px", borderRadius:4, fontSize:9, fontWeight:800}}>ADD</button>
          </div>
          <div style={{fontSize:8, color:"#444", marginTop:6}}>{notes.length?notes.join(", "):"No notes yet..."}</div>
        </div>
        <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:8}}>
          <button onClick={()=>setChat(true)} style={{background:"#121212", border:"1px solid #1e1e1e", borderRadius:8, padding:14, textAlign:"left", color:"#fff"}}><div>🌐</div><div style={{fontWeight:700, fontSize:11, marginTop:6}}>Build Website</div></button>
          <button onClick={()=>setChat(true)} style={{background:"#121212", border:"1px solid #1e1e1e", borderRadius:8, padding:14, textAlign:"left", color:"#fff"}}><div>React App</div><div style={{fontWeight:700, fontSize:11, marginTop:6}}>React App</div></button>
          <button onClick={()=>setChat(true)} style={{background:"#121212", border:"1px solid #1e1e1e", borderRadius:8, padding:14, textAlign:"left", color:"#fff"}}><div>Python</div><div style={{fontWeight:700, fontSize:11, marginTop:6}}>Python Script</div></button>
          <button onClick={()=>setChat(true)} style={{background:"#121212", border:"1px solid #1e1e1e", borderRadius:8, padding:14, textAlign:"left", color:"#fff"}}><div>🎮</div><div style={{fontWeight:700, fontSize:11, marginTop:6}}>Create Game</div></button>
        </div>
      </div>
      {chat && <div style={{position:"fixed", inset:0, background:"rgba(0,0,0,0.8)", zIndex:50, display:"flex", justifyContent:"flex-end"}} onClick={()=>setChat(false)}><div style={{width:"80%", maxWidth:300, background:"#111", borderLeft:"1px solid #222", padding:12}} onClick={e=>e.stopPropagation()}><div style={{display:"flex", justifyContent:"space-between"}}><b>Chat</b><button onClick={()=>setChat(false)} style={{background:"none", border:"none", color:"#fff"}}>✕</button></div><div style={{marginTop:20, fontSize:12, color:"#888"}}>Bhai bolo kya banana hai? 🚀</div></div></div>}
    </div>
  )
}
