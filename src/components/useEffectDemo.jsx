"use client"
import React from "react"

const UseEffectDemo = () => {

	const fetchTime = async () => {
		const response	= await fetch("/api/time")
		const text		= await response.text()
		return text
	}

	const [time, setTime] = React.useState("(Not set)")

	/*
		Load data from /api/time.
		Only to be run on the initial render (hence the empty dependancies' array).
	*/
	React.useEffect(
		() => { fetchTime().then(setTime).catch(window.alert) },
		[]
	)

	return (
		<div style={{ border : "1px solid black", padding : "1rem" }}>

			<b>useEffect() demo</b>
			<br/>
			The time is: {time}.
			
		</div>
	)

}

export default UseEffectDemo