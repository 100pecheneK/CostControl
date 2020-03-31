import React from 'react';
import {VictoryPie} from 'victory';

// const data = [
//     {category: "Cats", money: 100},
//     {category: "Dogs", money: 40},
//     {category: "Birds", money: 55},
//     {category: "Birds", money: 55},
//     {category: "Birds", money: 55},
//     {category: "Birds", money: 55},
//     {category: "Birds", money: 55},
// ]

const Diagram = ({data}) => {
    return (
        <VictoryPie data={data}
                    x='category'
                    y='total_cost'/>
    )

}
export default Diagram