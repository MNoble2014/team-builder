import React from 'react';
import { Link } from 'react-router-dom';

// { name: "", email: "", role: "" }

const Card = (props) => {
    const { person } = props;
    return (
        <div>
            <div>{person.name}</div>
            <div>{person.email}</div>
            <div>{person.role}</div>
            <Link t0={`/edit/${person.id}`}>Edit</Link>
        </div>

    );
};

export default Card;