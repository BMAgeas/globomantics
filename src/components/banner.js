import {logo} from "./banner.module.css"

const headerTextStyle = { fontWeight : "bold", fontSize : "x-large", color : "coral" }

const Banner = () => {
	return (
		<header className="row mb-4">
			<div className="col-5">
				<img src="/GloboLogo.png" alt="Logo" className={logo} />
			</div>
			<div className="col-7 mt-5" style={headerTextStyle}>
				This is the Header Text
			</div>
		</header>
	)
}

export default Banner