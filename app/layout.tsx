import "./globals.css"
export const metadata = {
  title: 'Dubai Q Mochi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-Hant">
      <body
        style={{
          margin: 0,
          background: '#120701',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        {children}
      </body>
    </html>
  )
}