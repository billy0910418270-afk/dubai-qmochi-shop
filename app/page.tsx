export default function Home() {
  return (
    <main>
      <section style={{ minHeight: "100vh", padding: "80px 24px", background: "#120701", color: "white" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gap: 40 }}>
          <div>
            <p style={{ color: "#d8b35a", letterSpacing: 4 }}>DUBAI CHOCOLATE Q MOCHI</p>
            <h1 style={{ fontSize: 56, color: "#f5d28c", margin: "20px 0" }}>
              杜拜巧克力Q餅
            </h1>
            <p style={{ fontSize: 22, lineHeight: 1.8 }}>
              濃郁巧克力 × 開心果爆餡，一口沉醉的精品甜點體驗。
            </p>
            <button style={{ marginTop: 32, padding: "16px 32px", borderRadius: 999, border: 0, background: "#d8b35a", fontWeight: "bold" }}>
              立即購買
            </button>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 20 }}>
            {["爆餡口感", "精品風味", "手工製作"].map((item) => (
              <div key={item} style={{ background: "rgba(255,255,255,.06)", padding: 28, borderRadius: 24 }}>
                <h2 style={{ color: "#f5d28c" }}>{item}</h2>
                <p>杜拜風格甜點，適合送禮、聚會與限量販售。</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}