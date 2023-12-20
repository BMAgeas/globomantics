// Alternative way: const HouseRow = ({ house : {address, country, price} }) => {

const HouseRow = ({ address, country, price }) => {
	return (
		<tr>
			<td>{address}</td>
			<td>{country}</td>
			<td>{price}</td>
		</tr>
	)
}

export default HouseRow