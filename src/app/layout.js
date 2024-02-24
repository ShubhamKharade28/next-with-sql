
import './globals.scss'


export const metadata = {
  title: 'Next-With-SQL',
  description: 'To Integrate SQL with Next.Js or any other javascript platform',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
