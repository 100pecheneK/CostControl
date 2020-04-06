import React from "react"
import './body.css'
import {Route, Switch} from "react-router-dom"
import Cost from "./cost"
import Report from "./report"

const BodyContainer = ({component}) => {
    return (
        <div className="ui container middle aligned center aligned grid">
            <div className="ui stackable two column grid">
                {component}
            </div>
        </div>
    )
}


// const Body = () => {
//     return (
//         <div className="ui container middle aligned center aligned grid">
//             <div className="ui stackable two column grid">
//                 <Switch>
//                     <Route exact path='/' component={Cost}/>
//                     <Route exact path='/report' component={Report}/>
//                 </Switch>
//             </div>
//         </div>
//     )
// }

export default BodyContainer