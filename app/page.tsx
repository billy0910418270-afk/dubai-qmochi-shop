export default function Home() {
  return (
    <main className="min-h-screen bg-[#120804] text-white p-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center min-h-screen">

        <div>
          <p className="tracking-[0.4em] text-yellow-300 mb-4">
            DUBAI CHOCOLATE Q MOCHI
          </p>

          <h1 className="text-7xl font-bold text-yellow-200 mb-6">
            杜拜巧克力Q餅
          </h1>

          <p className="text-xl text-yellow-100/80 mb-8">
            杜拜開心果爆餡 × 精品巧克力Q餅
          </p>

          <div className="flex gap-4">
            <button className="bg-yellow-400 text-black px-8 py-4 rounded-full font-bold">
              立即購買
            </button>

            <button className="border border-yellow-200 px-8 py-4 rounded-full">
              查看介紹
            </button>
          </div>
        </div>

        <div>
          <img
            src="/product.jpeg"
            className="rounded-3xl"
          />
        </div>

      </div>
    </main>
  )
}