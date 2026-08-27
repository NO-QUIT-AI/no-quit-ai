import { useState, useRef } from "react";

export default function App() {
  const [lang, setLang] = useState("en");
  const [active, setActive] = useState(null);
  const [input, setInput] = useState("");
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(false);
  const isUrdu = lang === "ur";

  // --- REAL AI AGENT WITH GROQ + GEMINI ---
  const callAI = async (prompt) => {
    const groqKey = import.meta.env.VITE_GROQ_API_KEY;
    const geminiKey = import.meta.env.VITE_GEMINI_API_KEY;

    // 1. Try GROQ First (Fast)
    if (groqKey) {
      try {
        const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
          method: "POST",
          headers: { "Content-Type": "application/json", "Authorization": `Bearer ${groqKey}` },
          body: JSON.stringify({
            model: "llama-3.1-8b-instant",
            messages: [{ role: "user", content: prompt }],
          })
        });
        const data = await res.json();
        if (data.choices?.[0]?.message?.content) return data.choices[0].message.content;
      } catch (e) { console.log("Groq fail, trying Gemini", e); }
    }

    // 2. Fallback to GEMINI
    if (geminiKey) {
      try {
        const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiKey}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
        });
        const data = await res.json();
        return data.candidates?.[0]?.content?.parts?.[0]?.text || "No response";
      } catch (e) { console.log("Gemini fail", e); }
    }
    return isUrdu? "Bhai API Key ka masla hai! Vercel me keys check karo!" : "Bro API Key missing! Add keys in Vercel ENV!";
  };

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = input;
    setChats(c => [...c, { from: "user", text: userMsg }]);
    setInput("");
    setLoading(true);

    // Smart Prompt
    const smartPrompt = `You are NO-QUIT AI Agent. User language: ${/[\u0600-\u06FF]/.test(userMsg)? "Urdu" : "English"}.
    If Urdu then reply in Urdu, if English then English.
    User wants: ${userMsg}.
    If they ask to build website/react/python/game, give small code preview in HTML.
    Keep reply short, smart, no links. Topic: ${userMsg}`;

    const aiReply = await callAI(smartPrompt);
    setChats(c => [...c, { from: "ai", text: aiReply }]);
    setLoading(false);

    // Auto detect build type
    if (userMsg.toLowerCase().includes("website") || userMsg.toLowerCase().includes("ویب")) setActive("website");
    else if (userMsg.toLowerCase().includes("game") || userMsg.toLowerCase().includes("گیم")) setActive("game");
    else if (userMsg.toLowerCase().includes("react")) setActive("react");
    else if (userMsg.toLowerCase().includes("python")) setActive("python");
  };

  return (
    <div style={{ minHeight: "100vh", background: "#0e0e0e", color: "#ccc", fontFamily: "monospace", padding: "16px", paddingBottom: "80px" }}>

      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#fff", fontSize: "18px", fontWeight: "bold" }}>
            <div style={{ width: "10px", height: "10px", background: "#f5c518", borderRadius: "50%", boxShadow: "0 0 8px #f5c518" }}></div>
            {isUrdu? "کمانڈ سینٹر" : "Command Center"} <span style={{ fontSize: "10px", background: "#22c55e", color: "#000", padding: "2px 6px", borderRadius: "4px" }}>AI LIVE</span>
          </div>
          <div style={{ fontSize: "11px", color: "#666", marginTop: "6px", marginLeft: "18px" }}>{isUrdu? "GROQ + Gemini Active" : "GROQ + Gemini Active"}</div>
        </div>
        <button onClick={() => setLang(isUrdu? "en" : "ur")} style={{ background: "#1c1c1c", border: "1px solid #2a2a2a", color: "#888", fontSize: "10px", padding: "14px 8px", borderRadius: "6px" }}>{isUrdu? "EN" : "UR"}</button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "10px", marginBottom: "20px" }}>
        {[
          { k: "website", e: "🌐", t: "Website", d: "HTML CSS" },
          { k: "react", e: "⚛️", t: "React App", d: "Modern App" },
          { k: "python", e: "🐍", t: "Python", d: "Script" },
          { k: "game", e: "🎮", t: "Game", d: "HTML5 Game" },
        ].map(i => (
          <div key={i.k} onClick={() => setActive(i.k)} style={{ background: "#171717", border: active===i.k? "1px solid #f5c518" : "1px solid #222", borderRadius: "10px", padding: "14px 12px", cursor: "pointer" }}>
            <div style={{ fontSize: "18px" }}>{i.e}</div>
            <div style={{ fontSize: "10px", color: "#888", marginTop: "8px" }}>{i.t}</div>
            <div style={{ fontSize: "9px", color: "#555" }}>{i.d}</div>
          </div>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "10px", marginBottom: "20px" }}>
        <div>
          <div style={{ fontSize: "12px", color: "#fff", marginBottom: "8px", fontWeight: "bold" }}>Recent Projects</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
            <div style={{ background: "#171717", border: "1px solid #222", borderRadius: "8px", padding: "10px 12px" }}><div style={{ fontSize: "10px", color: "#fff" }}>🏪 My Shop</div><div style={{ fontSize: "9px", color: "#22c55e" }}>complete</div></div>
            <div style={{ background: "#171717", border: "1px solid #222", borderRadius: "8px", padding: "10px 12px" }}><div style={{ fontSize: "10px", color: "#fff" }}>⚛️ Todo App</div><div style={{ fontSize: "9px", color: "#f5c518" }}>building</div></div>
          </div>
        </div>
        <div>
          <div style={{ fontSize: "12px", color: "#fff", marginBottom: "8px", fontWeight: "bold" }}>Chats ({chats.length})</div>
          <div style={{ background: "#171717", border: "1px solid #222", borderRadius: "8px", padding: "10px", maxHeight: "120px", overflowY: "auto" }}>
            {chats.length===0? <div style={{ fontSize: "9px", color: "#555", textAlign: "center", padding: "10px" }}>No chats yet</div> : chats.slice(-3).map((c,i) => <div key={i} style={{ fontSize: "9px", color: c.from==="user"? "#f5c518" : "#ccc", marginBottom: "4px" }}>{c.from}: {c.text.substring(0, 40)}...</div>)}
          </div>
        </div>
      </div>

      {/* AI CHAT OUTPUT */}
      {chats.length>0 && (
        <div style={{ background: "#111", border: "1px solid #222", borderRadius: "12px", padding: "15px", marginBottom: "20px" }}>
          {chats.map((c,i) => (
            <div key={i} style={{ marginBottom: "12px", padding: "10px", background: c.from==="user"? "#1a1a1a" : "#151515", borderRadius: "8px", borderLeft: c.from==="user"? "2px solid #f5c518" : "2px solid #22c55e" }}>
              <div style={{ fontSize: "10px", color: "#888", marginBottom: "4px" }}>{c.from.toUpperCase()}</div>
              <div style={{ fontSize: "12px", color: "#ddd", whiteSpace: "pre-wrap" }}>{c.text}</div>
            </div>
          ))}
          {loading && <div style={{ fontSize: "11px", color: "#f5c518" }}>● AI soch raha hai...</div>}
        </div>
      )}

      {/* INPUT BAR - REAL AGENT */}
      <div style={{ position: "fixed", bottom: "0", left: "0", right: "0", background: "#0e0e0e", borderTop: "1px solid #222", padding: "12px 16px", display: "flex", gap: "10px" }}>
        <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==="Enter" && handleSend()} placeholder={isUrdu? "Kuch banao... website, game?" : "Ask AI to build... website, game?"} style={{ flex: 1, background: "#171717", border: "1px solid #333", borderRadius: "20px", padding: "12px 16px", color: "#fff", fontSize: "13px", outline: "none" }} />
        <button onClick={handleSend} disabled={loading} style={{ background: "#f5c518", color: "#000", border: "none", borderRadius: "50%", width: "44px", height: "44px", fontWeight: "bold", cursor: "pointer" }}>↑</button>
      </div>
    </div>
  );
}
