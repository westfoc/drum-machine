/** @jsx jsx */
import { css, jsx, SerializedStyles } from "@emotion/core";
import InstrumentRow from "./instrument-row";
import { Instruments, SelectBeatParams, Instrument } from "../redux/core";

interface ChannelRackProps {
  instruments: Instruments;
  selectBeatAction: (params: SelectBeatParams) => void;
  handleMuteSound: (title: string) => void;
  handleSelectBeat: (params: SelectBeatParams) => void;
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
    const {
      instruments,
      selectBeatAction,
      handleMuteSound,
      handleSelectBeat,
    } = props;

    return Object.keys(instruments).map((instrument: string, i: number) => {
      const instrumentRow: Instrument = instruments[instrument];
      return (
        <InstrumentRow
          title={instrumentRow.title}
          beats={instrumentRow.beats}
          isMuted={instrumentRow.isMuted}
          key={`${instrumentRow.title}row${i}`}
          selectBeatAction={selectBeatAction}
          handleMuteSound={handleMuteSound}
          handleSelectBeat={handleSelectBeat}
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
