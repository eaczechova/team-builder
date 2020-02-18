import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';

function App() {
	const [newTeamMember, setNewTeamMember] = useState({
		name: '',
		email: '',
		role: ''
	});

	const handleChanges = event => {
		setNewTeamMember({
			...newTeamMember,
			[event.target.name]: event.target.value
		});
	};

	const [list, setList] = useState([
		{ name: 'ewa czech', email: 'ewa.czech@hotmail.com', role: 'student' }
	]);

	const addNewMember = member => {
		const newMember = member;
		setList([...list, newMember]);
	};

	const submitForm = event => {
		event.preventDefault();
		addNewMember(newTeamMember);
		setNewTeamMember({ name: '', email: '', role: '' });
	};

	return (
		<div className="App">
			<Form addNewMember={addNewMember} />
			<ul className="list">
				{list.map(el => {
					return (
						<li>
							<p>
								<span>Name:</span> {el.name}
							</p>
							<p>
								<span>Email:</span> {el.email}
							</p>
							<p>
								<span>Role:</span> {el.role}
							</p>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default App;
