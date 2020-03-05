import React from 'react';
import Home from './Home';
import PropTypes from 'prop-types';


function HomeList(props){
  return (
    <div>
      {props.homeList.map((home) =>
        <Home 
          name={home.name}
          image={home.image}
          id={home.id}
          key={home.id}/>
      )}
    </div>
  );
}

HomeList.propTypes = {
  homeList: PropTypes.array
};

export default HomeList;