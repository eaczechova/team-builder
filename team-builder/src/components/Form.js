import React, { useState } from 'react';
import '../App.css';

function Form(props) {
	const [newTeamMember, setNewTeamMember] = useState({
		name: '',
		email: '',
		role: ''
	});

	const handleChanges = event => {
		setNewTeamMember({
			...newTeamMember,
			[event.target.name]: event.target.value.toLowerCase()
		});
	};
	const submitForm = event => {
		event.preventDefault();
		props.addNewMember(newTeamMember);
		setNewTeamMember({ name: '', email: '', role: '' });
	};
	return (
		<div>
			<h1>New Team Member Form</h1>
			<form className="form" onSubmit={submitForm}>
				<label htmlFor="name">What's your first & last name?</label>
				<input
					type="text"
					placeholder="Full Name"
					id="name"
					value={newTeamMember.name}
					onChange={handleChanges}
					name="name"
				/>
				<label htmlFor="email">What's your e-mail?</label>
				<input
					type="email"
					placeholder="Email"
					id="email"
					value={newTeamMember.email}
					onChange={handleChanges}
					name="email"
				/>
				<label htmlFor="role">What's your role?</label>
				<input
					type="text"
					placeholder="Role"
					id="role"
					value={newTeamMember.role}
					onChange={handleChanges}
					name="role"
				/>
				<button type="submit">Add</button>
			</form>
		</div>
	);
}
export default Form;
