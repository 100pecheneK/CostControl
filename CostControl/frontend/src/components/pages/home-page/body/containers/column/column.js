import React from "react"

const Column = ({content}) => {
    return (
        <div className="column">
            <div className="ui black card">
                <div className="content">
                    {content}
                </div>
            </div>
        </div>
    )
}

export default Column