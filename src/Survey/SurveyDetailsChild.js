import React from 'react';

const SurveyDetailsChild = ({survey,index}) => {
    const {name,sector,email}=survey;
    return (
        <tr>
            <th scope="row">{index+1}</th>
            <td>{name}</td>
            <td>{sector}</td>
            <td>{email}</td>
        </tr>
    );
};

export default SurveyDetailsChild;