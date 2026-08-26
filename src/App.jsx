import { useState } from 'react'

export default function App(){
  return (
    <div style={{minHeight:"100vh", background:"#0a0a0a", color:"#fff", fontFamily:"Inter, sans-serif", padding:"0 14px"}}>
      {/* Header */}
      <div style={{display:"flex", alignItems:"center", gap:8, padding:"18px 4px", borderBottom:"1px solid #1f1f1f"}}>
        <span style={{color:"#facc15"}}>⚡</span><b style={{letterSpacing:1}}>NO QUIT AI</b>
        <span style={{marginLeft:"auto", fontSize:11, color:"#666"}}>Your AI partner that never lets you quit.</span>
      </div>

      <div style={{maxWidth:900, margin:"0 auto", paddingTop:16}}>
        {/* Tasks */}
        <div style={{background:"#111", border:"1px solid #222", borderRadius:12, padding:12, marginBottom:14}}>
          <div style={{display:"flex", alignItems:"center", gap:8, fontSize:13, color:"#aaa"}}><span style={{width:6, height:6, background:"#22c55e", borderRadius:"50%"}}></span> 2 of 3 tasks done</div>
          <div style={{height:6, background:"#1e1e1e", borderRadius:10, marginTop:10, overflow:"hidden"}}><div style={{width:"78%", height:"100%", background:"#38bdf8"}}></div></div>
        </div>

        {/* Code area like video */}
        <div style={{background:"#0f1115", border:"1px solid #1e293b", borderRadius:12, padding:14, fontFamily:"monospace", fontSize:12, color:"#22c55e", lineHeight:1.7, boxShadow:"0 0 0 1px #111"}}>
          <div style={{color:"#475569", marginBottom:8}}>▶ building production bundle...</div>
          <div>✓ Compiled successfully in 2.4s</div>
          <div style={{color:"#94a3b8"}}>✓ 124 modules transformed</div>
          <div style={{color:"#38bdf8"}}>✓ dist/assets/index-abc123.js  156.4 kB</div>
          <div style={{marginTop:10, color:"#a1a1aa"}}>$ npm run build completed - No Quit AI is live!</div>
          <div style={{marginTop:14, display:"flex", gap:20, color:"#666", fontSize:11, borderTop:"1px solid #1e1e1e", paddingTop:10}}>
            <span>⚡ Build: <b style={{color:"#22c55e"}}>SUCCESS</b></span><span>🚀 Deploy: <b style={{color:"#22c55e"}}>READY</b></span>
          </div>
        </div>

        {/* Bottom 4 cards like video */}
        <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, marginTop:18}}>
          {[
            {t:"Build Website", s:"Launch your idea", i:"🌐"},
            {t:"React App", s:"Create with AI", i:"⚛️"},
            {t:"Python Script", s:"Automate tasks", i:"🐍"},
            {t:"Create Game", s:"Fun & interactive", i:"🎮"},
          ].map(c=>(
            <div key={c.t} style={{background:"#141414", border:"1px solid #222", borderRadius:14, padding:"16px 14px"}}>
              <div style={{fontSize:18}}>{c.i}</div>
              <div style={{fontWeight:700, marginTop:6, fontSize:14}}>{c.t}</div>
              <div style={{fontSize:11, color:"#666", marginTop:2}}>{c.s}</div>
            </div>
          ))}
        </div>

        <div style={{textAlign:"center", margin:"40px 0 20px", fontSize:9, letterSpacing:"0.5em", color:"#2a2a2a"}}>NO EXCUSES. ONLY RESULTS.</div>
      </div>
    </div>
  )
}
