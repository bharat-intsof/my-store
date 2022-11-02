import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

function Getdata() {
    const [record, setrecord] = useState([]);
    useEffect(() => {
        axios.get("https://localhost:44332/api/Bharat_City1")
            .then((response) => {
                setrecord(response.data)
            });
    }, [])

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>State</th>
                        <th>City</th>
                        <th>CityID</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        record.map((b, index) => (
                            <tr key="index">
                                <td>{b.StateId1}</td>
                                <td>{b.CityName1}</td>
                                <td>{b.CityId1}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Getdata;