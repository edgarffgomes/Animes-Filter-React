import React, {useState} from "react"
import useDebounce from "./useDebounce"
const InputSearch = ({value, onChange})=>{
	const [displayValue,setDisplayValue] = useState(value)
	const debouncedChange = useDebounce(onChange, 500)
	//setando text com o valor inserido no input a partir da função onChange
	function handleChange(e){
		setDisplayValue(e.target.value)
		debouncedChange(e.target.value)
	}

	return(
		<input type = "search" value={displayValue} onChange={handleChange}/>
		)

}
export default InputSearch