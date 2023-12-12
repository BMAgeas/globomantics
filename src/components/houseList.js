import React, {useState}	from "react"
import HouseRow				from "@/components/houseRow"

const houseArray = [
	{
		id		: 1,
		address	: "12 Valley of Kings, Geneva",
		country	: "Switzerland",
		price	: 900000
	},
	{
		id: 2,
		address: "89 Road of Forks, Bern",
		country: "Switzerland",
		price: 500000
	}
]

const HouseList = () => {

	/*
		Understanding:
			- calling useState(houseArray) causes houses to equal houseArray, and setHouses() to be a function
			  which takes in an argument which becomes the new value of houses.
			- This is in accordance with the pattern of IMMUTABILITY; hence houses is const
			- The SPREAD OPERATOR inside addHouse() means that houses is set to its PREVIOUS values, PLUS the new house
	*/

	const [houses, setHouses] = useState(houseArray);

	const addHouse = () => {
		setHouses(
			[
				...houses,
				{
					id		: 3,
					address	: `${Math.random() * 100} Valley Way, New York`,
					country	: "USA",
					price	: 1000000
				}
			]
		)
	}

	return (
		<>
			<div className="row mb-2">
				<h5 className="themeFontColor text-center">
					Houses currently on the market
				</h5>
			</div>
			<table className="table table-hover">
				<thead>
					<tr>
						<th>Address</th>
						<th>Country</th>
						<th>Asking Price</th>
					</tr>
				</thead>
				<tbody>
					{houses.map(h => <HouseRow key={h.id} house={h} />)}
				</tbody>
			</table>
			<button className="btn btn-primary" onClick={addHouse}>Add</button>
		</>
	)

}

export default HouseList