import React from 'react';
import './UrlContainer.css';

const UrlContainer = props => {
  const urlEls = props.urls.map((url, i) => {
    return (
      <div className="url-card" key={i}>
        <h3>{url.title}</h3>
        <a href={url.short_url} target="blank">{url.short_url}</a>
        <p>{url.long_url}</p>
        {/* <button onClick={(event=>this.props.deleteUrl(event))} id={url.id}>Delete URL: X</button> */}
      </div>
    )
  });

  return (
    <section>
      { urlEls.length ? urlEls : <p>No urls yet! Find some to shorten!</p> }
    </section>
  )
}

export default UrlContainer;
