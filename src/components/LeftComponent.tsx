import { FiPhone} from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';

const LeftComponent = () => {
    return (
        <div>
            <div className="card head border-0">
                <div className="row no-gutters">
                    <div className="col-auto">
                        <img src="cat.png" className="img-fluid" alt="" style={{ width: "120px" }} />
                    </div>
                    <div className="col">
                        <div className="card-block px-2">
                            <h4 className="card-title">Samia Azzouzi</h4>
                            <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                <div className="btn-group" role="group" aria-label="first group">
                                    <a href="#contact" className="btn btn-outline-dark"> <FiPhone /> Contact </a>
                                </div>

                                <div className="btn-group" role="group" aria-label="second group">
                                    <a href="#map" style={{ marginLeft: "20px" }} className="btn btn-outline-dark"><GoLocation/> Location</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card" style={{ width: "40rem", borderLeft: "solid #0000FF", borderTop: "0", borderRight: "0", borderBottom: "0" }}>
                <div className="card-body">
                    <h5 className="card-title">Join Rosa and make an impact</h5>
                    <div className="card-text">
                        Message from Antoine Pairet
                        In 2022, we will focus on:
                        <ol>
                            <li>Improve our existing products</li>
                            <li>Allow health professionals to attest their care</li>
                            <li>Ship our patient app</li>
                        </ol>
                        Rosa currently counts 30 young, dynamic, and smart colleagues. To deliver on these promises, we are looking for 10 new colleagues to join our product teams. We are hiring for mobile, front- and backend.<br></br>

                        JOIN US!
                    </div>
                </div>
            </div>
            <hr></hr>
            <h2>About Antoine Pairet</h2>
            <p>We founded Rosa to help people manage their health on a smartphone. To be successful, we need the support of health
                professionals. Therefore, we started to build products for them. First, a calendar, as we believe health is about relationships
                that start with an appointment. Then, a platform where patients can search, find and book.</p>
            <h2>Location and business hours</h2>


            <div className="card" style={{ width: "40rem", borderLeft: "0", borderTop: "0", borderRight: "0", borderBottom: "0" }}>
                <div className="card-body">
                    <h5 className="card-title">Mon cabinet</h5>
                    <div className="card-text">
                        Cantersteen 10, 1000 Brussels
                    </div>
                    <h5 className="card-title" id="contact">Contact details</h5>
                    <ul style={{ listStyleType: "none" }}>
                        <li><a href="samiaazzouzi19@gmail.com">samiaazzouzi19@gmail.com</a></li>
                        <li><a href="+32466387854">+32466387854</a></li>
                    </ul>
                    <h5 className="card-title">Practical Info</h5>
                    <p>Metro: Gare Centrale</p>
                </div>
            </div>
        </div>
    );
}

export default LeftComponent