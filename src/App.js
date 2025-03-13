import Application from "./components/ApplicationPage/Application.js";
import NavigationBar from "./components/NavigationBar/NavigationBar.js";
import Header from "./components/Header/Header.js";
function App() {
  return (
    <div>
      <NavigationBar />

      <Header />
      <div className="content">
        <Application />
      </div>
    </div>
  );
}

export default App;
