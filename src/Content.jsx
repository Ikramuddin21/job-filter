import React from 'react';
import './content.css'

const Content = (props) => {
    const { company, contract, newPro, featured, languages: [topic1, topic2, topic3], level, location, position, postedAt, role, logo } = props.info;

    return (
        <div className="container">
            <div className="content-wrapper d-flex">
                <div className="content-left d-flex">
                    <h1 className="logo">Logo</h1>
                    <div>
                        <h4>{company}</h4>
                        <h3>{position}</h3>
                        <ul className="d-flex">
                            <li><a href="#">{contract}</a></li>
                            <li><a href="#">{postedAt}</a></li>
                            <li><a href="#">{location}</a></li>
                        </ul>
                    </div>
                </div>

                <ul className="content-right d-flex">
                    <li><a href="#">{role}</a></li>
                    <li><a href="#">{level}</a></li>
                    <li><a href="#">{topic1}</a></li>
                    <li><a href="#">{topic2}</a></li>
                    <li><a href="#">{topic3}</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Content;