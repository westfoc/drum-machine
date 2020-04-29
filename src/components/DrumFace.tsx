import React, { Component } from 'react'

class DrumFace extends Component {
    constructor(props: any) {
        super(props)
        this.state = {
            numOfRows: [
                {"instrument": ""}
            ]
        }
    }

    render() {
        return (
            <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <div style={{width: "700px", height: "400px", border: "1px solid blue"}}> 
                    
                </div>
            </div>
        )
        
    }
}

export default DrumFace