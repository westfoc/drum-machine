import React from "react";
import { SelectBeatParams } from "../redux/core";

interface RowItemProps {
  style: React.CSSProperties;
  on: boolean;
  id: string;
  title: string;
  selectBeatAction: (params: SelectBeatParams) => void;
}

function selectBeat(
  params: SelectBeatParams,
  selectBeatAction: (params: SelectBeatParams) => void
) {
  selectBeatAction(params);
}

function RowItem(props: RowItemProps) {
  const { style, on, id, title, selectBeatAction } = props;
  return (
    <div
      style={style}
      onClick={() => selectBeat({ id, title, on }, selectBeatAction)}
    />
  );
}

export default RowItem;
