import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';

function App() {

  const [countryState , setCountryState] = useState(null)

  useEffect(()=>{
    axios.get("https://restcountries.com/v3.1/all")
    .then((data) => setCountryState(data.data))
    .catch((err) => console.log(err))
  })


  return (
    <div className='container'>
      {
        countryState && countryState.map(country => {
          return <Cart key={country.cca3}
          CountryName={country.name.common}
          capitalName={country.capital && country.capital[0]}
          flagLink={country.flags && country.flags.svg}/>
        })
      }
    </div>
  );
}

export default App;
