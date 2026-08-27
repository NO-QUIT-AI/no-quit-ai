import { useState, useRef, useEffect } from "react";
const getSmartReply = (q) => {
  if (!q ||!q.trim()) return "Bhai kuch likho toh sahi! 🙂";
  const raw = q.trim();
  const l = raw.toLowerCase();
  const isUrduScript = /[\u0600-\u06FF]/.test(raw);
  const isRomanUrdu = /(mujy|mujhe|kesy|kese|kaise|kya|kyu|bhai|jana|hy|hai|hu|wala|aslam|salam|shukria|acha|kese ho|kya hal|paisa|kamana|sekhna|batao|banao|bnado|chahiye|chahye)/i.test(l);
  const isEnglish =!isUrduScript &&!isRomanUrdu;
  const isBuildIntent = /(bana|banao|banado|bnado|build|create|make|design|code|develop|clone|setup)/i.test(l);
  const isExplainIntent = /(samjha|samjhao|explain|what is|kya hai|kya hota|how to|kaise)/i.test(l);
  const techStack = l.match(/(react|nextjs|node|python|tailwind|css|javascript|html|express|mongodb|firebase)/gi) || [];
  const projectTypes = l.match(/(calculator|todo|shop|store|ecommerce|game|website|app|dashboard|chat|bot|landing page|portfolio|crud)/gi) || [];
  const cleanedTopic = raw.replace(/(bana|banao|banado|bnado|build|create|make|design|please|bhai|yaar|mujy|mujhe|ik|ek|code|chahiye|do|de|dene|kardo|krdo)/gi, "").trim();
  if (l.includes("salam") || l.includes("aslam") || l.includes("السلام")) {
    if (isUrduScript) return "وعلیکم السلام بھائی! ❤️ بولو آج کیا دھماکہ خیز پروجیکٹ بنانا ہے؟";
    if (isEnglish) return "Walaikum Aslam bro! ❤️ What awesome app are we building today?";
    return "Walaikum Aslam bhai! ❤️ Allah khair kare! Batao aaj kya zabardast cheez banani hai?";
  }
  if (isBuildIntent) {
    const topicDisplay = projectTypes.length > 0? projectTypes.join(" + ").toUpperCase() : (cleanedTopic? cleanedTopic.toUpperCase() : "CUSTOM PROJECT");
    const stackText = techStack.length > 0? ` using ${techStack.join(", ").toUpperCase()}` : "";
    if (isUrduScript) return `ٹھیک ہے بھائی! آپ کا ${topicDisplay} پروجیکٹ تیار کرتے ہیں۔ میں اس کا کوڈ لکھنا شروع کروں؟ 🚀`;
    if (isEnglish) return `Got it bro! I'm on it. Starting the architecture for your ${topicDisplay}${stackText}. Ready to review the code? 🚀`;
    return `Zabardast bhai! Aapka ${topicDisplay}${stackText} ka request mil gaya hai. Abhi poora code structure tayar karke deta hu! 🚀`;
  }
  if (isExplainIntent) {
    const topic = cleanedTopic || "is topic";
    if (isEnglish) return `Sure bro! Let me break down ${topic} step-by-step for you.`;
    return `Bilkul bhai! ${topic} ko aasan lafzon me samjha deta hu.`;
  }
  if (l.match(/china|chaina|cheena|chayna|چین/)) {
    return isEnglish? "For China: Passport + Visa + Ticket required. Tourist visa takes 4-5 days. Want me to build a travel guide dashboard?" : "China jane ke liye Passport + Visa + Ticket chahiye! Tourist visa 4-5 din me lagta hai. Bolo Travel Guide app bana dun?";
  }
  if (l.match(/lora|lodda|loda|lodd|لورا/)) {
    return "LoRA (Low-Rank Adaptation) AI models ko kam VRAM pe fine-tune karne ke liye use hota hai. Kya aapko iska Python script chahiye?";
  }
  if (l.match(/trading|trade|ٹریڈنگ/)) {
    return "Trading ke liye Binance/TradingView pe practice karo. Kya main aapke liye profit calculator ya signal dashboard banao?";
  }
  if (isUrduScript) return `میں آپ کی بات سمجھ گیا ہوں: "${raw}"۔ بتائیں اس کا پروجیکٹ بناؤں یا ڈیٹیل بتاؤں؟`;
  if (isEnglish) return `I got your context: "${raw}". Should I write the full code for this or explain the concept first?`;
  return `Bhai aapne kaha: "${raw}". Batao iska complete code likh du ya pehle structure samjhau?`;
};
export default function App() {
  const [msgs, setMsgs] = useState([{ from: "ai", text: "Aslam o Alaikum bhai! NO QUIT AI Full Smart Mode me active hai! Bolo kya banana hai? High-level custom apps, Dashboards, ya APIs?" }]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);
  useEffect(() => { chatEndRef.current?.scrollIntoView({ behavior: "smooth" }); }, [msgs]);
  const send = () => {
    if (!input.trim()) return;
    const q = input;
    setMsgs((m) => [...m, { from: "user", text: q }]);
    setInput("");
    setTimeout(() => { setMsgs((m) => [...m, { from: "ai", text: getSmartReply(q) }]); }, 250);
  };
  return (
    <div style={{ minHeight: "100vh", background: "#0d0d0e", color: "#e5e7eb", fontFamily: "monospace", display: "flex" }}>
      <div style={{ width: 180, background: "#111113", borderRight: "1px solid #222225", padding: 15, display: "flex", flexDirection: "column", gap: 15 }}>
        <div><b style={{ color: "#fbbf24", fontSize: 16 }}>NO QUIT AI</b><br/><small style={{ color: "#6b7280" }}>SMART BUILDER v2</small></div>
        <button onClick={() => setMsgs([{ from: "ai", text: "New Chat Started! Bolo kya banana hai?" }])} style={{ background: "#fbbf24", color: "#000", border: "none", padding: "8px 12px", borderRadius: 6, fontWeight: "bold", cursor: "pointer" }}>+ New Chat</button>
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", height: "100vh" }}>
        <div style={{ padding: 15, borderBottom: "1px solid #222225", background: "#111113", fontWeight: "bold" }}>💬 CHAT - Smart Context Engine</div>
        <div style={{ flex: 1, overflowY: "auto", padding: 20 }}>
          {msgs.map((m, i) => (<div key={i} style={{ margin: "12px 0", textAlign: m.from === "user"? "right" : "left" }}><div style={{ background: m.from === "user"? "#2563eb" : "#1f1f23", color: "#ffffff", padding: "10px 16px", borderRadius: 12, display: "inline-block", maxWidth: "75%", lineHeight: "1.5" }}>{m.text}</div></div>))}
          <div ref={chatEndRef} />
        </div>
        <div style={{ padding: 15, display: "flex", gap: 10, borderTop: "1px solid #222225", background: "#111113" }}>
          <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && send()} placeholder="Kuch bhi pucho ya banwao (e.g., 'React me Ecommerce store ka code do')..." style={{ flex: 1, padding: 12, borderRadius: 8, background: "#1f1f23", border: "1px solid #333338", color: "white", outline: "none" }} />
          <button onClick={send} style={{ padding: "12px 24px", background: "#fbbf24", color: "black", border: "none", borderRadius: 8, fontWeight: "bold", cursor: "pointer" }}>Send</button>
        </div>
      </div>
    </div>
  );
}
