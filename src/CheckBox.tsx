import { Checkbox, FormControlLabel } from "@mui/material";
import { useIsChecked } from "./use-is-checked.hook";

const App: React.FC<{ text: string }> = ({ text }) => {
  const { isChecked, handleCheck } = useIsChecked();
  return (
    <li id="checkbox-li">
      <FormControlLabel
        onClick={handleCheck}
        checked={isChecked}
        label={text}
        control={<Checkbox />}
      />
    </li>
  );
};

export default App;
