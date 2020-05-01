import React, { Component } from "react";
import RowItem from "./row-item";

interface InstrumentRowProps {
  title: string;
}

class InstrumentRow extends Component<InstrumentRowProps> {
  constructor(props: InstrumentRowProps) {
    super(props);
    this.state = {};
  }

  renderRow = (): JSX.Element[] => {
    const genArray: ReadonlyArray<object> = [
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
    ];

    return genArray.map((item: object, i: number) => {
      const backgroundColor: React.CSSProperties =
        i < 4 || (i > 7 && i < 12)
          ? { backgroundColor: "#473d3d" }
          : { backgroundColor: "#6b2b2b" };
      return (
        <RowItem
          style={{
            width: "30px",
            height: "40px",
            marginRight: "5px",
            marginLeft: "5px",
            ...backgroundColor,
            borderRadius: "5px",
            marginBottom: "5px",
            marginTop: "5px",
            cursor: "pointer",
          }}
          key={`${item}${i}`}
        />
      );
    });
  };

  render(): JSX.Element {
    const { title } = this.props;
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginBottom: "10px",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            height: "45px",
          }}
        >
          <div
            style={{
              minWidth: "120px",
              border: "1px solid #5c5c5c",
              height: "40px",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#473d3d",
              marginRight: "5px",
            }}
          >
            <p style={{ fontSize: "14px" }}>{title}</p>
          </div>
          {this.renderRow()}{" "}
        </div>
      </div>
    );
  }
}

export default InstrumentRow;
