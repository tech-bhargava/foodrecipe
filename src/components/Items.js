import React from 'react';

const Items = ({ data }) => {
  return (
    <div>
      <div className='items_container'>
        {data.map((data) => (
          <div className='card'>
            <img className='image' src={data.recipe.image} alt='img' />
            <h3 className='title'>{data.recipe.label}</h3>
            <p>Total calories : {Math.round(data.recipe.calories)}</p>
            <button>Buy</button>
          </div>
        ))}
        ;
      </div>
      <footer>
        <hr />
        <p>
          Edemam<sup>TM</sup> &copy; 2022
        </p>
      </footer>
    </div>
  );
};

export default Items;
