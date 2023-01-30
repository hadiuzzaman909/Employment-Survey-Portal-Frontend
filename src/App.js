import './App.css';
import Navbar from './Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Login from './Authentication/Login/Login';
import Register from './Authentication/Register/Register';
import RequireAuth from './Authentication/RequireAuth/RequireAuth';
import SurveyForm from './Survey/SurveyForm';
import Home from './Home/Home';
import EditSurvey from './Survey/EditSurvey';


function App() {
  return (
    <div>
       <Navbar></Navbar>
       
       <Routes>
       <Route path="/" element={<Home ></Home>}></Route>
       <Route path='/survey-form' element={
        <RequireAuth>
        <SurveyForm></SurveyForm>
        </RequireAuth>
        }></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/register' element={<Register></Register>}></Route>
       <Route path='/survey-edit-form/:_id' element={<EditSurvey></EditSurvey>}></Route>
       </Routes>

    </div>
  );
}

export default App;
