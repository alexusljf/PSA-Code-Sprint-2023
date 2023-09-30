import './Home.css';
import Header from '../../components/Header/Header';
import PSAlogo from './psa-international-vector-logo-removebg-preview.png';

function Home() {
  return (
    <div className="Home">
      <Header/>
      <div className = "HomeText">
        <img src = {PSAlogo} alt = "PSA Logo Transparent" className='PSALogo'/>
        <br/>Click the cards below to view the allocation of resources like cranes and handling equipment at a container port.
      </div>
      <div className="ButtonContainer">
            <a href="/port/tuas">
                <button className="middleButton">Tuas Port</button>
            </a>
            <a href="/port/tanjongpagar">
                <button className="middleButton">Tanjong Pagar</button>
            </a>
            <a href="/port/keppel">
                <button className="middleButton">Keppel</button>
            </a>
            <a href="/port/brani">
                <button className="middleButton">Brani</button>
            </a>
            <a href="/port/pasirpanjang">
                <button className="middleButton">Pasir Panjang</button>
            </a>
        </div>

    </div>
  );
}

export default Home;
