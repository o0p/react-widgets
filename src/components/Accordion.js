import React from 'react';

const Accordion = ({ items }) => {
  const renderItems = items.map((item) => {
    return (
      <div>
        <div className="title actibe">
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className="content active">
          <p>{item.content}</p>
        </div>
      </div>
    );
  });
  return <h1>{items.length}</h1>;
};

export default Accordion;
