import React from "react";


export default function RightComponent() {
    return (
        
        <div style={{ backgroundColor: "#fff" }} className="fixed">
            <h2>Find availability</h2>

            <form>
                <label className="container-label ">Is this your first appointment with this practitioner?</label>
                <div className="container" style={{ marginBottom: "10px" }} >
                    <div className="row ">
                        <div className="col-sm radio-btn">
                            <div className="vertical-center">
                                <input type="radio" id="yes-button" name="yes-no" value="true" />
                                <label> Yes </label>
                            </div>
                        </div>

                        <div className="col-sm radio-btn">
                            <div className="vertical-center">
                                <input type="radio" id="no-button" name="yes-no" value="false" />
                                <label> No </label>
                            </div>
                        </div>
                    </div>
                </div>
                <label className="container-label" >What is the reason for your visit?</label>
                <div style={{ marginLeft: "10px", marginRight: "10px", marginBottom: "10px" }}>
                    <select className="form-select" name="raison" id="raison-select">
                        <option value="Business">Business Meeting</option>
                        <option value="Cultural">Cultural fit</option>
                        <option value="introduction">introduction call</option>
                    </select>
                </div>

                <table className="table">
                    <thead>
                        <tr>
                            <th >
                                <button className="direction-btn" aria-label="true" aria-hidden="false">&#10094;</button>
                            </th>
                            <th className="center">Mo <br></br><span>1</span></th>
                            <th className="center">Tu <br></br><span>2</span></th>
                            <th className="center">We <br></br><span>3</span></th>
                            <th className="center">Th <br></br><span>4</span></th>
                            <th className="center">Fr <br></br><span>5</span></th>
                            <th className="center">Sa <br></br><span>6</span></th>
                            <th className="center">Su <br></br><span>7</span></th>
                            <th >
                                <button className="direction-btn" aria-label="true" aria-hidden="false">&#10095;</button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td  >
                                <div className="availability-scheduling__cell ">
                                    <span >08:00 </span>
                                </div>
                            </td>
                            <td  >
                                <div className="availability-scheduling__cell ">
                                    <span>11:00 </span>
                                </div>
                            </td>
                            <td  >
                                <div className="availability-scheduling__cell ">
                                    <span>09:00 </span>
                                </div>
                            </td>
                            <td  >
                                <div className="availability-scheduling__cell ">
                                    <span >11:00 </span>
                                </div>
                            </td>
                            <td  >
                                <div className="availability-scheduling__cell ">
                                    <span>14:00 </span>
                                </div>
                            </td>
                            <td  >
                                <div className="availability-scheduling__cell ">
                                    <span>09:00 </span>
                                </div>
                            </td>
                            <td  >
                                <div className="availability-scheduling__cell ">
                                    <span>08:00 </span>
                                </div>
                            </td>

                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <div className="availability-scheduling__cell ">
                                    <span>08:00 </span>
                                </div>
                            </td>
                            <td>
                                <div className="availability-scheduling__cell ">
                                    <span>08:00 </span>


                                </div>
                            </td>
                            <td>
                                <div className="availability-scheduling__cell ">
                                    <span>08:00 </span>
                                </div>
                            </td>
                            <td>
                                <div className="availability-scheduling__cell ">
                                    <span>08:00 </span>
                                </div>
                            </td>
                            <td>
                                <div className="availability-scheduling__cell ">
                                    <span>08:00 </span>
                                </div>
                            </td>
                            <td>
                                <div className="availability-scheduling__cell ">
                                    <span>08:00 </span>
                                </div>
                            </td>
                            <td>
                                <div className="availability-scheduling__cell ">
                                    <span>08:00 </span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <div className="availability-scheduling__cell ">
                                    <span>08:00 </span>
                                </div>
                            </td>
                            <td>
                                <div className="availability-scheduling__cell ">
                                    <span>08:00 </span>
                                </div>
                            </td>
                            <td>
                                <div className="availability-scheduling__cell ">
                                    <span>08:00 </span>
                                </div>
                            </td>
                            <td>
                                <div className="availability-scheduling__cell ">
                                    <span>08:00 </span>
                                </div>
                            </td>
                            <td>
                                <div className="availability-scheduling__cell ">
                                    <span>08:00 </span>
                                </div>
                            </td>
                            <td>
                                <div className="availability-scheduling__cell ">
                                    <span>08:00 </span>
                                </div>
                            </td>
                            <td>
                                <div className="availability-scheduling__cell ">
                                    <span>08:00 </span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <div className="availability-scheduling__cell ">
                                    <span>08:00 </span>
                                </div>
                            </td>
                            <td>
                                <div className="availability-scheduling__cell ">
                                    <span>08:00 </span>
                                </div>
                            </td>
                            <td>
                                <div className="availability-scheduling__cell">
                                    <span>08:00 </span>
                                </div>
                            </td>
                            <td>
                                <div className="availability-scheduling__cell ">
                                    <span>08:00 </span>
                                </div>
                            </td>
                            <td>
                                <div className="availability-scheduling__cell ">
                                    <span>08:00 </span>
                                </div>
                            </td>
                            <td>
                                <div className="availability-scheduling__cell ">
                                    <span>08:00 </span>
                                </div>
                            </td>
                            <td>
                                <div className="availability-scheduling__cell ">
                                    <span>08:00 </span>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>               
            </form>
            <div className="col text-center">
                <button type="button" className="btn btn-primary btn-lg btn-block appointment-btn">Book Appointment</button>
            </div>
        </div>
    );
}