import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import Success from './components/Success';
import Users from './components/Users';

function App() {
	const [items, setItems] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [searchValue, setSearchValue] = useState('')

	useEffect(() => {
		fetch('https://reqres.in/api/users')
		.then((res) => res.json())
		.then((json) => setItems(json.data))
		.catch((error) => console.log(error.message))
		.finally(() => setIsLoading(false))
	}, [])

	const onChangeSearchValue = (event) => {
		setSearchValue(event.target.value)
		console.log(event.target.value)
	}

  return (
    <div className="App">
      <Users
				items={items} 
				isLoading={isLoading} 
				searchValue={searchValue} 
				onChangeSearchValue={onChangeSearchValue} />
      {/* <Success /> */}
    </div>
  );
}

export default App;
