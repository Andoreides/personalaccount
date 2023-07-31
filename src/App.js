import './App.css';
import MainFrame from "./components/main/MainFrame";
import {Route, Routes} from "react-router-dom";
import Step1 from "./components/Step1/Step1";
import Step2 from "./components/Step2/Step2";
import Step3 from "./components/Step3/Step3";

function App() {
    return (
        <div className="App">
            <div className={'project'}>
                <Routes>
                    <Route path="/step2" element={<Step2/>}/>
                    <Route path="/create" element={<Step1/>}/>
                    <Route path="/" element={<MainFrame/>}/>
                    <Route path='/step3' element={<Step3/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
