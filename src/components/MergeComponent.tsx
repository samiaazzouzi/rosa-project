import LeftComponent from './LeftComponent';
import MapComponent from './MapComponent';
import RightComponent from './RightComponent';


export default function MergeComponent() {
      
      return (
    <div>
      <header className="App-header">
        <div className="navbar">
          <a href="" className="text-decoration-none" style={{color: "#E4A598", fontSize: "2.5em"}}>ROSA</a>  
            <select id="select1">
              <option value="free">EN</option>
              <option value="basic">NL</option>
              <option value="premium">FR</option>
            </select>
        </div>
      </header>

      <div className="container">

        <div className="row">
          <div className="col">
            <LeftComponent />
            <MapComponent />
          </div>
          <div className="col">
            <RightComponent />
          </div>
        </div>
      </div>
    </div>
)
}

