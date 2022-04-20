import React from "react";
import { useRef, useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

export default function RightComponent() {

    function getDaysInMonth(year: any, month: any) {
        return new Date(year, month, 0).getDate();
    }

    const weekday = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
    let d = new Date();
    const currentYear = d.getFullYear();
    const currentMonth = d.getMonth() + 1;
    const daysInCurrentMonth = getDaysInMonth(currentYear, currentMonth);

    let current_dd = []
    let daysOfCurrentWeek = []

    let today = d.getDay()
    let daylimit = 7 - today

    for (let i = 0; i < daylimit; i++) {
        daysOfCurrentWeek.push(weekday[d.getDay() + i]);
    }

    for (let i = today; i>0 ; i--)
    {
        daysOfCurrentWeek.push(weekday[d.getDay() - i]);
    }

    for (let i = 0; i < 7; i++) {
        if ((d.getDate() + i) < daysInCurrentMonth + 1) {
            current_dd.push(d.getDate() + i)
        }
    }

    const [days, setdays] = useState(daysOfCurrentWeek);
    const [dd, setdd] = useState(current_dd);

    function nextweek() {
        let daysOfNextWeek = []
        let next_dd = []
        let today = d.getDay()

        let daylimit = 7 - today

        for (let i = 0; i < daylimit; i++) {
            daysOfNextWeek.push(weekday[d.getDay() + i]);

        }
        for (let i = today; i > 0; i--) {
            daysOfNextWeek.push(weekday[d.getDay() - i]);
        }
        let j = 1;
        for (let i = 7; i < 14; i++) {
            if (d.getDate() + i < daysInCurrentMonth + 1) { next_dd.push(d.getDate() + i) }
            else {
                next_dd.push(j)
                j++
            }
        }
        setdays(daysOfNextWeek);
        setdd(next_dd)
    }
    
    let daysOfPreviousWeek = daysOfCurrentWeek
    let previous_dd = current_dd
    function previousweek() {
        setdays(daysOfPreviousWeek);
        setdd(previous_dd)
    }
   
    return (

        <div style={{ backgroundColor: "#fff", marginTop: "04%" }} className="fixed">

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
                                <button className="direction-btn" aria-label="true" aria-hicurrent_dden="false" onClick={previousweek}>&#10094;</button>
                            </th>
                            <th  className="center">{days[0]}<br></br><span>{dd[0]}</span></th>
                            <th  className="center">{days[1]} <br></br><span>{dd[1]}</span></th>
                            <th  className="center">{days[2]} <br></br><span>{dd[2]}</span></th>
                            <th  className="center">{days[3]}<br></br><span>{dd[3]}</span></th>
                            <th  className="center">{days[4]}<br></br><span>{dd[4]}</span></th>
                            <th  className="center">{days[5]} <br></br><span>{dd[5]}</span></th>
                            <th  className="center">{days[6]}<br></br><span>{dd[6]}</span></th>
                            <th >
                                <button className="direction-btn" aria-label="true" aria-hicurrent_dden="false" onClick={nextweek}>&#10095;</button>
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
                <button type="button" className="btn btn-primary btn-lg btn-block appointment-btn">Book Appointment <FaArrowRight /></button>
            </div>

        </div>
    );
}