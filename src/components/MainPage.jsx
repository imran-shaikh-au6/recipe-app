import React, { Component } from "react";
import { connect } from "react-redux";
import Ingre from "./Ingerdients";
import axios from "axios";
import Spinner from "./Spinner";
class MainPage extends Component {
    state = {
        data: null,
    };
    async componentDidMount() {
        const response = await axios.get(
            `https://forkify-api.herokuapp.com/api/get?rId=${this.props.history.location.state}`
        );
        console.log(response.data);
        this.setState({ data: response.data.recipe });
    }
    render() {
        console.log(this.state.data);

        return (
            <div>
                {this.state.data !== null ? (
                    <Ingre
                        inget={this.state.data.ingredients}
                        data={this.state.data}
                    />
                ) : (
                    <Spinner />
                )}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return { recipe: state.secondPageReducer.prd };
};
export default connect(mapStateToProps)(MainPage);
