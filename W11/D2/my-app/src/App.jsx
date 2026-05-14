import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import { NestedRoutes } from "./components/p1"
import { DynamicParamsUseParams } from "./components/p2"
import { MultipleDynamicParams } from "./components/p3"
import { OptionalParameters } from "./components/p4"
import { NestedDynamicRoutes } from "./components/p5"
function DashBoardHome(){
  return(
    <div>
    <h2>DashBoard home</h2>
    <p>Deafult Dashboard Page</p>
    </div>
  )
}
function DashBoardProfile(){
  return(
    <div>
    <h2>DashBoard Profile</h2>
    <p>Deafult Dashboard Profile</p>
    </div>
  )
}
function DashBoardsettings(){
  return(
    <div>
    <h2>DashBoard settings</h2>
    <p>Deafult Dashboard settings</p>
    </div>
  )
}

function Home() {
  return(
    <div>
      <h1>React Router Concepts</h1>
      <ul>
        <li>NestedRoutes</li>
        <li>DynamicParamsUseParams</li>
        <li>MultipleDynamicParams</li>
        <li>OptionalParameters</li>
        <li>NestedDynamicRoutes</li>
      </ul>
      <nav style={styles.nav}>
        <Link to="/dashboard">
          Nested Routes
        </Link>
        <Link to="/products/101">
          Dynamic Params
        </Link>
        <Link to="/users/101/orders/5001">
          Multiple Params
        </Link>
        <Link to="/profile">
          Optional Params
        </Link>
        <Link to="/profile/rhaashee">
          Optional Params with Value 
        </Link>
        <Link to="/courses/reactJS">
          Nested Dynamic Routes
        </Link>
      </nav>
    </div>
  );
}

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element = {<Home />}
        />
        <Route
        path="/dashboard"
        element={<NestedRoutes/>}
        >
          {/* Index Route */}
        <Route 
          path="/dashboard"
          element={<DashBoardHome />}
        />
        <Route 
        path ="profile"
        element={<DashBoardProfile/>}

        />
        <Route
        path="setting"
        element={<DashBoardProfile/>}
        />
        </Route>
        {/* Dynamic Params */}
        <Route
        path="Products/:id"
        element={<DynamicParamsUseParams/>}
          />

           <Route
        path="/users/:userId/orders/:orderId"
        element={<DynamicParamsUseParams/>}
          />

           <Route
        path="/profile"
        element={<OptionalParameters/>}
          />
          
           <Route
        path="/courses/:courseId"
        element={<NestedDynamicRoutes/>}
          />
          
           <Route
        path="/profile/:username"
        element={<OptionalParameters/>}
          />
      </Routes>
    </BrowserRouter>
      {/* <NestedRoutes />
      <DynamicParamsUseParams />
      <MultipleDynamicParams />
      <OptionalParameters />
      <NestedDynamicRoutes /> */}
    </>
  )
}
const styles ={
  nav:{
    display:"flex",
    flexWrap:"wrap",
    gap:"10px",
    margintop:"20px"
  }
};
export default App