import './globals.css'

export const metadata = {
  title: 'Dubai Q Mochi'
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  )
}