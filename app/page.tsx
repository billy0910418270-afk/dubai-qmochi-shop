import Image from "next/image"

export default function Home() {
  return (
    <main
      style={{
        background: "#120701",
        color: "white",
        minHeight: "100vh",
      }}
    >
      {/* HERO */}
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
        {/* 光暈 */}
        <div className="blur1"></div>
        <div className="blur2"></div>

        {/* 內容 */}
        <div
          style={{
            maxWidth: 1200,
            width: "100%",
            display: "grid",
            gridTemplateColumns: "1fr",
            alignItems: "center",
            gap: 40,
            position: "relative",
            zIndex: 2,
          }}
        >
          {/* 左邊文字 */}
          <div>
            <p
              style={{
                color: "#d8b35a",
                letterSpacing: 5,
                fontSize: 14,
              }}
            >
              DUBAI CHOCOLATE Q MOCHI
            </p>

            <h1
              style={{
                fontSize: "clamp(56px,13vw,112px)",
                lineHeight: 1.05,
                color: "#f5d28c",
                margin: "20px 0",
                fontWeight: 900,
              }}
            >
              杜拜巧克力
              <br />
              Q餅
            </h1>

            <p
              style={{
                fontSize: 22,
                lineHeight: 1.9,
                color: "#f8e7d0",
                maxWidth: 560,
              }}
            >
              濃郁巧克力外皮，包覆杜拜風味開心果內餡。
              <br />
              一口咬下，感受精品甜點般的奢華爆餡。
            </p>

            <div
              style={{
                display: "flex",
                gap: 16,
                marginTop: 40,
                flexWrap: "wrap",
              }}
            >
              <a
                href="#order"
                style={{
                  background: "#f5d28c",
                  color: "#1b0903",
                  padding: "16px 34px",
                  borderRadius: 999,
                  textDecoration: "none",
                  fontWeight: "bold",
                  fontSize: 16,
                  boxShadow: "0 10px 30px rgba(0,0,0,.3)",
                }}
              >
                立即預購
              </a>

              <a
                href="#features"
                style={{
                  border: "1px solid rgba(255,255,255,.15)",
                  color: "white",
                  padding: "16px 34px",
                  borderRadius: 999,
                  textDecoration: "none",
                  fontWeight: "bold",
                  backdropFilter: "blur(10px)",
                }}
              >
                探索風味
              </a>
            </div>
          </div>

          {/* 右邊圖片 */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Image
             src="/mochi.png"
             alt="Dubai Mochi"
             width={520}
             height={520}
             style={{
             width: "100%",
             maxWidth: 360,
             height: "auto",
             objectFit: "contain",
             filter: "drop-shadow(0 30px 60px rgba(0,0,0,.45))",
             }}
          />  
          </div>
        </div>
      </section>

      {/* 特色 */}
      <section
        id="features"
        style={{
          padding: "100px 24px",
          display: "grid",
          gap: 28,
          background: "#140904",
        }}
      >
        {[
          [
            "爆餡口感",
            "濃郁巧克力與開心果內餡交織，一口咬下層次瞬間綻放。",
          ],
          [
            "精品風味",
            "以杜拜甜點靈感打造，適合送禮、聚會與限量販售。",
          ],
          [
            "手工製作",
            "每日新鮮製作，保留最細緻的香氣與Q彈口感。",
          ],
        ].map(([title, text]) => (
          <div
            key={title}
            style={{
              maxWidth: 1100,
              width: "100%",
              margin: "0 auto",
              background: "rgba(255,255,255,.05)",
              border: "1px solid rgba(255,255,255,.06)",
              borderRadius: 36,
              padding: 42,
              backdropFilter: "blur(20px)",
            }}
          >
            <h2
              style={{
                color: "#f5d28c",
                fontSize: 40,
                marginBottom: 20,
              }}
            >
              {title}
            </h2>

            <p
              style={{
                fontSize: 22,
                lineHeight: 1.9,
                color: "#f6ede3",
              }}
            >
              {text}
            </p>
          </div>
        ))}
      </section>

      {/* 預購 */}
      <section
        id="order"
        style={{
          padding: "120px 24px",
          textAlign: "center",
          background: "#120701",
        }}
      >
        <h2
          style={{
            color: "#f5d28c",
            fontSize: 56,
            marginBottom: 24,
          }}
        >
          限量預購中
        </h2>

        <p
          style={{
            fontSize: 24,
            color: "#f8e7d0",
            marginBottom: 40,
          }}
        >
          想品嚐杜拜巧克力Q餅，請先加入購買名單。
        </p>

        <button
          style={{
            background: "#f5d28c",
            color: "#1b0903",
            border: "none",
            padding: "18px 42px",
            borderRadius: 999,
            fontWeight: "bold",
            fontSize: 18,
            cursor: "pointer",
          }}
        >
          我要預購
        </button>
      </section>
    </main>
  )
}