export default function Home() {
  return (
    <main style={{ background: "#120701", color: "white", minHeight: "100vh" }}>
      <section
        style={{
          minHeight: "100vh",
          padding: "90px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(135deg,#120701,#2a1008)",
        }}
      >
        <div className="blur1"></div>
        <div className="blur2"></div>

        <div
          style={{
            maxWidth: 1100,
            width: "100%",
            position: "relative",
            zIndex: 2,
          }}
        >
          <p style={{ color: "#d8b35a", letterSpacing: 5 }}>
            DUBAI CHOCOLATE Q MOCHI
          </p>

          <h1
            style={{
              fontSize: "clamp(56px,13vw,112px)",
              lineHeight: 1.05,
              color: "#f5d28c",
              margin: "20px 0",
            }}
          >
            杜拜巧克力
            <br />
            Q餅
          </h1>

          <p style={{ fontSize: 22, lineHeight: 1.9 }}>
            濃郁巧克力外皮，包覆杜拜風味開心果內餡。
            <br />
            一口咬下，感受精品甜點般的奢華爆餡。
          </p>

          <a
            href="#order"
            style={{
              display: "inline-block",
              marginTop: 36,
              background: "#f5d28c",
              color: "#1b0903",
              padding: "16px 30px",
              borderRadius: 999,
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            立即預購
          </a>
        </div>
      </section>
      <section style={{ padding: "80px 24px", display: "grid", gap: 24 }}>
  {[
    ["爆餡口感", "濃郁巧克力與開心果內餡交織，一口咬下層次瞬間綻放。"],
    ["精品風味", "以杜拜甜點靈感打造，適合送禮、聚會與限量販售。"],
    ["手工製作", "每日新鮮製作，保留最細緻的香氣與Q彈口感。"],
  ].map(([title, text]) => (
    <div
      key={title}
      style={{
        maxWidth: 980,
        width: "100%",
        margin: "0 auto",
        background: "rgba(255,255,255,.08)",
        borderRadius: 32,
        padding: 36,
      }}
    >
      <h2 style={{ color: "#f5d28c", fontSize: 36 }}>{title}</h2>
      <p style={{ fontSize: 20, lineHeight: 1.8 }}>{text}</p>
    </div>
  ))}
</section>
    </main>
  )
}