import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Create } from "./pages/Create";
import { Notes } from "./pages/Notes";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Notes} />
        <Route exact path="/create" component={Create} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
