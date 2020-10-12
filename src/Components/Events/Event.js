import React from 'react';
import { Link } from 'react-router-dom';

const Event = ({event}) => {



    return (
      <div style={{marginBottom:'30px'}} className="col-md-3">
        <Link to="/registration">
          <img style={{height:'300px'}} src={require(`../../images/${event.img}`)} alt=""/>
        </Link>
        <h4 style={{textAlign:'center'}}>{`${event.name}`}</h4>
      </div>
    );
};

export default Event;