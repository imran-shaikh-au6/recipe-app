import React, { Component } from 'react'
import "./Ingerdients.css"
export class Ingerdients extends Component {
    render() {
        console.log(this.props.history)
        console.log(this.props.inget);
        const Mylist = this.props.inget
        const listItem = Mylist.map((mylist)=><li>{mylist}</li>)
        return (
            <div>
                <h1>Recipe Title: {this.props.data.title}</h1>
                <div className="main">
                    <img src={this.props.data.image_url} />
                    <div className="text">
                        <h3>Recipe Ingerdients</h3>
                        <ul>{listItem}</ul>
                    </div>
                </div>

                <a href={this.props.data.publisher_url}>Publisher URL</a>
                <h3>Recipe Id: {this.props.data.recipe_id}</h3>
                <a href={this.props.data.source_url}>Source URl</a>
            </div>
        );
    }
}

export default Ingerdients
