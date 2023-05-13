import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom';
import MyComponent from './Pages/Layout';
import Homefunc from './Pages/ProfileSttatics';
// import Homefunc from './Pages/Homesttatics';
import ProjectStatics from './Pages/ProjectStatics';
import TableCont from './Pages/TableCont';
import About from './Pages/Meating';
import './App.css';
import Sucessfunc from './Pages/Sucess';


function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/' element={<MyComponent></MyComponent>}>
            <Route index element={<Homefunc></Homefunc>}/>
            <Route exact path='/about' element={<About></About>}/>
            <Route exact path='/statics' element={<ProjectStatics></ProjectStatics>}></Route>
            <Route exact path='/tablecont' element={<TableCont/>}></Route>
            <Route exact path='/sucess' element={<Sucessfunc></Sucessfunc>}></Route>
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
