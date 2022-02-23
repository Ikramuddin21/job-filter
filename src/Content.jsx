import React from 'react';
import './content.css'

const Content = (props) => {
    console.log(props);
    const { company, contract, newPro, featured, languages: [topic1, topic2, topic3], level, location, position, postedAt, role, logo } = props.info;

    return (
        <div className="container">
            <div className="content-wrapper d-flex">
                <div className="content-left d-flex">
                    <img className="logo" src={logo} alt={company} />
                    <div>
                        <h4>{company}</h4>
                        <h3>{position}</h3>
                        <ul className="d-flex">
                            <li>{contract}</li>
                            &#183;<li>{postedAt}</li>
                            &#183;<li>{location}</li>
                        </ul>
                    </div>
                </div>

                <ul className="content-right d-flex">
                    <li>{role}</li>
                    <li>{level}</li>
                    <li>{topic1}</li>
                    <li>{topic2}</li>
                    <li>{topic3}</li>
                </ul>
            </div>
        </div>
    );
}

export default Content;