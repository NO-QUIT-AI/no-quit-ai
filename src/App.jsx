
import { useState, useRef, useEffect } from 'react'

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
    return (<div style={{background:"#fff",color:"#000",padding:12,borderRadius:12,marginTop:8}}><b>Todo App Live</b><div style={{display:"flex",gap:6,marginTop:8}}><input value={t} onChange={e=>setT(e.target.value)} style={{flex:1,padding:8,border:"1px solid #ccc",borderRadius:6}}/><button onClick={()=>{if(t.trim()){setTodos([...todos,t]);setT("")}}} style={{background:"#000",color:"#fff",padding:"8px 12px",borderRadius:6}}>Add</button></div>{todos.map((y,i)=><div key={i} style={{padding:6,borderBottom:"1px solid #eee"}}>{y}</div>)}</div>)
  }
  if(type==="portfolio"){
    return (<div style={{background:"#fff",color:"#000",padding:16,borderRadius:12,marginTop:8}}><h2>🚀 Portfolio Ready!</h2><p>Hi, I am Developer - Modern dark portfolio built!</p><button style={{background:"#000",color:"#fff",padding:"8px 16px",border:"none",borderRadius:6}}>Contact Me</button></div>)
  }
  return <div style={{background:"#fff",color:"#000",padding:12,borderRadius:12,marginTop:8}}>✅ {type.toUpperCase()} Built Successfully!</div>
}

