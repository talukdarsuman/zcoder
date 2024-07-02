
import NavBar from '../Components/Navbar';
import Dashboard from '../Components/Dashboard';
import Bar from '../Components/Bar';
import Progress from '../Components/Progress';
import Q_A from '../Components/Q_A';
export default function Home() {
  return (
    <div>
      <NavBar/>
      <Bar/>
      <Dashboard/>
      <div className="line">Saved Problems</div>
      <Progress/>
      <Q_A/>
    </div>
  )
}
