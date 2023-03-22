import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import Success from './components/Success';
import Users from './components/Users';

function App() {
	const [users, setUsers] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [searchValue, setSearchValue] = useState('')
	const [invites, setInvites] = useState([])
	const [success, setSuccess] = useState(false)

	useEffect(() => {
		fetch('https://reqres.in/api/users')
		.then((res) => res.json())
		.then((json) => setUsers(json.data))
		.catch((error) => console.log(error.message))
		.finally(() => setIsLoading(false))
	}, [])

	const onChangeSearchValue = (event) => {
		setSearchValue(event.target.value)
		console.log(event.target.value)
	}

	const onClickInvite = (id) => {
		if (invites.includes(id)) {
			setInvites(prev => prev.filter(_id => _id !== id))
		} else {
			setInvites(prev => [...prev, id])
		}
	}

	const onClickSendInvites = () => {
		setSuccess(true)
	}

  return (
    <div className="App">
			{
				success
				? <Success count={invites.length}/>
				: <Users
					users={users} 
					isLoading={isLoading} 
					searchValue={searchValue} 
					onChangeSearchValue={onChangeSearchValue} 
					invites={invites} 
					onClickInvite={onClickInvite}
					onClickSendInvites={onClickSendInvites} 
				/>
			}
    </div>
  );
}

export default App;
