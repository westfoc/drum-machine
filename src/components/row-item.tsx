import React from "react";

interface RowItemProps {
  style: React.CSSProperties;
}

function RowItem(props: RowItemProps) {
  const { style } = props;
  return <div style={style} />;
}

export default RowItem;
