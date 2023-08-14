import { useState } from "react"
import { useGlobalContext } from "../context"
const Search = () => {
    const [text, setText] = useState('')
    const {setSearchTerm, fetchRandomMeal} = useGlobalContext()
    const handleChange = (event) => {
        setText(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        if(text){
            setSearchTerm(text)
        }
    }
    const handleRandomMeal = () => {
        setSearchTerm('')
        setText('')
        fetchRandomMeal()
    }
    return <header className="search-container">
        <form on onSubmit={handleSubmit}>
            <input type="text" placeholder="type favorite meal" value={text} onChange={handleChange} className="form-input"/>
            <button type="submit" className="btn">search</button>
            <button type="button" className="btn btn-hipster" onClick={handleRandomMeal}>suprise me!</button>
        </form>
    </header>
}
export default Search