import "./App.css";
import Home from "./Component/Home/Home";
import PagesTest from "./Component/PagesTest/PagesTest";
import { Route } from "react-router-dom";
import DownloadPage from "./Component/DownloadPage/DownloadPage";
import IconApp from "./Component/IconApp/IconApp";
import { CSSTransition } from "react-transition-group";

function App() {
  return (
    <div className="appContainer">
      <IconApp />
      <Route exact path="/">
        {({ match }) => (
          <CSSTransition
            timeout={1000}
            classNames="page"
            unmountOnExit
            in={match != null}
          ><div className='page'><Home/></div></CSSTransition>
        )}
      </Route>
      <Route path="/home">
        {({ match }) => (
          <CSSTransition
            timeout={1000}
            classNames="page"
            unmountOnExit
            in={match != null}
          ><div className='page'><Home/></div></CSSTransition>
        )}
      </Route>
      <Route path="/question">
        {({ match }) => (
          <CSSTransition
            timeout={1000}
            classNames="page"
            unmountOnExit
            in={match != null}
          ><div className='page'><PagesTest/></div></CSSTransition>
        )}
      </Route>
      <Route path="/downloadpage">
        {({ match }) => (
          <CSSTransition
            timeout={1000}
            classNames="page"
            unmountOnExit
            in={match != null}
          ><div className='page'><DownloadPage/></div></CSSTransition>
        )}
      </Route>
    </div>
  );
}

export default App;
