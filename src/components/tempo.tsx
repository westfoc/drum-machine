/** @jsx jsx */
import { useState, ChangeEvent, MouseEvent, useRef } from "react";
import { css, jsx, SerializedStyles } from "@emotion/core";

interface TempoProps {
  setTempo: (bpm: number) => void;
}

const tempoInput: SerializedStyles = css`
  box-sizing: border-box;
  height: 55px;
  width: 75px;
  padding: 7px 0;
  outline: none;
  font-size: 20px;
  appearance: none;
  display: flex;
  text-align: right;
  cursor: row-resize;
`;

const Tempo = (props: TempoProps) => {
  const { setTempo } = props;
  const [bpm, setBpm] = useState<string>("120");
  const timeout = useRef<number | undefined>();
  const interval = useRef<number | undefined>();

  const modifyBpm = (operation: (num: number) => number): void => {
    const val = (document.getElementById("tempo-input") as HTMLInputElement)
      .value;
    const valToNumber: number = parseInt(val, 10);
    const modifiedNumber: number = modifyNumber(valToNumber, operation);

    if (valToNumber >= 10 && valToNumber <= 500) {
      setBpm(String(modifiedNumber));
      setTempo(Number(modifiedNumber));
    }
  };

  const modifyNumber = (
    numVal: number,
    operation: (num: number) => number
  ): number => {
    return (numVal === 10 && operation.toString().includes("+")) ||
      (numVal === 500 && operation.toString().includes("-")) ||
      (numVal > 10 && numVal < 500)
      ? operation(numVal)
      : numVal;
  };

  const increment = (num: number): number => {
    return num + 1;
  };

  const decrement = (num: number): number => {
    return num - 1;
  };

  const handleBpm = (e: ChangeEvent<HTMLInputElement>): void => {
    setBpm(e.target.value);
    setTempo(Number(e.target.value));
  };

  const setTimers = (
    modify: (operation: (num: number) => number) => void,
    operation: (num: number) => number
  ): void => {
    timeout.current = window.setTimeout(() => {
      interval.current = window.setInterval(() => {
        modify(operation);
      }, 60);
    }, 300);
  };

  const mouseDownBpm = (e: MouseEvent<HTMLInputElement>) => {
    if (e.nativeEvent.offsetY >= -2 && e.nativeEvent.offsetY <= 19) {
      setTimers(modifyBpm, increment);
    } else {
      setTimers(modifyBpm, decrement);
    }
  };

  const clearTimers = (): void => {
    window.clearTimeout(timeout.current);
    window.clearInterval(interval.current);
  };
  return (
    <input
      id="tempo-input"
      css={tempoInput}
      onChange={(e) => handleBpm(e)}
      onMouseDown={(e) => mouseDownBpm(e)}
      onMouseUp={() => clearTimers()}
      onMouseLeave={() => clearTimers()}
      type="number"
      min={10}
      max={500}
      value={bpm}
      readOnly={true}
    />
  );
};

export default Tempo;
