import {BrowserRouter, Route, Switch} from "react-router-dom";
import MainMenu from "./MainMenu";
import RenderProps from "./design-patters/RenderProps";
import "./styles/global.css";
import TesterFactoryPatters from "./design-patters/Factory/Tester";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={MainMenu}/>
                <Route exact path="/render-props" component={RenderProps}/>
                <Route exact path="/factory" component={TesterFactoryPatters}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
