import React from 'react';
import './JobList.css';

const JobList = (props) => {

    const {
        logo, company, newPro, featured, position, postedAt,
        contract, location, role, level, languages, tools
    } = props.job;

    const { handleFeatures } = props;

    const features = () => {
        let items = [role, level];

        if (Array.isArray(languages) && languages.length > 0) {
            items.push(...languages);
        }

        if (Array.isArray(tools) && tools.length > 0) {
            items.push(...tools);
        }
        return items;
    };

    return (
        <div className="container d-flex">
            <div className="jobList-left d-flex">
                <img src={logo} className="logo" alt={company} />
                <div>
                    <div className="d-flex">
                        <h4>{company}</h4>
                        {newPro && <span className="newBtn">New</span>}
                        {featured && <span className="featuredBtn">Featured</span>}
                    </div>
                    <h3>{position}</h3>
                    <ul className="d-flex">
                        <li>{postedAt}</li>
                        <li><span className="entity-code">&middot;</span> {contract}</li>
                        <li><span className="entity-code">&middot;</span> {location}</li>
                    </ul>
                </div>
            </div>

            <ul className="jobList-right d-flex">
                {
                    features().map((feature, index) => <li
                        key={index}
                        onClick={() => handleFeatures(feature)}
                    >{feature}</li>)
                }
            </ul>

        </div>
    );
};

export default JobList;