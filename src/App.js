import React, { useState, useEffect } from 'react';
import './App.css';
import Content from './Content';
import jobLists from './data.json';

const App = () => {

  const [listings, setListings] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setListings(jobLists);
    }, 1000);
  }, []);

  const handleTag = tag => {

    console.log('tag', tag);

    if (tags.includes(tag)) {
      return true;
    }

    setTags([...tags, tag]);
  };

  const filteredJobs = listings.filter(({ level, role, languages, tools }) => {

    const tagItems = [level, role, ...languages, ...tools];

    console.log("tagItems", tagItems);

    if (tags.length === 0) {
      return true;
    }

    console.log('inside condition', tagItems.some(tag => tags.includes(tag)));

    return tagItems.some(tag => tags.includes(tag));
  });

  console.log('tags', tags);

  console.log('filteredJobs', filteredJobs);

  const handleRemoveTag = removeTag => {
    const remainingTags = tags.filter(tag => tag !== removeTag);

    console.log('Remove Tag', remainingTags);

    setTags(remainingTags);
  };

  return (
    <div className="app">
      <header className="header"></header>

      {/* remove tag & all tag */}
      {tags.length > 0 && (
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              {
                tags.length > 0 && tags.map((tag, index) =>
                  <span
                    key={index}
                    onClick={() => handleRemoveTag(tag)}
                  >{tag}</span>)
              }
            </div>
            <button onClick={() => setTags([])}>Clear</button>
          </div>
        </div>
      )}

      {/* content */}
      <div className="content">
        {listings.length === 0 ? <h3 style={{textAlign: 'center'}}>Loading...</h3> : filteredJobs.map(job => <Content
          key={job.id}
          job={job}
          handleTag={handleTag}
        />)}
      </div>
    </div>
  );
}

export default App;
