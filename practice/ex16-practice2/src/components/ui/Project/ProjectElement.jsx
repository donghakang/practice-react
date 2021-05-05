import React from 'react';

export default function ProjectElement(props)  {
    /**
     * @props name: project name
     * @props description: project descripition
     * @props language: the language that I used for the project
     * @props date: project date.
     */
    return (
        <div className="project element">
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <span>{props.language}</span>
            <span>{props.date}</span>
        </div>
    );
}
