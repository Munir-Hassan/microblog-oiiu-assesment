import express from 'express';
import Users from '../models/users.model.js';

const router = express.Router();

export const signUp = async (request, response) => {
	const { firstname, lastname, email, password } = request.body;

	// I would hash the password into some unreadable text and save that to database.
	// and then decrypt it upon retreiving and check if it matches with user password input
	console.log('signUp Hit!');
	try {
		const userExists = await Users.findOne({ email });
		if (userExists) {
			console.log('User Already Exists');
			response.status(400).json({ message: 'User already exists' });
		}
		const newUser = await Users.create({
			email: email,
			password: password,
			name: {
				firstname: firstname,
				lastname: lastname
			}
		});

		console.log(newUser);
		response.status(201).json({ result: newUser });
	} catch (error) {
		console.log(error);
		response.status(500).json({ message: 'signUp: Something Went Wrong!' });
	}
};

export const signIn = async (request, response) => {
	const { email, password } = request.body;
	console.log('signIn Hit!');

	try {
		const userExits = await Users.findOne({ email });

		if (!userExits) {
			response.status(404).send({ message: "User Doesn't Exit" });
		}

		response.status(201).json({ result: userExits });
	} catch (error) {
		console.log(error);
		response.status(500).json({ message: 'signIn: Something Went Wrong!' });
	}
};

export default router;
