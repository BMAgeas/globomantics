import React	from "react"
import {logo}	from "./banner.module.css"

const headerTextStyle = { fontWeight : "bold", fontSize : "x-large", color : "coral" }

const Banner = ({ HeaderText }) => {
	return (
		<React.Fragment>
			<header className="row my-4 border">
				<div className="col-5">
					<img src="/GloboLogo.png" alt="Logo" className={logo} />
				</div>
				<div className="col-7 mt-5" style={headerTextStyle}>
					{HeaderText}
				</div>
			</header>
		</React.Fragment>
	)
}

export default Banner