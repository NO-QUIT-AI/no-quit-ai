import { useState } from "react";

// --- SMART NO LINKS + ALL LANGUAGE ---
export default function App() {
  const [language, setLanguage] = useState("en");
  const isUrdu = language === "ur";
  const [activeProject, setActiveProject] = useState(null);
  const [msgs, setMsgs] = useState([]);

  // Mock Data (no external API needed)
  const mockStats = {
    recentProjects: [
      { id: 1, name: "My Shop Website", projectType: "website", status: "complete", description: "Ecommerce store", updatedAt: new Date() },
      { id: 2, name: "Todo App", projectType: "react", status: "in-progress", description: "Task manager", updatedAt: new Date() },
    ]
  };

  const quickStarts = [
    { type: "website", label: isUrdu ? "ویب سائٹ بنائیں" : "Build Website", desc: isUrdu ? "ایچ ٹی ایم ایل اور سی ایس ایس" : "HTML & CSS site", emoji: "🌐" },
    { type: "react", label: isUrdu ? "ری ایکٹ ایپ" : "React App", desc: isUrdu ? "ماڈرن ویب ایپ" : "Modern web app", emoji: "⚛️" },
    { type: "python", label: isUrdu ? "پائتھون سکرپٹ" : "Python Script", desc: isUrdu ? "آٹومیشن ٹول" : "Automation tool", emoji: "🐍" },
    { type: "game", label: isUrdu ? "گیم بنائیں" : "Create Game", desc: isUrdu ? "ایچ ٹی ایم ایل 5 گیم" : "HTML5 Canvas game", emoji: "🎮" },
  ];

  const handleBuild = (type) => {
    const topic = type.toUpperCase();
    setActiveProject(topic);
    setMsgs(prev => [...prev, { from: "ai", text: isUrdu ? `لو بھائی! ${topic} بنا دیا! 👇 نیچے دیکھو!` : `Got it bro! Building ${topic} right now! 👇 Check preview!`, build: type }]);
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0a", color: "#e5e7eb", fontFamily: "monospace", padding: "20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px" }}>
          <div>
            <h1 style={{ fontSize: "32px", fontWeight: "bold", display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ color: "#fbbf24" }}>●</span> {isUrdu ? "کمانڈ سینٹر" : "Command Center"}
            </h1>
            <p style={{ color: "#888", marginTop: "5px" }}>
              {isUrdu ? "آپ کا ذاتی اے آئی کوڈنگ اسسٹنٹ۔ کیا بنانا چاہتے ہیں؟" : "Your personal AI coding assistant. What are we building today?"}
            </p>
          </div>
          <button onClick={() => setLanguage(isUrdu ? "en" : "ur")} style={{ background: "#1a1a1a", border: "1px solid #333", padding: "8px 12px", borderRadius: "6px", color: "white", cursor: "pointer" }}>
            {isUrdu ? "English" : "اردو"}
          </button>
        </div>

        {/* Quick Start */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "15px", marginBottom: "40px" }}>
          {quickStarts.map((qs) => (
            <button
              key={qs.type}
              onClick={() => handleBuild(qs.type)}
              style={{ background: "#111", border: "1px solid #222", padding: "20px", borderRadius: "12px", textAlign: "left", cursor: "pointer", transition: "0.2s" }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "#fbbf24"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "#222"}
            >
              <div style={{ fontSize: "30px", marginBottom: "10px" }}>{qs.emoji}</div>
              <h3 style={{ fontWeight: "bold", fontSize: "16px" }}>{qs.label}</h3>
              <p style={{ fontSize: "12px", color: "#888", marginTop: "4px" }}>{qs.desc}</p>
            </button>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "20px" }}>
          {/* Recent Projects */}
          <div>
            <h2 style={{ fontSize: "20px", marginBottom: "15px" }}>{isUrdu ? "حالیہ پروجیکٹس" : "Recent Projects"}</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              {mockStats.recentProjects.map((project) => (
                <div key={project.id} onClick={() => handleBuild(project.projectType)} style={{ background: "#111", border: "1px solid #222", padding: "15px", borderRadius: "10px", cursor: "pointer" }}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ background: "#fbbf241a", padding: "5px 8px", borderRadius: "5px" }}>{project.projectType === "website" ? "🌐" : "⚛️"}</span>
                    <span style={{ background: project.status === "complete" ? "#22c55e22" : "#333", color: project.status === "complete" ? "#22c55e" : "#aaa", fontSize: "10px", padding: "4px 8px", borderRadius: "10px" }}>{project.status}</span>
                  </div>
                  <h4 style={{ marginTop: "12px", fontWeight: "bold" }}>{project.name}</h4>
                  <p style={{ fontSize: "12px", color: "#666" }}>{project.description}</p>
                </div>
              ))}
            </div>

            {/* Builder Preview */}
            {msgs.map((m, i) => m.build && (
              <div key={i} style={{ marginTop: "20px", padding: "20px", background: "#151515", border: "1px solid #fbbf24", borderRadius: "12px" }}>
                <h3>🚀 {m.build.toUpperCase()} Built Successfully!</h3>
                <p style={{ color: "#888", fontSize: "13px", marginTop: "5px" }}>{m.text}</p>
                <div style={{ marginTop: "15px", background: "#000", padding: "15px", borderRadius: "8px", textAlign: "center" }}>
                  {m.build === "website" ? "🌐 Website Live Preview Ready!" : m.build === "game" ? "🎮 Game Canvas Ready! Play Now!" : "⚛️ React App Compiled!"}
                </div>
              </div>
            ))}
          </div>

          {/* Recent Chats */}
          <div>
            <h2 style={{ fontSize: "20px", marginBottom: "15px" }}>{isUrdu ? "حالیہ بات چیت" : "Recent Chats"}</h2>
            <div style={{ background: "#111", border: "1px solid #222", borderRadius: "10px", overflow: "hidden" }}>
              {msgs.length === 0 ? (
                <div style={{ padding: "30px", textAlign: "center", color: "#666", fontSize: "13px" }}>
                  {isUrdu ? "کوئی چیٹ موجود نہیں" : "No recent conversations"}
                </div>
              ) : (
                msgs.slice(-5).map((m, i) => (
                  <div key={i} style={{ padding: "12px 15px", borderBottom: "1px solid #222", fontSize: "13px" }}>
                    <span style={{ color: m.from === "user" ? "#fbbf24" : "#22c55e" }}>●</span> {m.text.substring(0, 50)}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

