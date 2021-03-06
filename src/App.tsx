import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";

import { Create } from "./pages/Create";
import { Notes } from "./pages/Notes";
import { Layout } from "./components/Layout";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#fefefe",
    },
    secondary: purple,
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Notes} />
            <Route exact path="/create" component={Create} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
