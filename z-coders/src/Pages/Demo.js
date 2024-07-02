
import Navbar from '../Components/Navbar';
import Bar from '../Components/Bar';
import Dashboard from '../Components/Dashboard';
import Question_Demo from '../Components/Question_Demo';
import Q_A from '../Components/Q_A';


export default function Demo() {
  return (
    <>
        <Navbar/>
        <Bar/>
        <Dashboard/>
        <h3 style={{marginLeft:'6.4vw',marginTop:'-10px'}}>Saved Questions:</h3>
        <Question_Demo/>
        <div style={{marginTop:'50px'}}><Q_A/></div>
    </>
  )
}
