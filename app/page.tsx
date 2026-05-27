export default function Home() {
  return (
    <main className="main">
      <section className="hero">
        <div className="goldLight"></div>

        <div className="content">
          <p className="tag">DUBAI CHOCOLATE Q MOCHI</p>

          <h1>
            杜拜巧克力
            <br />
            Q餅
          </h1>

          <p className="subtitle">
            濃郁巧克力外皮，包覆杜拜風味開心果內餡。
            <br />
            一口咬下，感受精品甜點般的奢華爆餡。
          </p>

          <div className="buttons">
            <a href="#order" className="primary">
              立即預購
            </a>

            <a href="#features" className="secondary">
              探索風味
            </a>
          </div>
        </div>
      </section>

      <section id="features" className="features">
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
          <div className="card" key={title}>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
        ))}
      </section>

      <section id="order" className="order">
        <h2>限量預購中</h2>

        <p>
          想品嚐杜拜巧克力Q餅，
          <br />
          請先加入購買名單。
        </p>

        <button>我要預購</button>
      </section>
    </main>
  )
}