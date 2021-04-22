import React from 'react';

const PreviousWork = (props) => {
    return (
        <div >
            {props.name}
            <br/>
            {props.description}
            <br/>
            {props.location}
            <br/>
            {props.date}
        </div>
    );
}

export default function Work() {
    return (
        <div>
            previous work go here....
            <PreviousWork 
                name={'Seoul National University Hospital'}
                description={'Image Processing'}
                location={'Seoul National University Hospital'}
                date={'2021.2 ~ currentasdfasdfasdfasdf'}
            />
            <PreviousWork 
                name={'Certified academy'}
                description={'JSP Android '}
                location={'EZEN Academy'}
                date={'2020.7 ~ 2021.2'}
            />
            <PreviousWork 
                name={'Teachers assistant '}
                description={'In Gaming'}
                location={'University of Minnesota'}
                date={'2021.2 ~ current'}
            />
            <PreviousWork 
                name={'University of Minnesota'}
                description={'In Gaming'}
                location={'University of Minnesota'}
                date={'2021.2 ~ current'}
            />
        </div>
    );
}
