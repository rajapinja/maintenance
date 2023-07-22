import { Routes, Route } from 'react-router-dom';
import Home from '../routes/Home';
import About from '../routes/About';
import Collection from '../routes/Collection';
import Expenses from '../routes/Expenses';
import Workorder from '../routes/Workorder';
import Services from '../routes/Services';
import Balance from '../routes/Balance';
import BankActivity from '../routes/BankActivity';
import BankReports from '../routes/BankReport';
import Login from '../routes/Login';
import Register from '../routes/Register';
import Download from '../routes/Download';
import Charts from '../routes/Charts';
import Error from '../routes/Error';
import Profile from '../routes/Profile';
import Reports from '../routes/Reports';
import Layout from '../components/Layout';
import RequiredAuth from '../routes/RequiredAuth';


const App = () => {
  return (
   
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='register' element={<Register></Register>}/>
          <Route path='login' element={<Login />}/>      
          <Route element={<RequiredAuth />}> 
            <Route path="services" element={<Services />} />
            <Route path='collection' element={<Collection />}/>  
            <Route path='expenses' element={<Expenses />}/>
            <Route path='workorder' element={<Workorder />}/>       
            <Route path='bankActivity' element={<BankActivity />}/> 
            <Route path='balance' element={<Balance />}/>            
            <Route path='reports' element={<Reports />}/> 
            <Route path='charts' element={<Charts />}/>  
            <Route path='bankreports' element={<BankReports />}/>
            <Route path='download' element={<Download />}/>             
            <Route path='profile' element={<Profile />}/>  
            <Route path="about" element={<About />} />
          </Route>  
          <Route path='*' element={<Error />} />
          {/* <Route path="*" element={<p>Not found!</p>} /> */}
        </Route>
      </Routes>
    
  );
};

export default App;