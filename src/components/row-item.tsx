/** @jsx jsx */
import { jsx, SerializedStyles } from "@emotion/core";
import { SelectBeatParams } from "../redux/core";

interface RowItemProps {
  cssProp: SerializedStyles[];
  on: boolean;
  id: string;
  title: string;
  selectBeatAction: (params: SelectBeatParams) => void;
}

const selectBeat = (
  params: SelectBeatParams,
  selectBeatAction: (params: SelectBeatParams) => void
) => {
  selectBeatAction(params);
};

const RowItem = (props: RowItemProps) => {
  const { cssProp, on, id, title, selectBeatAction } = props;
  return (
    <div
      css={cssProp}
      onClick={() => selectBeat({ id, title, on }, selectBeatAction)}
    />
  );
};

export default RowItem;
