import React, { Component } from 'react'


class InstrumentRow extends Component {
    constructor(props: any) {
        super(props)
        this.state = {
        }
    }

    renderRow = (): JSX.Element[] => {
        const genArray:ReadonlyArray<object> = 
            [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]

        return genArray.map( (item: object, i: number) =>  {
            const backgroundColor: React.CSSProperties = i < 4 || i > 7 && i < 12 ? { backgroundColor: "blue"} : { backgroundColor: "red"} 
            return (
                <div 
                    style={{width: "40px", height: "40px", marginRight: "5px", marginLeft: "5px", ...backgroundColor, borderRadius: "5px", marginBottom: "5px", marginTop: "5px"}} 
                    key={`${item}${i}`} 
                />
            )
            
        })
            
    }

    render(): JSX.Element {
        return (
            <div style={{display: "flex", flexDirection: "row", marginBottom: "10px"}}>
                {this.renderRow()}
            </div>
        )
    }
}

export default InstrumentRow