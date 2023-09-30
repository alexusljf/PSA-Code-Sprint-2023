import './About.css';
import Header from '../../components/Header/Header';

function About() {
  return (
    <div className="Home">
      <Header/>
      <div className="ButtonContainer">
            <a href="/">
                <button className="middleButton">Tuas Port</button>
            </a>
            <a href="/">
                <button className="middleButton">Tanjong Pagar</button>
            </a>
            <a href="/">
                <button className="middleButton">Keppel</button>
            </a>
            <a href="/">
                <button className="middleButton">Brani</button>
            </a>
            <a href="/">
                <button className="middleButton">Pasir Panjang</button>
            </a>
        </div>

    </div>
  );
}

export default About;
