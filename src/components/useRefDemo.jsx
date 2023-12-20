"use client"
import React from "react"

/*
	useRef() does NOT invokes render() whereas useState() does.
	useRef() can hold either a pointer to a component, OR simply any arbitry datum.
*/

const UseRefDemo = () => {

	const inputBoxRef = React.useRef()

	return (
		<div style={{ border : "1px solid black" }}>

			<button onClick={() => inputBoxRef.current.focus()}>focus() the input-box</button>
			<br/>
			<input ref={inputBoxRef} type="text" />
			
		</div>
	)

}

export default UseRefDemo