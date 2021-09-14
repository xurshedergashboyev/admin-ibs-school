import {useEffect, useState} from "react"
import './App.css';
import Main from "./pages/Main";
import {BrowserRouter as Router, Switch,} from "react-router-dom";
import LoginPage from "./pages/LoginPage";

function App() {

    const [login, setLogin] = useState(false)

    const [check, setCheck] = useState(false)
    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token) {
            setLogin(true)
        }
        setCheck(false)
    }, [check])

    return (
        <Router>
            <Switch>
                {/*{login*/}
                    // .login === "ibs-school" && login.password === "ibs-school2021tech"
                    {/*?*/}
                    <Main/>
                    {/*// : <LoginPage setCheck={setCheck}/>}*/}
            </Switch>
        </Router>
        // <CourseInput/>
        // <div className="App">
        //   <header className="App-header">
        //     <img src={logo} className="App-logo" alt="logo" />
        //     <p>
        //       Edit <code>src/App.js</code> and save to reload.
        //     </p>
        //     <a
        //       className="App-link"
        //       href="https://reactjs.org"
        //       target="_blank"
        //       rel="noopener noreferrer"
        //     >
        //       Learn React
        //     </a>
        //   </header>
        // </div>
    );
}

export default App;
