import './About.css';
import Header from '../../components/Header/Header';

function About() {
  return (
    <div className="About">
      <Header/>
      <div className = "AboutText">
        <h1>Why an AI Resource Allocation Manager?</h1>
            <p>
            Demand-supply management within the container port ecosystem is crucial for its efficiency. <br/>
            <br/> Firstly, forecasting demand is essential, considering factors like shipping schedules, trade fluctuations, and seasonal variations. 
            <br/>Secondly, managing the supply of available berths and terminal facilities is vital to handle incoming vessels and cargo. 
            <br/>Thirdly, optimizing the allocation of resources, such as cranes and handling equipment, ensures smooth operations.<br/>
            <br/>Effective demand-supply management helps reduce congestion, minimize vessel waiting times, maximize asset utilization and enhance the overall throughput of the port. Striking the right balance between supply and demand is pivotal in maintaining the productivity and competitiveness of container ports. <br/>
            <br/> Therefore, we created this web app to visualise the allocation of resources in the various ports around Singapore, and have an AI System to re-allocate resources efficiently.
            </p>
      </div>

    </div>
  );
}

export default About;
