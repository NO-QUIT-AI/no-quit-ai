
import { useState, useRef, useEffect } from 'react'
export default function App(){
  const [view,setView]=useState("dash")
  const [note,setNote]=useState("")
  const [notes,setNotes]=useState([])
  const [msgs,setMsgs]=useState([{from:"ai", text:"Aslam o Alaikum bhai! Main NO QUIT AI hu - Kya banana hai? Website, App, Game? Urdu English sab chalega!"}])
  const [input,setInput]=useState("")
  const bottomRef=useRef(null)
  useEffect(()=>{bottomRef.current?.scrollIntoView({behavior:"smooth"})},[msgs])

  
  const getReply=(t)=>{
    const l=t.toLowerCase().trim()
    // Salam
    if(l.includes("salam")||l.includes("aslam")) return "Walaikum Aslam bhai! ❤️ Alhamdulillah mai theek hu, aap sunao? Kya banana hai aaj?"
    // How are you / Kese ho
    if(l.includes("how are you")||l.includes("kese ho")||l.includes("kaise ho")||l.includes("kya hal")||l.includes("kya haal")) return "Alhamdulillah bhai bilkul mast hu! 😊 Aap kaise ho? Batao koi website/app banani hai?"
    // Thanks / Shukriya
    if(l.includes("thanks")||l.includes("shukriya")||l.includes("thank")) return "Koi baat nahi bhai! ❤️ Dil se! Aur kuch chahiye to bolo."
    // Name
    if(l.includes("tumhara naam")||l.includes("your name")||l.includes("kon ho")) return "Mai NO QUIT AI hu bhai! Aapka apna AI coder jo kabhi quit nahi karta! 🚀"
    // Website
    if(l.includes("website")||l.includes("web site")) return "Website? Ho jayegi bhai! 🔥 Konsi chahiye? Portfolio, E-commerce Shop, Blog ya Business? Naam batao mai abhi shuru karta hu!"
    // App
    if(l.includes("app")&&!l.includes("whatsapp")) return "React App? Done bhai! ⚛️ Kaisa app? Todo, Chat, Dashboard, Game? Idea bolo!"
    // Game
    if(l.includes("game")) return "Game? Zabardast! 🎮 Snake, Car Racing, Flappy Bird, Ludo? Kaunsa banau?"
    // Python
    if(l.includes("python")) return "Python script? Bilkul! 🐍 Kya automate karna hai? Batao!"
    // Help
    if(l.includes("help")||l.includes("madad")) return "Haan bhai bolo! Mai website, app, game, python - sab bana deta hu. Bas Urdu/English me bolo kya chahiye?"
    // Default - intelligent
    return "Acha bhai samajh gaya! '"+t+"' - ispe kaam karein? Thoda detail me batao kaisa chahiye, mai abhi bana deta hu! 💪"
  }


  const send=()=>{
    if(!input.trim()) return
    const q=input
    setMsgs(m=>[...m,{from:"user", text:q}])
    setNotes(n=>[...n,q])
    setInput("")
    setTimeout(()=>{setMsgs(m=>[...m,{from:"ai", text:getReply(q)}])},500)
  }

  return(
    <div style={{minHeight:"100vh", background:"#0a0a0a", color:"#e5e5e5", fontFamily:"monospace", display:"flex"}}>
      <div style={{width:155, background:"#080808", borderRight:"1px solid #1a1a1a", padding:"10px 8px", fontSize:11}}>
        <div style={{fontWeight:800}}>NO QUIT AI<br/><span style={{fontSize:7,color:"#666"}}>ALWAYS BUILDING</span></div>
        <div style={{marginTop:14,color:"#666",fontSize:8}}>NAVIGATION</div>
        <div onClick={()=>setView("dash")} style={{background:view=="dash"?"#fff":"transparent",color:view=="dash"?"#000":"#888",padding:"7px 8px",borderRadius:5,fontWeight:700,marginTop:6,cursor:"pointer"}}>Dashboard</div>
        <div onClick={()=>setView("chat")} style={{background:view=="chat"?"#fff":"transparent",color:view=="chat"?"#000":"#888",padding:"7px 8px",borderRadius:5,fontWeight:700,marginTop:6,cursor:"pointer"}}>💬 New Chat</div>
        <div style={{marginTop:12,color:"#333",fontSize:8}}>RECENT CHATS</div>
        <div style={{color:"#555",fontSize:10,marginTop:6}}>{notes.slice(-2).map((x,i)=><div key={i} style={{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>{x.slice(0,15)}</div>)}</div>
      </div>

      <div style={{flex:1, display:"flex", flexDirection:"column", maxHeight:"100vh"}}>
        {view=="dash"? (
          <div style={{flex:1, overflowY:"auto", padding:"12px 10px"}}>
            <div style={{display:"flex",gap:8,alignItems:"center",marginBottom:12}}><span>⚡</span><div><div style={{fontWeight:800,fontSize:14}}>NO QUIT AI</div><div style={{fontSize:8,color:"#666"}}>All Language AI coder - Urdu English Hindi</div></div></div>
            <div style={{background:"#121212",border:"1px solid #1e1e1e",borderRadius:6,padding:8,fontSize:8,marginBottom:10}}><div style={{display:"flex",justifyContent:"space-between",color:"#666"}}>● ALL WORLD FUTURE WARNING - LIVE <span>LIVE</span></div><div style={{marginTop:6,background:"#000",padding:"6px 8px",borderRadius:4,display:"flex",justifyContent:"space-between",fontSize:9}}><span>🌎 1 km NW of The Geysers, CA</span><span>M1.31</span></div></div>
            <div style={{background:"#111113",border:"1px solid #1e1e1e",borderRadius:8,padding:10,marginBottom:10}}><div style={{display:"flex",justifyContent:"space-between",fontSize:8,color:"#22d3ee"}}>● SYSTEM GROW - AUTO IMPROVING <span>LVL 81%</span></div><div style={{height:4,background:"#1a1a1a",borderRadius:10,margin:"8px 0"}}><div style={{width:"81%",height:"100%",background:"#22d3ee"}}></div></div><div style={{fontSize:8,color:"#888",lineHeight:1.8}}><div>🚀 System upgraded: Build speed +12%</div><div>🧠 Saving knowledge to memory...</div><div>🔧 Self-improving prompt engine...</div><div>💡 New: All Language Support Added</div></div></div>
            <div style={{background:"#111113",border:"1px solid #1e1e1e",borderRadius:8,padding:10,marginBottom:10}}><div style={{fontSize:8,color:"#a3a3a3"}}>● AUTO EVOLVE</div><div style={{fontSize:8,color:"#86efac",margin:"6px 0"}}>🔍 Analyzed Bolt.new - Adding smarter version...</div><div style={{display:"flex",justifyContent:"space-between",background:"#0a0a0a",padding:5,fontSize:8,marginTop:4}}><span>Lovable.dev</span><span style={{color:"#22c55e"}}>✓ Better</span></div><div style={{display:"flex",justifyContent:"space-between",background:"#0a0a0a",padding:5,fontSize:8,marginTop:4}}><span>Bolt.new</span><span style={{color:"#22c55e"}}>✓ Improved</span></div></div>
            <div style={{background:"#111113",border:"1px solid #1e1e1e",borderRadius:8,padding:10,marginBottom:12}}><div style={{fontSize:8,color:"#666"}}>● NOTES VAULT - {notes.length} saved</div><div style={{display:"flex",gap:6,marginTop:8}}><input value={note} onChange={e=>setNote(e.target.value)} placeholder="Write your idea..." style={{flex:1,background:"#000",border:"1px solid #222",color:"#fff",padding:8,borderRadius:4,fontSize:10}}/><button onClick={()=>{if(note.trim()){setNotes([...notes,note]); setNote("")}}} style={{background:"#fff",color:"#000",border:"none",padding:"6px 12px",borderRadius:4,fontSize:9,fontWeight:800}}>ADD</button></div><div style={{fontSize:8,color:"#555",marginTop:6}}>{notes.length?notes.slice(-3).map((n,i)=><div key={i}>• {n}</div>):"No notes yet..."}</div></div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}><button onClick={()=>setView("chat")} style={{background:"#121212",border:"1px solid #1e1e1e",borderRadius:8,padding:14,color:"#fff",textAlign:"left"}}><div>🌐</div><div style={{fontWeight:700,fontSize:11,marginTop:6}}>Build Website</div></button><button onClick={()=>setView("chat")} style={{background:"#121212",border:"1px solid #1e1e1e",borderRadius:8,padding:14,color:"#fff",textAlign:"left"}}><div>⚛️</div><div style={{fontWeight:700,fontSize:11,marginTop:6}}>React App</div></button><button onClick={()=>setView("chat")} style={{background:"#121212",border:"1px solid #1e1e1e",borderRadius:8,padding:14,color:"#fff",textAlign:"left"}}><div>🐍</div><div style={{fontWeight:700,fontSize:11,marginTop:6}}>Python Script</div></button><button onClick={()=>setView("chat")} style={{background:"#121212",border:"1px solid #1e1e1e",borderRadius:8,padding:14,color:"#fff",textAlign:"left"}}><div>🎮</div><div style={{fontWeight:700,fontSize:11,marginTop:6}}>Create Game</div></button></div>
          </div>
        ) : (
          <div style={{flex:1,display:"flex",flexDirection:"column",background:"#0f0f0f"}}>
            <div style={{padding:"10px 12px",borderBottom:"1px solid #222",display:"flex",justifyContent:"space-between"}}><b style={{fontSize:12}}>💬 CHAT - All Language</b><button onClick={()=>setView("dash")} style={{background:"#222",border:"none",color:"#fff",padding:"4px 8px",borderRadius:4,fontSize:10}}>← Back</button></div>
            <div style={{flex:1,overflowY:"auto",padding:12,display:"flex",flexDirection:"column",gap:10}}>
              {msgs.map((m,i)=><div key={i} style={{alignSelf:m.from=="user"?"flex-end":"flex-start",background:m.from=="user"?"#fff":"#1e1e1e",color:m.from=="user"?"#000":"#fff",padding:"8px 12px",borderRadius:12,fontSize:12,maxWidth:"85%",lineHeight:1.4}}>{m.text}</div>)}
              <div ref={bottomRef}></div>
            </div>
            <div style={{padding:10,display:"flex",gap:6,borderTop:"1px solid #222",background:"#0a0a0a"}}>
              <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key=="Enter"&&send()} placeholder="Urdu/English me likho..." style={{flex:1,background:"#1a1a1a",border:"1px solid #333",color:"#fff",padding:"12px",borderRadius:10,fontSize:13}}/>
              <button onClick={send} style={{background:"#fff",color:"#000",border:"none",padding:"0 18px",borderRadius:10,fontWeight:800}}>Send</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
