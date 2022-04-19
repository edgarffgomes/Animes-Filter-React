//useRef será utilizado para manipular os valores a serem utilizados na função de Debounce
import {useRef} from "react"
export default function useDebounce(fn, delay){
	const timeoutRef = useRef(null)

	function DebouncedFunction(...params){
		window.clearTimeout(timeoutRef.current)
		timeoutRef.current = window.setTimeout(()=> {
			fn(...params)
		}, delay)

	}
	return DebouncedFunction
}
