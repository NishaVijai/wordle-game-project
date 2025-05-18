export const GameGridCell = ({
  value,
  color,
  inputRef,
  onChange,
  onKeyDown,
  disabled,
}) => (
  <input
    className={`box ${color}`}
    type="text"
    maxLength={1}
    ref={inputRef}
    value={value || ""}
    onChange={onChange}
    onKeyDown={onKeyDown}
    disabled={disabled}
  />
);
