import "./checkbox.scss";

const App: React.FC<{ text: string }> = ({ text }) => {
  return (
    <li id="checkbox-li">
      <input type="checkbox" />
      {text}
    </li>
  );
};

export default App;
