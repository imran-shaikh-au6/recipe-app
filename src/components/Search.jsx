import React from "react";
import img from "../img/WBC_7095.jpg"
const Search = (props) => {
    
    return (
        <div className="">
            <div className="back">
                <img className="imgs" src={img} />
                <div className="gt">
                    <form
                        onSubmit={props.valueget}
                        style={{ paddingTop: "65px" }}
                        class="form-inline   my-lg-2"
                    >
                        <input
                            class="form-control mr-sm-2"
                            style={{ width: "400px" }}
                            type="search"
                            placeholder="Search Your Recipe"
                            aria-label="Search"
                            name="search"
                        />
                        <button
                            class="btn btn-warning my-2 my-sm-0"
                            type="submit"
                        >
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Search;
