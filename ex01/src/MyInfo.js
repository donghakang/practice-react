import React from "react";

function MyInfo() {
    const firstName = "Dongha";
    const lastName = "KANG";
    const date = new Date();

    const styles = {
        color: "#ff8c00",
        backgroundColor: "#666666",
        fontSize: "30px"
    };

    return (
        <div>
            <h1>{firstName + "  " + lastName}</h1>
            <h2>{`${firstName}  ${lastName}`}</h2>
            <h4 style={styles}>It's {date.getHours()}'o clock</h4>
            <ul>
                <li>Los Angeles</li>
                <li>Jeju Island</li>
                <li>Hong Kong</li>
            </ul>
        </div>
    );
}

export default MyInfo;
