import React from "react"
const InputSearch = ({value, onChange})=>{
	//setando text com o valor inserido no input a partir da função onChange
	function handleChange(e){
		onChange(e.target.value)
	}

	return(
		<input type = "search" value={value} onChange={handleChange}/>
		)

}
export default InputSearch