import React, { useState, useEffect } from 'react';
import '../App.css';

function Form(props) {
	const [newTeamMember, setNewTeamMember] = useState({
		id: '',
		name: '',
		email: '',
		role: ''
	});

	const handleChanges = event => {
		newTeamMember.id = props.list.length;
		setNewTeamMember({
			...newTeamMember,
			[event.target.name]: event.target.value.toLowerCase()
		});
	};
	const submitForm = event => {
		event.preventDefault();
		if (props.memberToEdit.name !== undefined) {
			var tempList = props.list.map(element =>
				element.id == newTeamMember.id ? { ...element, ...newTeamMember } : element
			);
			props.setList(tempList);
		} else {
			newTeamMember.id = props.list.length;
			props.addNewMember(newTeamMember);
		}

		setNewTeamMember({ id: '', name: '', email: '', role: '' });
	};

	useEffect(() => {
		setNewTeamMember(props.memberToEdit);
	}, [props.memberToEdit]);

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
