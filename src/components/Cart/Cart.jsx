import "./Cart.css"

const Cart = ({flagLink,CountryName,capitalName}) =>{
    return(
            <div className="countryCard">
                <div className="flagDiv">
                    <img className="countryFlagImage" src={flagLink} alt={CountryName}/>
                </div>

                <div className="infoDiv">
                    <p className="countryNameTag">{CountryName}</p>
                    <p className="capitalNameTag">{capitalName}</p>
                </div>
            </div>
    )
}

export default Cart