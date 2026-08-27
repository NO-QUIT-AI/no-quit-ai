import { useState } from "react";

function detectBuild(l){
  if(l.includes("calculator")) return "calculator"
  if(l.includes("todo")) return "todo"
  if(l.includes("shop")||l.includes("ecommerce")||l.includes("store")) return "shop"
  if(l.includes("blog")) return "blog"
  if(l.includes("game")) return "game"
  if(l.includes("website")||l.includes("bana")||l.includes("build")||l.includes("create")) return "website"
  return null
}

const getReply=(q,l,b)=>{
  const isUrdu = /(salam|bhai|kya|kese|kaise|hai|hu|banao|bnana|koch|kuch|shukria|zabardast|mast|walaikum)/i.test(l)
  const isEnglish = !isUrdu && /^[a-z0-9 ,.!?'"-]*$/i.test(q) && l.split(' ').length>1

  if(b){
    if(isEnglish) return `Got it brother! Building your ${b.toUpperCase()} right now! 👇 Live preview below!`
    return `Lo bhai! ${b.toUpperCase()} bana diya! 👇 Neeche live preview dekho!`
  }

  if(l.includes("salam")||l.includes("aslam")) return "Walaikum Aslam bhai! ❤️ Allah khair kare! Bolo kya banana hai?"
  if(l.includes("how are you")) return isEnglish ? "Alhamdulillah I'm doing great brother! How about you? What should we build today? 🚀" : "Alhamdulillah ek dum zabardast hu bhai! Tum sunao! Kya build karein aaj? 🚀"
  if(l.includes("kese ho")||l.includes("kaisa hai")) return "Alhamdulillah ek dum mast hu bhai! Tum batao, kya banana hai? 😎"
  if(l.includes("thank")) return isEnglish ? "You're welcome brother! ❤️ Anytime! What else to build?" : "Koi baat nahi bhai! ❤️ Dil se! Aur kuch banana hai?"
  if(l.includes("kon ho")||l.includes("who are you")) return isEnglish ? "I'm NO QUIT AI brother! Your personal builder - Website, Calculator, Todo, Game - I build instantly! Just say 'build'!" : "Main NO QUIT AI hu bhai! Tumhara personal coder! Jo bolo foran bana deta hu!"
  if(l.includes("china")||l.includes("chaina")) return isEnglish ? "China travel needs a visa + flight booking. Do you want me to make a China travel checklist website for you? Or just need info?" : "China jane ke liye visa + ticket chahiye! Bolo checklist website bana dun ya sirf info chahiye?"
  if(l.includes("lora")) return isEnglish ? "LoRA is Low-Rank Adaptation - a way to fine-tune AI models with small data. Are you asking about AI LoRA training? I can build a LoRA training dashboard for you if you want!" : "Lora AI wala LoRA hai - AI model ko train karne ka tareeqa! Bolo ispe dashboard bana dun ya samjhau?"
  if(l.includes("help")||l.includes("madad")) return isEnglish ? "Yes bro I'm here! Tell me - you want info or should I build something? Just say 'build calculator' etc." : "Haan bhai bolo! Info chahiye ya kuch banana hai? Bas bolo 'calculator bana de'!"

  // SMART DEFAULT - No more website loop!
  if(isEnglish) return `Got it! "${q}" - I can help with that! Do you want info about this or should I build something related? Just say what you need!`
  return `Samajh gaya bhai! "${q}" - Ispe info chahiye ya kuch bana ke dun? Bolo kya karna hai!`
}

export default function App(){
  const [msgs,setMsgs]=useState([{from:"ai",text:"Aslam o Alaikum bhai! NO QUIT AI full power me wapas! Bolo kya chahiye? 😎"}])
  const [input,setInput]=useState("")
  const [notes,setNotes]=useState([])

  const send=()=>{
    if(!input.trim()) return
    const q=input
    const l=q.toLowerCase()
    const b=detectBuild(l)
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
        <b>NO QUIT AI</b><br/><small>ALWAYS BUILDING</small><br/><br/>Dashboard<br/><br/><button style={{background:"white",color:"black",padding:"5px 10px",borderRadius:"5px"}}>New Chat</button>
      </div>
      <div style={{flex:1,display:"flex",flexDirection:"column"}}>
        <div style={{padding:"10px",borderBottom:"1px solid #222"}}>💬 CHAT - Instant Builder</div>
        <div style={{flex:1,overflowY:"auto",padding:"15px"}}>
          {msgs.map((m,i)=><div key={i} style={{margin:"10px 0",textAlign:m.from=="user"?"right":"left"}}><span style={{background:m.from=="user"?"#333":"#1a1a1a",padding:"8px 12px",borderRadius:"10px",display:"inline-block"}}>{m.text}</span></div>)}
        </div>
        <div style={{padding:"10px",display:"flex",gap:"10px",borderTop:"1px solid #222"}}>
          <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key=="Enter"&&send()} placeholder="Kuch bhi pucho..." style={{flex:1,padding:"10px",borderRadius:"8px",background:"#1a1a1a",border:"1px solid #333",color:"white"}}/>
          <button onClick={send} style={{padding:"10px 20px",background:"#fbbf24",color:"black",borderRadius:"8px",fontWeight:"bold"}}>Send</button>
        </div>
      </div>
    </div>
  )
}
