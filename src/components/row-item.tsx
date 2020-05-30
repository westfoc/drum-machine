/** @jsx jsx */
import { jsx, SerializedStyles } from "@emotion/core";
import { SelectBeatParams } from "../redux/core";

interface RowItemProps {
  cssProp: SerializedStyles[];
  on: boolean;
  id: string;
  title: string;
  handleSelectBeat: (params: SelectBeatParams) => void;
}

const selectBeat = (
  params: SelectBeatParams,
  handleSelectBeat: (params: SelectBeatParams) => void
) => {
  handleSelectBeat(params);
};

const RowItem = (props: RowItemProps): JSX.Element => {
  const { cssProp, on, id, title, handleSelectBeat } = props;
  return (
    <div
      css={cssProp}
      onClick={() => selectBeat({ id, title, on }, handleSelectBeat)}
    />
  );
};

export default RowItem;
