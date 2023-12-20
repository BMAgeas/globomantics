"use client"
import React from "react"

const UseStateDemo = () => {

	const [name, setName] = React.useState("")

	return (
		<div style={{ border : "1px solid black", padding : "1rem" }}>

			<b>useState() demo</b>
			<br/>
			Name: <input type="text" onChange={(e) => setName(e.target.value)} />
			<br/>
			Thy name is {name}
			
		</div>
	)

}

export default UseStateDemo