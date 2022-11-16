import "./inputSearch.css"
import searchImage from "../../images/search-normal.png"
const SearchInput = () => {
    return <>
        <div className="search-block">
            <input type="text" placeholder={"Search"}/>
            <img src={searchImage} alt={searchImage}/>
        </div>
    </>
}
export default SearchInput;