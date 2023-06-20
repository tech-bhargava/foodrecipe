import React, { useState } from 'react';
import Items from './Items';

const Header = () => {
  const [a, b] = useState('');
  const [data, setData] = useState([]);
  const YOUR_APP_ID = 'fe01796e';
  const YOUR_APP_KEY = '410f80d9621d9b994c1bf98ddd31e8af';

  const submitHandler = (e) => {
    e.preventDefault();
    fetch(
      `https://api.edamam.com/search?q=${a}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=12&calories=591-722&health=alcohol-free`
    )
      .then((response) => response.json())
      .then((data) => setData(data.hits));
  };
  return (
    <div>
      <h1 className='heading'>Food Recipe App</h1>
      <form onSubmit={submitHandler}>
        <input
          type='text'
          value={a}
          placeholder='Search your food'
          onChange={(e) => b(e.target.value)}
        />
        <br />
        <input type='submit' value='Search' />
      </form>
      {data.length >= 1 ? <Items data={data} /> : null}
    </div>
  );
};

export default Header;
