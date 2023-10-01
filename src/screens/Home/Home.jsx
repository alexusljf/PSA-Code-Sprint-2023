import './Home.css';
import Header from '../../components/Header/Header';
import tuasPortImg from './tuas_port.jpg';
import braniPortImg from './Brani-Terminal.png';
import jurongIslandImg from './JIT-1-scaled-e1664871532639.jpg';
import pasirPangjangImg from './Pasir-Panjang-Terminals.png';
import keppelImg from './Keppel-Terminal.png';

function Home() {
  return (
    <div className="Home">
      <Header />
      <div className="HomeText">
        <h1>AI Resource Allocation Manager</h1>
        <p>Click the cards below to view the allocation of resources like cranes and handling equipment at a container port.</p>
      </div>
      <div className="ButtonContainer">
        <div className="portCard">
          <img src={tuasPortImg} alt="Tuas Port" className="portImage" />
          <h3 className="portName">Tuas Port</h3>
          <a href="/#/port/tuas" className="portCardLink">
            <button className="portButton">View Port</button>
          </a>
        </div>
        <div className="portCard">
          <img src={jurongIslandImg} alt="Jurong Island Terminal" className="portImage" />
          <h3 className="portName">Jurong Island Terminal</h3>
          <a href="/#/port/jurongisland" className="portCardLink">
            <button className="portButton">View Port</button>
          </a>
        </div>
        <div className="portCard">
          <img src={keppelImg} alt="Keppel Port" className="portImage" />
          <h3 className="portName">Keppel Port</h3>
          <a href="/#/port/keppel" className="portCardLink">
            <button className="portButton">View Port</button>
          </a>
        </div>
        <div className="portCard">
          <img src={braniPortImg} alt="Brani Port" className="portImage" />
          <h3 className="portName">Brani Port</h3>
          <a href="/#/port/brani" className="portCardLink">
            <button className="portButton">View Port</button>
          </a>
        </div>
        <div className="portCard">
          <img src={pasirPangjangImg} alt="Pasir Panjang Port" className="portImage" />
          <h3 className="portName">Pasir Panjang Port</h3>
          <a href="/#/port/pasirpanjang" className="portCardLink">
            <button className="portButton">View Port</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
