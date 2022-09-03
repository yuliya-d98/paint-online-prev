import Canvas from "./components/Canvas";
import SettingBar from "./components/SettingBar";
import Toolbar from "./components/Toolbar";
import "./styles/app.scss";

function App() {
  // <div className="app">
  //     <Routes>
  //       <Route path="/:id" element={
  //         <>
  //           <ToolBar />
  //           <SettingBar />
  //           <Canvas />
  //         </>
  //       } />
  //       <Route path="/*" element={<Navigate to={`f${(+new Date()).toString(16)}`} replace />} />
  //     </Routes>
  //   </div>
  return (
    <div className="app">
      <Toolbar />
      <SettingBar />
      <Canvas />
    </div>
  );
}

export default App;
