import { useState } from "react";
import { useNavigate } from "react-router-dom";
import S from "../Search/S.module.css";
const Search = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const Searchitems = () => {
    navigate('/items/search?keyword=' + keyword)
  }
  return (
    <div className={S.search}>
      <div className="col-12 col-md-6 mt-2 mt-md-0" >
      <div className="input-group">
        <input
          type="text"
          id="search_field"
          onChange={(e) => setKeyword(e.target.value)}
          onBlur={Searchitems}
          className="form-control"
          placeholder="Enter Product Name ..."
        />
        <div className="input-group-append">
          <button onClick={Searchitems} id="search_btn" className="btn" style={{ color: "white",margin:"0",backgroundColor:"#333",border:"1px solid white" }}>
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
    </div>
  );

}
export default Search;