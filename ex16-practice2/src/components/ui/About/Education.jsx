import React from 'react';

const EducationElement = (props) => {
    return (
        <div>
            {props.name}
            {props.description}
            {props.location}
            {props.date}
        </div>
    );
}

export default function Education() {
    return (
        <div>
            previous work go here....
            <EducationElement 
                name={'Seoul National University Hospital'}
                description={'Image Processing'}
                location={'Seoul National University Hospital'}
                date={'2021.2 ~ current'}
            />
            <EducationElement 
                name={'Certified academy'}
                description={'JSP Android '}
                location={'EZEN Academy'}
                date={'2020.7 ~ 2021.2'}
            />
            <EducationElement 
                name={'Teachers assistant '}
                description={'In Gaming'}
                location={'University of Minnesota'}
                date={'2021.2 ~ current'}
            />
            <EducationElement 
                name={'University of Minnesota'}
                description={'In Gaming'}
                location={'University of Minnesota'}
                date={'2021.2 ~ current'}
            />
        </div>
    );
}
