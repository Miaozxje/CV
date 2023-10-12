import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './__static__/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: `Cường Lý's CV`,
	description: `Cường Lý's CV`
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang='en'>
			<body className={inter.className}>{children}</body>
		</html>
	)
}

export default RootLayout
