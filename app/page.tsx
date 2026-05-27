export default function Home() {
  return (
    <main style={{ background: "#120701", color: "white", minHeight: "100vh" }}>
      <section style={{
        minHeight: "100vh",
        padding: "90px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(135deg,#120701,#2a1008)"
      }}>
        <div className="blur1"></div>
        <div className="blur2"></div>
        <div style={{ maxWidth: 980, width: "100%" }}>
          <p style={{ color: "#d8b35a", letterSpacing: 5 }}>
            DUBAI CHOCOLATE Q MOCHI
          </p>

          <h1 style={{
            fontSize: "clamp(56px,13vw,112px)",
            lineHeight: 1.05,
            color: "#f5d28c",
            margin: "20px 0"
          }}>
            杜拜巧克力<br />Q餅
          </h1>

          <p style={{ fontSize: 22, lineHeight: 1.9 }}>
            濃郁巧克力外皮，包覆杜拜風味開心果內餡。<br />
            一口咬下，感受精品甜點般的奢華爆餡。
          </p>

          <div style={{ marginTop: 36, display: "flex", gap: 16 }}>
            <a href="#order" style={{
              background: "#f5d28c",
              color: "#1b0903",
              padding: "16px 30px",
              borderRadius: 999,
              textDecoration: "none",
              fontWeight: "bold"
            }}>
              立即預購
            </a>
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 24px", display: "grid", gap: 24 }}>
        {["爆餡口感", "精品風味", "手工製作"].map((title) => (
          <div key={title} style={{
            maxWidth: 980,
            width: "100%",
            margin: "0 auto",
            background: "rgba(255,255,255,.06)",
            borderRadius: 32,
            padding: 36
          }}>
            <h2 style={{ color: "#f5d28c", fontSize: 36 }}>{title}</h2>
            <p style={{ fontSize: 20, lineHeight: 1.8 }}>
              杜拜風格甜點，適合送禮、聚會與限量販售。
            </p>
          </div>
        ))}
      </section>

      <section id="order" style={{ textAlign: "center", padding: "90px 24px" }}>
        <h2 style={{ color: "#f5d28c", fontSize: 42 }}>限量預購中</h2>
        <p style={{ fontSize: 20 }}>想品嚐杜拜巧克力Q餅，請先加入購買名單。</p>
      </section>
    </main>
  )
}