export default function App(){
  const [view,setView]=useState("dash")
  const [notes,setNotes]=useState([])
  const [note,setNote]=useState("")
  const [msgs,setMsgs]=useState([{from:"ai",text:"Aslam o Alaikum bhai! NO QUIT AI full power me wapas! Bolo kya banana hai? Website, Calculator, Todo? Foran bana dunga!"}])
  const [input,setInput]=useState("")
  const bottomRef=useRef(null)
  useEffect(()=>{bottomRef.current?.scrollIntoView({behavior:"smooth"})},[msgs,view])

  const detect=(q)=>{
    const l=q.toLowerCase()
    if(l.includes("calcul")) return "calculator"
    if(l.includes("todo")) return "todo"
    if(l.includes("port")||l.includes("website")||l.includes("web")) return "portfolio"
    if(l.includes("shop")||l.includes("ecom")) return "ecommerce"
    if(l.includes("blog")) return "blog"
    if(l.includes("game")) return "game"
    return null
  }

  const getReply=(q,l,b)=>{
  const isUrdu = /(salam|bhai|kya|kese|kaise|hai|hu|banao|bnana|koch|kuch|shukria|zabardast|mast|walaikum|mujy|mujhe|kehne|sekhna|jano|jana)/i.test(l)
  if(b){
  }
  if(l.includes("salam")||l.includes("aslam")) return "Walaikum Aslam bhai! ❤️ Allah khair kare! Bolo kya banana hai?"
  if(l.includes("china")||l.includes("chaina")||l.includes("chayna")||l.includes("chian")) return "China jane ke liye Passport + Visa + Ticket chahiye! Visa 4-5 din me. Bolo guide website bana dun?"
  if(l.includes("lora")) return "LoRA = AI fine-tune ka tareeqa! Samjhau ya dashboard bana dun?"
  if(l.includes("trading")||l.includes("trade")) return "Trading Demo se start karo! Binance/TradingView. Bolo learning website ya calculator bana dun?"
  if(l.includes("help")||l.includes("madad")) return "Haan bhai hazir! Info ya build?"
  if(isEnglish){ return `Samjha! '${q}' - Info du ya bana dun?` }
}
  // UNIVERSAL REPLY - Same language as user
    if(isEnglish){
        return `Got it! "${q}" - Absolutely doable! Tell me how you want it? As a website, an app, or something else? I'll build it instantly! 🔥`
    }
    // Urdu / Mix default
    return `Samajh gaya bhai! "${q}" - Bilkul ho jayega! Isko website bana dun ya app? Bolo kya scene hai, foran bana deta hu! 🔥`
  }

  const send=()=>{
    if(!input.trim()) return
    const q=input
    const l=q.toLowerCase()
    const b=detect(q)
    setMsgs(m=>[...m,{from:"user",text:q}])
    setNotes(n=>[...n,q])
    setInput("")
    setTimeout(()=>{
      const reply=getReply(q,l,b)
      setMsgs(m=>[...m,{from:"ai",text:reply,build:b}])
    },350)
  }

  return (

    <div style={{minHeight:"100vh",background:"#0a0a0a",color:"#e5e5e5",fontFamily:"monospace",display:"flex"}}>
      <div style={{width:155,background:"#080808",borderRight:"1px solid #1a1a1a",padding:"10px 8px",fontSize:11}}>
        <div style={{fontWeight:800}}>NO QUIT AI<br/><span style={{fontSize:7,color:"#666"}}>ALWAYS BUILDING</span></div>
        <div style={{marginTop:14,color:"#666",fontSize:8}}>NAVIGATION</div>
        <div onClick={()=>setView("dash")} style={{background:view=="dash"?"#fff":"transparent",color:view=="dash"?"#000":"#888",padding:"7px 8px",borderRadius:5,fontWeight:700,marginTop:6,cursor:"pointer"}}>Dashboard</div>
        <div onClick={()=>setView("chat")} style={{background:view=="chat"?"#fff":"transparent",color:view=="chat"?"#000":"#888",padding:"7px 8px",borderRadius:5,fontWeight:700,marginTop:6,cursor:"pointer"}}>💬 New Chat</div>
      </div>

      <div style={{flex:1,display:"flex",flexDirection:"column",maxHeight:"100vh"}}>
        {view=="dash"?(
          <div style={{flex:1,overflowY:"auto",padding:"12px 10px"}}>
            <div style={{display:"flex",gap:8,alignItems:"center",marginBottom:12}}><span>⚡</span><div><div style={{fontWeight:800,fontSize:14}}>NO QUIT AI</div><div style={{fontSize:8,color:"#666"}}>All Language AI coder - Urdu English Hindi</div></div></div>
            <div style={{background:"#121212",border:"1px solid #1e1e1e",borderRadius:6,padding:8,fontSize:8,marginBottom:10}}><div style={{display:"flex",justifyContent:"space-between",color:"#666"}}>● ALL WORLD FUTURE WARNING - LIVE <span>LIVE</span></div><div style={{marginTop:6,background:"#000",padding:"6px 8px",borderRadius:4,display:"flex",justifyContent:"space-between",fontSize:9}}><span>🌎 1 km NW of The Geysers, CA</span><span>M1.31</span></div></div>
            <div style={{background:"#111113",border:"1px solid #1e1e1e",borderRadius:8,padding:10,marginBottom:10}}><div style={{display:"flex",justifyContent:"space-between",fontSize:8,color:"#22d3ee"}}>● SYSTEM GROW - AUTO IMPROVING <span>LVL 92%</span></div><div style={{height:4,background:"#1a1a1a",borderRadius:10,margin:"8px 0"}}><div style={{width:"92%",height:"100%",background:"#22d3ee"}}></div></div><div style={{fontSize:8,color:"#888",lineHeight:1.8}}><div>🚀 Builder Mode ON: Instant Build</div><div>🧠 No More Questions - Direct Build</div><div>🔧 All Language Support Added</div></div></div>
            <div style={{background:"#111113",border:"1px solid #1e1e1e",borderRadius:8,padding:10,marginBottom:10}}><div style={{fontSize:8,color:"#a3a3a3"}}>● AUTO EVOLVE</div><div style={{fontSize:8,color:"#86efac",margin:"6px 0"}}>🔍 Analyzed - Adding smarter version...</div><div style={{display:"flex",justifyContent:"space-between",background:"#0a0a0a",padding:5,fontSize:8,marginTop:4}}><span>Calculator Builder</span><span style={{color:"#22c55e"}}>✓ Ready</span></div><div style={{display:"flex",justifyContent:"space-between",background:"#0a0a0a",padding:5,fontSize:8,marginTop:4}}><span>Website Builder</span><span style={{color:"#22c55e"}}>✓ Ready</span></div></div>
            <div style={{background:"#111113",border:"1px solid #1e1e1e",borderRadius:8,padding:10,marginBottom:12}}><div style={{fontSize:8,color:"#666"}}>● NOTES VAULT - {notes.length} saved</div><div style={{display:"flex",gap:6,marginTop:8}}><input value={note} onChange={e=>setNote(e.target.value)} placeholder="Write your idea..." style={{flex:1,background:"#000",border:"1px solid #222",color:"#fff",padding:8,borderRadius:4,fontSize:10}}/><button onClick={()=>{if(note.trim()){setNotes([...notes,note]); setNote("")}}} style={{background:"#fff",color:"#000",border:"none",padding:"6px 12px",borderRadius:4,fontSize:9,fontWeight:800}}>ADD</button></div></div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}><button onClick={()=>setView("chat")} style={{background:"#121212",border:"1px solid #1e1e1e",borderRadius:8,padding:14,color:"#fff",textAlign:"left"}}><div>🌐</div><div style={{fontWeight:700,fontSize:11,marginTop:6}}>Build Website</div></button><button onClick={()=>setView("chat")} style={{background:"#121212",border:"1px solid #1e1e1e",borderRadius:8,padding:14,color:"#fff",textAlign:"left"}}><div>🧮</div><div style={{fontWeight:700,fontSize:11,marginTop:6}}>Build Calculator</div></button><button onClick={()=>setView("chat")} style={{background:"#121212",border:"1px solid #1e1e1e",borderRadius:8,padding:14,color:"#fff",textAlign:"left"}}><div>📝</div><div style={{fontWeight:700,fontSize:11,marginTop:6}}>Todo App</div></button><button onClick={()=>setView("chat")} style={{background:"#121212",border:"1px solid #1e1e1e",borderRadius:8,padding:14,color:"#fff",textAlign:"left"}}><div>🎮</div><div style={{fontWeight:700,fontSize:11,marginTop:6}}>Create Game</div></button></div>
          </div>
        ):(
          <div style={{flex:1,display:"flex",flexDirection:"column",background:"#0f0f0f"}}>
            <div style={{padding:"10px 12px",borderBottom:"1px solid #222",display:"flex",justifyContent:"space-between"}}><b style={{fontSize:12}}>💬 CHAT - Instant Builder</b><button onClick={()=>setView("dash")} style={{background:"#222",border:"none",color:"#fff",padding:"4px 8px",borderRadius:4,fontSize:10}}>← Back</button></div>
            <div style={{flex:1,overflowY:"auto",padding:12,display:"flex",flexDirection:"column",gap:10}}>
              {msgs.map((m,i)=><div key={i} style={{maxWidth:"92%",alignSelf:m.from=="user"?"flex-end":"flex-start"}}><div style={{background:m.from=="user"?"#fff":"#1e1e1e",color:m.from=="user"?"#000":"#fff",padding:"8px 12px",borderRadius:12,fontSize:12}}>{m.text}</div>{m.build&&<Builder type={m.build}/>}</div>)}
              <div ref={bottomRef}></div>
            </div>
            <div style={{padding:10,display:"flex",gap:6,borderTop:"1px solid #222",background:"#0a0a0a"}}>
              <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key=="Enter"&&send()} placeholder="Build a modern calculator..." style={{flex:1,background:"#1a1a1a",border:"1px solid #333",color:"#fff",padding:"12px",borderRadius:10,fontSize:13}}/>
              <button onClick={send} style={{background:"#fff",color:"#000",border:"none",padding:"0 18px",borderRadius:10,fontWeight:800}}>Send</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
