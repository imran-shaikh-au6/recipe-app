import React, { Component } from "react";
import { connect } from "react-redux";
import { secondProduct } from "../redux/actions/actionSecondState";
import MainPage from "./MainPage";
class ProductPage extends Component {
    state = {
        secondData2: [],
        loaded: null,
        id: null,
    };
    // componentDidUpdate(pp, ss) {

    //     // if (this.state.loaded) {
    //     //     // if (this.props.secondData.length !== pp.secondData.length) {
    //     //     //     this.setState({ loaded: this.props.secondData });
    //     //     // }
    //     //  this.setState({loaded:this.props.secondData})
    //     // }

    // }

    // componentDidUpdate(pp) {
    //     // console.log(this.pp)
    //     // console.log(this.props.mainPrd)
    //     // if (this.props.mainPrd !== pp.mainPrd) {
    //     //     console.log(this.props.mainPrd);
    //     // }

    //     console.log(pp);
    //     console.log(this.props.secondData)
    //     if(this.props.secondData.length===1){
    //         this.setState({
    //             secondData2: this.props.mainPrd.secondPageReducer.prd,
    //         });
    //     }
    //     // if (this.props.secondData.length>0) {
    //     //     this.setState({
    //     //         secondData2: pp.p,
    //     //     });
    //     // }
    //     // this.setState({
    //     //     secondData2: pp.p,
    //     // });
    // }
    getId = (e) => {
        const SearchId = e.target.id;
        this.setState({ id: SearchId });
        this.props.secondProduct(SearchId);
    };

    render() {
        // if (this.props.secondData.length === 1) {
        //     return this.state.loaded !== null ? (
        //         <MainPage data={this.state.loaded[0].publisher} />
        //     ) : null   ;
        // }
        return (
            <div>
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    {" "}
                    <div className="col-md-3 m-2">
                        <div className="card " style={{ width: "18rem" }}>
                            <img
                                style={{ height: "220px", width: "280px" }}
                                src={this.props.p.image_url}
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title">
                                    {this.props.p.title}
                                </h5>
                                <a href={this.props.p.source_url}>
                                    Click Here for Source Recipe
                                </a>
                                <a
                                    onClick={this.props.getId}
                                    id={this.props.p.recipe_id}
                                    className="btn btn-primary"
                                >
                                    Full Recipe
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-2"></div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        mainPrd: state,
        secondData: state.secondPageReducer.prd,
    };
};

export default connect(mapStateToProps)(ProductPage);
