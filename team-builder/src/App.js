import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';

function App() {
	const [list, setList] = useState([
		{
			id: 0,
			name: 'ewa czech',
			email: 'ewa.czech@hotmail.com',
			role: 'student'
		}
	]);

	const addNewMember = member => {
		const newMember = member;
		setList([...list, newMember]);
	};

	const [memberToEdit, setMemberToEdit] = useState({});

	return (
		<div className="App">
			<Form
				addNewMember={addNewMember}
				memberToEdit={memberToEdit}
				list={list}
				setList={setList}
			/>
			<ul className="list">
				{list.map((el, index) => {
					return (
						<li key={index}>
							<p>
								<span>Name:</span> {el.name}
							</p>
							<p>
								<span>Email:</span> {el.email}
							</p>
							<p>
								<span>Role:</span> {el.role}
							</p>
							<button onClick={() => setMemberToEdit(el)}>Edit</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default App;
