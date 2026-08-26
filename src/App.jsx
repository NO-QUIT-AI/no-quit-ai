import { useState, useEffect } from 'react'

export default function App() {
  const [text, setText] = useState('')
  const full = "NEVER QUIT. KEEP GRINDING."
  useEffect(() => {
    let i=0
    const t=setInterval(()=>{
      setText(full.slice(0,i))
      i++
      if(i>full.length) clearInterval(t)
    },80)
    return ()=>clearInterval(t)
  },[])

  return (
    <div style={{minHeight:"100vh", background:"#000", color:"#fff", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", position:"relative", overflow:"hidden", textAlign:"center"}}>
      <div style={{position:"absolute", width:600, height:600, background:"#9333ea", borderRadius:"50%", filter:"blur(150px)", opacity:0.3, top:-80, left:-80}}></div>
      <div style={{position:"absolute", width:500, height:500, background:"#2563eb", borderRadius:"50%", filter:"blur(150px)", opacity:0.3, bottom:-80, right:-80}}></div>
      <h1 style={{fontSize:70, fontWeight:900, zIndex:10, letterSpacing:-3}}>NO <span style={{color:"#a855f7"}}>QUIT</span> AI</h1>
      <h2 style={{marginTop:20, fontSize:20, letterSpacing:4, height:30, zIndex:10}}>{text}<span style={{animation:"blink 1s infinite"}}>|</span></h2>
      <p style={{color:"#888", maxWidth:350, marginTop:10, zIndex:10}}>Your AI partner that never lets you quit.</p>
      <button style={{marginTop:40, padding:"14px 32px", background:"#fff", color:"#000", fontWeight:800, borderRadius:30, border:"none", zIndex:10}}>START GRINDING →</button>
      <div style={{position:"absolute", bottom:20, fontSize:10, color:"#444", letterSpacing:5, zIndex:10}}>NO EXCUSES. ONLY RESULTS.</div>
    </div>
  )
}
