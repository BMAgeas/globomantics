// const { default : Banner } = require("./banner")
import Banner				from "@/components/banner"
import BannerWithChildren	from "@/components/bannerWithChildren"
import HouseList			from "@/components/houseList"

const App = () => {

	const someJSX = <p>Here is a paragraph set by an interpolated JSX object</p>

	return (
		<div className="container">
			
			<Banner HeaderText="Providing houses all over the world" />
			<BannerWithChildren>Text provided via {"{"}children{"}"} object</BannerWithChildren>

			{someJSX}

			<HouseList/>

		</div>
	)
}

export default App