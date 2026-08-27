import { useState } from "react";

export default function App() {
  const [lang, setLang] = useState("en");
  const isUrdu = lang === "ur";
  const [build, setBuild] = useState(null);

  const quick = [
    { type: "website", t: isUrdu ? "ویب سائٹ" : "Website", d: "HTML CSS", e: "🌐" },
    { type: "react", t: isUrdu ? "ری ایکٹ" : "React App", d: "Modern App", e: "⚛️" },
    { type: "python", t: isUrdu ? "پائتھون" : "Python", d: "Script", e: "🐍" },
    { type: "game", t: isUrdu ? "گیم" : "Game", d: "HTML5 Game", e: "🎮" },
  ];

  const projects = [
    { id: 1, name: "My Shop", type: "website", status: "complete" },
    { id: 2, name: "Todo App", type: "react", status: "building" },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0a", color: "#fff", fontFamily: "monospace", padding: 20 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 30 }}>
          <div>
            <h1 style={{ fontSize: 28, fontWeight: "bold" }}>
              <span style={{ color: "#fbbf24" }}>●</span> {isUrdu ? "کمانڈ سینٹر" : "Command Center"}
            </h1>
            <p style={{ color: "#888" }}>{isUrdu ? "کیا بنانا ہے؟" : "What are we building today?"}</p>
          </div>
          <button onClick={() => setLang(isUrdu ? "en" : "ur")} style={{ background: "#1a1a1a", color: "#fff", border: "1px solid #333", padding: "8px 12px", borderRadius: 6 }}>
            {isUrdu ? "EN" : "UR"}
          </button>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 15, marginBottom: 30 }}>
          {quick.map((q) => (
            <button key={q.type} onClick={() => setBuild(q.type)} style={{ background: "#111", border: "1px solid #222", padding: 20, borderRadius: 12, textAlign: "left", cursor: "pointer" }}>
              <div style={{ fontSize: 28 }}>{q.e}</div>
              <div style={{ fontWeight: "bold", marginTop: 8 }}>{q.t}</div>
              <div style={{ fontSize: 12, color: "#888" }}>{q.d}</div>
            </button>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 20 }}>
          <div>
            <h3 style={{ marginBottom: 12 }}>{isUrdu ? "حالیہ پروجیکٹس" : "Recent Projects"}</h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              {projects.map((p) => (
                <div key={p.id} onClick={() => setBuild(p.type)} style={{ background: "#111", border: "1px solid #222", padding: 15, borderRadius: 10, cursor: "pointer" }}>
                  <div>{p.type === "website" ? "🌐" : "⚛️"} {p.name}</div>
                  <div style={{ fontSize: 11, color: p.status === "complete" ? "#22c55e" : "#fbbf24", marginTop: 5 }}>{p.status}</div>
                </div>
              ))}
            </div>

            {build && (
              <div style={{ marginTop: 20, padding: 20, background: "#151515", border: "1px solid #fbbf24", borderRadius: 12 }}>
                <h3>🚀 {build.toUpperCase()} BUILT!</h3>
                <p style={{ color: "#888", fontSize: 13, marginTop: 5 }}>Preview Ready! Code generated successfully!</p>
                <div style={{ marginTop: 12, background: "#000", padding: 15, borderRadius: 8, textAlign: "center" }}>
                  Live Preview: {build}
                </div>
              </div>
            )}
          </div>

          <div>
            <h3 style={{ marginBottom: 12 }}>{isUrdu ? "چیٹس" : "Chats"}</h3>
            <div style={{ background: "#111", border: "1px solid #222", borderRadius: 10, padding: 20, color: "#666", textAlign: "center" }}>
              {build ? "Building " + build + "..." : (isUrdu ? "کوئی چیٹ نہیں" : "No chats yet")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

