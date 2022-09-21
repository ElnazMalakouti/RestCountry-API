import "./style.css"
import axios from 'axios';
import {useEffect , useState } from "react"


const SearchInput = () => {


    const [countryState , setCountryState] = useState(null)

  useEffect(()=>{
    axios.get("https://restcountries.com/v3.1/all")
    .then((data) => setCountryState(data.data))
    .catch((err) => console.log(err))
  },[])


    const [searchState , setSearchState] = useState("")
    // const [filteredCountryState , setFilteredCountryState] = useState("")
    
        const searchFunction = ()=> {
            const filter = countryState.filter(item => item.name.common.toLowerCase() === searchState.toLowerCase())
            if(filter.length !== 0){
                console.log(filter)
            }
        }

    return(
        <div className="searchInput-Div">
            <input placeholder="Search Country Name..." className="searchInput" value={searchState} onChange={e => {
                setSearchState(e.target.value)
                searchFunction()
                }}/>
        </div>
    )
}

export default SearchInput