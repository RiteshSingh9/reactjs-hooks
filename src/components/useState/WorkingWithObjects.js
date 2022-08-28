// useState with objects
import React, { useState } from "react";

function WorkingWithObjects() {
    const [name, setName] = useState({ firstName: "", lastName: "" });

    return (
        <div>
            <input
                type="text"
                value={name.firstName}
                onChange={(e) =>
                    setName({ ...name, firstName: e.target.value })
                }
            />
            <br />
            <input
                type="text"
                value={name.lastName}
                onChange={(e) => setName({ ...name, lastName: e.target.value })}
            />
            <h2>First Name : {name.firstName}</h2>
            <h2>Last Name : {name.lastName}</h2>
        </div>
        // ...name - copy the previous value and overwrite the chaged value
        // without ...name it will not work oproperlly.
    );
}

export default WorkingWithObjects;
