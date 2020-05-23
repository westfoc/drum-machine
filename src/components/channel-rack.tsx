/** @jsx jsx */
import { css, jsx, SerializedStyles } from "@emotion/core";
import InstrumentRow from "./instrument-row";
import { Instruments, SelectBeatParams } from "../redux/core";

interface ChannelRackProps {
  instruments: Instruments;
  selectBeatAction: (params: SelectBeatParams) => void;
}

const transportContainer: SerializedStyles = css`
  display: "flex";
  justify-content: "center";
  align-items: "center";
`;

const transportContainerBackground: SerializedStyles = css`
  width: 770px;
  height: 300px;
  border: 1px solid darkgrey;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 10px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: #6e6e6e;
`;

const ChannelRack = (props: ChannelRackProps): JSX.Element => {
  const renderRows = (): JSX.Element[] => {
    const { instruments, selectBeatAction } = props;

    return Object.keys(instruments).map((instrument: string, i: number) => {
      const instrumentRow = instruments[instrument];
      return (
        <InstrumentRow
          title={instrumentRow.title}
          beats={instrumentRow.beats}
          key={`${instrumentRow.title}row${i}`}
          selectBeatAction={selectBeatAction}
        />
      );
    });
  };

  return (
    <div css={transportContainer}>
      <div css={transportContainerBackground}>{renderRows()}</div>
    </div>
  );
};

export default ChannelRack;
