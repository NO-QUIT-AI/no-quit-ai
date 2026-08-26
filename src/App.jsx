import { useState, useEffect } from 'react'

export default function App(){
  const [t,setT]=useState('')
  const full="NEVER QUIT. KEEP GRINDING."
  useEffect(()=>{
    let i=0
    const id=setInterval(()=>{ setT(full.slice(0,i)); i++; if(i>full.length+5) i=0 },70)
    return ()=>clearInterval(id)
  },[])

  return (
    <div style={{minHeight:"100vh", background:"#050010", display:"flex", alignItems:"center", justifyContent:"center", position:"relative", overflow:"hidden"}}>
      {/* Animated Galaxy Background like video */}
      <div style={{position:"absolute", inset:0, background:"radial-gradient(60% 80% at 50% 0%, #5b1eb8 0%, #2a0a5e 30%, #0f0a2e 60%, #050010 100%)", animation:"move 10s ease-in-out infinite alternate"}}></div>
      <div style={{position:"absolute", width:"800px", height:"800px", background:"radial-gradient(circle, rgba(168,85,247,0.4) 0%, transparent 70%)", top:"-200px", left:"-100px", filter:"blur(40px)", animation:"float1 8s ease-in-out infinite"}}></div>
      <div style={{position:"absolute", width:"700px", height:"700px", background:"radial-gradient(circle, rgba(59,130,246,0.35) 0%, transparent 70%)", bottom:"-200px", right:"-100px", filter:"blur(50px)", animation:"float2 10s ease-in-out infinite"}}></div>
      
      {/* Stars / particles */}
      <div style={{position:"absolute", inset:0, backgroundImage:"radial-gradient(white 1px, transparent 1px)", backgroundSize:"60px 60px", opacity:0.06}}></div>

      <div style={{zIndex:10, textAlign:"center", padding:20}}>
        <h1 style={{fontSize:"clamp(52px, 14vw, 92px)", fontWeight:900, color:"white", margin:0, letterSpacing:"-0.05em", lineHeight:0.9, textShadow:"0 0 40px rgba(168,85,247,0.5)"}}>
          NO <span style={{color:"#a855f7"}}>QUIT</span> AI
        </h1>
        
        <div style={{marginTop:32, fontSize:"clamp(14px, 3.2vw, 20px)", letterSpacing:"0.35em", color:"#cbd5e1", fontWeight:400, minHeight:64, lineHeight:1.6, textShadow:"0 2px 10px rgba(0,0,0,0.8)"}}>
          {t}<span style={{borderLeft:"3px solid #fff", marginLeft:5}}>&nbsp;</span>
        </div>

        <p style={{color:"rgba(255,255,255,0.4)", marginTop:6, fontSize:17, letterSpacing:"0.02em"}}>Your AI partner that never lets you quit.</p>

        <button style={{marginTop:48, background:"linear-gradient(180deg, #fff, #e2e8f0)", color:"black", border:"none", padding:"18px 38px", borderRadius:999, fontWeight:800, fontSize:16, boxShadow:"0 0 0 1px rgba(255,255,255,0.2), 0 15px 40px rgba(168,85,247,0.4)", cursor:"pointer", transition:"transform 0.2s"}}>
          START GRINDING →
        </button>

        <div style={{marginTop:90, fontSize:10, letterSpacing:"0.6em", color:"rgba(255,255,255,0.2)", fontWeight:600}}>NO EXCUSES. ONLY RESULTS.</div>
      </div>

      <style>{`
        @keyframes float1{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(30px,20px) scale(1.1)}}
        @keyframes float2{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(-30px,-20px) scale(1.1)}}
        @keyframes move{0%{filter: hue-rotate(0deg)}100%{filter: hue-rotate(15deg)}}
      `}</style>
    </div>
  )
}
