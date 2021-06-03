import express from 'express';
import Users from '../models/users.model.js';

const router = express.Router();

export const signUp = async (request, response) => {
	const { firstname, lastname, email, password } = request.body;
	try {
		const oldUser = await Users.findOne({ email });
		if (oldUser) {
			console.log('User Already Exists');
			response.status(400).send({ message: 'User already exists' });
		}
		const newUser = await Users.create({
			email: email,
			password: password,
			name: {
				firstName: firstname,
				lastName: lastname
			}
		});

		console.log(newUser);
		response.status(201).json({ result: newUser });
	} catch (error) {
		console.log(error);
	}
};

export default router;
