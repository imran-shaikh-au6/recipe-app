import React, { Component } from "react";
import Search from "./Search";
import { connect } from "react-redux";
import { firstProduct } from "../redux/actions/actionState";
import { secondProduct } from "../redux/actions/actionSecondState";
import "./serchbox.css";
import MainPage from "./MainPage";
import ProductPage from "./ProductPage";
import axios from "axios";
import { Redirect, withRouter } from "react-router-dom";
import Spinner from "./Spinner";
class Navbar extends Component {
    state = {
        id: null,
        search: null,
        first: null,
        loading: false,
    };
    getSearchValue = async (e) => {
        e.preventDefault();
        this.setState({ loading: true });
        console.log(e.target.search.value);
        const searchValue = e.target.search.value;
        const response = await axios.get(
            `https://forkify-api.herokuapp.com/api/search?q=${searchValue}`
        );
        console.log(response.data.recipes);
        if (response.data.recipes) {
            this.setState({ loading: false });
        }
        this.setState({ first: response.data.recipes });

        // this.setState({ search: e.target.search.value });
        // this.props.firstProduct(searchValue);
    };

    idHandler = async (id) => {
        console.log(id);
        this.setState({ id: id });
        this.props.history.push({ pathname: "/recipe", state: id });
    };

    render() {
        console.log(this.state.id);
        console.log(this.props.all);
        if (this.props.all.secondPageReducer.prd.length > 0) {
            return <Redirect to="/recipe" />;
        }
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-warning">
                    <a className="navbar-brand" href="#/">
                        Search Recipe
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse right"
                        id="navbarSupportedContent"
                    ></div>
                </nav>
                <div className="searchBox">
                    <Search valueget={this.getSearchValue} />
                </div>
                <div className="row">
                    {this.state.first === null ? (
                        this.state.loading ? (
                            <Spinner />
                        ) : null
                    ) : (
                        this.state.first.map((p, index) => (
                            <div className="row">
                                <ProductPage
                                    getId={() => this.idHandler(p.recipe_id)}
                                    key={index}
                                    p={p}
                                />
                            </div>
                        ))
                    )}
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        recipe: state.recipeReduecr.product[0],
        all: state,
    };
};

export default connect(mapStateToProps, { firstProduct, secondProduct })(
    withRouter(Navbar)
);
