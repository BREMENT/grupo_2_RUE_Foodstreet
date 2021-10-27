import SideBar from './SideBar';
import '../assets/css/app.css';
import ContentWrapper from './ContentWrapper';

import { Route, Switch } from 'react-router-dom';
import ContentRowTop from './ContentWrapper/ContentRowTop';
import Chart from './ContentWrapper/ContentRowTop/Chart';
import ContentRowCenter from './ContentWrapper/ContentRowTop/ContentRowCenter';
import ContentRowMovie from './ContentWrapper/ContentRowTop/ContentRowMovie';
import NotFound from './NotFound';
import SearchProduct from './ContentWrapper/ContentRowTop/SearchProduct';
import CardProduct from './ContentWrapper/ContentRowTop/CardProduct';

function App() {
  return (
    <div id="wrapper">
      <SideBar />
      {/* <ContentWrapper /> */}
      <Switch>
        <Route path="/" exact={true}>
          <ContentWrapper >
            <ContentRowTop />
          </ContentWrapper> 
        </Route>

        <Route path="/pages">
          <ContentWrapper>
            <div className="container-fluid">
              <ContentRowCenter />
            </div>
          </ContentWrapper>
        </Route>

        <Route path="/charts">
          <ContentWrapper>
            <div className="container-fluid">
              <ContentRowMovie />
            </div>
          </ContentWrapper>
        </Route>

        <Route path="/tables">
          <ContentWrapper>
            <div className="container-fluid">
              <Chart />
            </div>
          </ContentWrapper>
        </Route>

        <Route path="/search">
          <ContentWrapper>
            <div className="container-fluid">
              <SearchProduct />
            </div>
          </ContentWrapper>
        </Route>

        <Route path="/product/:id">
          <ContentWrapper>
            <div className="container-fluid">
              <CardProduct />
            </div>
          </ContentWrapper>
        </Route>

        <Route path="*/:id">
          <NotFound />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
