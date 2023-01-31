import React, { useEffect, useState } from 'react';
import SurveyDetailsChild from './SurveyDetailsChild';

const SurveyDetails = () => {
    const [surveyList, setSurveyList] = useState([{ 'sector': '', 'id': '' }])
    console.log(surveyList)
    useEffect(() => {
        fetch(`http://localhost:8800/employee`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(rsp => {
                console.log(rsp)
                return rsp.json()
            })
            .then(data => setSurveyList(data));
    }, [])
    return (
        <div id='services'>
            <h3 className='text-center mb-4'>Survey List</h3>
            <div id='services' className='container'>
                <div className='row'>
                    <div className='services-container'>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Number</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Sector</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    surveyList.map((survey,index) => <SurveyDetailsChild
                                        key={surveyList._id}
                                        survey={survey}
                                        index={index}
                                    ></SurveyDetailsChild>)
                                }
                                </tbody>
                                </table>
                        </div>
                    </div>

                </div>
            </div>
            );
};

            export default SurveyDetails;