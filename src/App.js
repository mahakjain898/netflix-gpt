import { Provider } from "react-redux";
import Body from "./components/Body";
import Browse from "./components/Browse";
import appStore from "./utils/appStore";
function App() {
  return (
    <div className="text-bold font-bold">
      <Provider store={appStore}>
        <Body />
      </Provider>
    </div>
  );
}

export default App;
