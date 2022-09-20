import { useState } from "react"
import "./style.css"

const SearchInput = () => {

    const [searchState , setSearchState] = useState("")

    return(
        <div className="searchInput-Div">
            {/* <label>Search Country Name:</label> */}
            <input className="searchInput" value={searchState} onChange={e => setSearchState(e.target.value)}/>
            {console.log(searchState)}
        </div>
    )
}

export default SearchInput