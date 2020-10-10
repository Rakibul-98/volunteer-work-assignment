import React from 'react';

const Event = ({event}) => {
    console.log(event)
    return (
      <div style={{marginBottom:'30px'}} className="col-md-3">
        <a href="/login">
          <img style={{height:'300px'}} src={require(`../../images/${event.img}`)} alt=""/>
        </a>
        <h4 style={{textAlign:'center'}}>{`${event.name}`}</h4>
      </div>
    );
};

export default Event;