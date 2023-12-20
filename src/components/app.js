// const { default : Banner } = require("./banner")
import Banner				from "@/components/banner"
import BannerWithChildren	from "@/components/bannerWithChildren"
import HouseList			from "@/components/houseList"
import UseRefDemo			from "./useRefDemo"

const App = () => {

	const someJSX = <p>Here is a paragraph set by an interpolated JSX object</p>

	return (
		<div className="container">
			
			<Banner HeaderText="Providing houses all over the world" />
			<BannerWithChildren>Text provided via {"{"}children{"}"} object</BannerWithChildren>

			{someJSX}

			<HouseList/>

			<br/><br/>
			<UseRefDemo/>

		</div>
	)
}

export default App