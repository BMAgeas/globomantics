import {logo} from "./banner.module.css"

const Banner = () => {
	return (
		<header>
			<div>
				<img src="/GloboLogo.png" alt="Logo" className={logo} />
			</div>
			<div style={{ fontStyle : "italic" }}>
				This is the Header Text
			</div>
		</header>
	)
}

export default Banner