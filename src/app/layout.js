import App from "@/components/app"

export const metadata = {
	title			: "Globomantics",
	description		: "BM Testing"
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" />
			</head>
			<body>
				<App/>
			</body>
		</html>
	)
}