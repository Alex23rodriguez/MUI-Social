import { Feed } from "./components/Feed";
import { Rightbar } from "./components/Rightbar";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Feed />
      <Rightbar />
    </div>
  );
}

export default App;
