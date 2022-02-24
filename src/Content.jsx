import React from 'react';
import './content.css'

const Content = (props) => {
    const {
        company, contract, newPro,
        featured, languages, level,
        location, position, postedAt,
        role, tools, logo
    } = props.job;

    const {handleTag} = props;

    const tags = () => {
        let tagItems = [role, level];

        if (Array.isArray(languages) && languages.length > 0) {
            tagItems.push(...languages);
        }

        if (Array.isArray(tools) && tools.length > 0) {
            tagItems.push(...tools);
        }
        return tagItems;
    };

    return (
        <div className="container">
            <div className="content-wrapper d-flex-align-center">
                <div className="content-left d-flex-align-center">
                    <img className="logo" src={logo} alt={company} />
                    <div>
                        <div className="d-flex-align-center">
                            <h4>{company}</h4>
                            { newPro && <span className="content-left-btn new-btn">New</span> }
                            { featured && <span className="content-left-btn featured-btn">Featured</span> }
                        </div>
                        <h3>{position}</h3>
                        <ul className="d-flex-align-center">
                            <li>{contract}</li>
                            &#183;<li>{postedAt}</li>
                            &#183;<li>{location}</li>
                        </ul>
                    </div>
                </div>

                <ul className="content-right d-flex-align-center">
                    {
                        Array.isArray(tags()) && tags().length > 0 &&
                        tags().map((tag, index) => <li 
                        key={index}
                        onClick={() => handleTag(tag)}
                        >{tag}</li>)
                    }
                </ul>
            </div>
        </div>
    );
}

export default Content;