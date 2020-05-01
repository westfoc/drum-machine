import React from "react";

interface RowItemProps {
  style: React.CSSProperties;
  id: string;
}

function selectBeat(id: string) {
  console.log(id); // tslint:disable-line
}

function RowItem(props: RowItemProps) {
  const { style, id } = props;
  return <div style={style} onClick={() => selectBeat(id)} />;
}

export default RowItem;
