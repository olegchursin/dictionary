import React from 'react';

const Footer = () => {
  return (
    <div className="ui inverted vertical footer segment">
    <div className="ui center aligned container">
      <div className="ui stackable inverted divided grid">
        <div className="three wide column">
          <h4 className="ui inverted header">Lexeme Analisys</h4>
          <div className="ui inverted link list">
            <a href="" className="item">Dictionary</a>
            <a href="" className="item">Thesaurus</a>
            <a href="" className="item">Translation</a>
            <a href="" className="item">Semantic field</a>
          </div>
        </div>
        <div className="three wide column">
          <h4 className="ui inverted header">Text Analysis</h4>
          <div className="ui inverted link list">
            <a href="" className="item">Link One</a>
            <a href="" className="item">Link Two</a>
            <a href="" className="item">Link Three</a>
            <a href="" className="item">Link Four</a>
          </div>
        </div>
        <div className="three wide column">
          <h4 className="ui inverted header">Group 3</h4>
          <div className="ui inverted link list">
            <a href="" className="item">Link One</a>
            <a href="" className="item">Link Two</a>
            <a href="" className="item">Link Three</a>
            <a href="" className="item">Link Four</a>
          </div>
        </div>
        <div className="seven wide column">
          <h4 className="ui inverted header">Footer Header</h4>
          <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
        </div>
      </div>
      <div className="ui inverted section divider"></div>
      <img src="../img/logo-wh.png" alt="logo" className="ui centered mini image" />
      <div className="ui horizontal inverted small divided link list">
        <a className="item" href="">Site Map</a>
        <a className="item" href="">Contact Us</a>
        <a className="item" href="">Terms and Conditions</a>
        <a className="item" href="">Privacy Policy</a>
      </div>
    </div>
  </div>
  )
}

export default Footer;
