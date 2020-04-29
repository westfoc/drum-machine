import React, { Component } from 'react'
import InstrumentRow from './instrument-row'

interface DrumFaceProps {}

interface DrumFaceState {
    numOfRows: ReadonlyArray<object>
}

class DrumFace extends Component<DrumFaceProps, DrumFaceState> {
    constructor(props: DrumFaceProps) {
        super(props)
        this.state = {
            numOfRows: [ {}, {}, {}, {}]
        }
    }

    render() {
        const { numOfRows } = this.state

        return (
            <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <div style={{width: "700px", height: "300px", border: "1px solid blue", display: "flex", flexDirection: "column", justifyContent: "center", paddingTop: "10px"}}> 
                    {numOfRows.map((item: object, i: number) => <InstrumentRow key={`${item}row${i}`}/>)}
                </div>
            </div>
        )
        
    }
}

export default DrumFace