import React from 'react'
import { connect} from "react-redux"
const Practice = (props) => {
    const a = ()=>{

    }
    console.log(props.prs)
    return (
        <div>
            <h1>Hello</h1>
            
            
        </div>
    )
}
const MapStateToProps  = (state)=>{
    return{
        prs:state
    }
}
export default connect(MapStateToProps) (Practice)
