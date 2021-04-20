import React from 'react';

const PreviousWork = (props) => {
    return (
        <div>
            {props.name}
            {props.description}
            {props.location}
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
                date={'2021.2 ~ current'}
            />
        </div>
    );
}
