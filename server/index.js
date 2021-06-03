import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import postRoutes from './routes/posts.js';
import userRoutes from './routes/user.js';

const app = express();

//Intermediate Middleware
app.use(cors());
app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));

app.use('/posts', postRoutes);
app.use('/user', userRoutes);

const MONGOOSE_URI =
	'mongodb+srv://project-oiiu:project-oiiu123@cluster0.9pgge.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const connectionParamsDB = {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true
};

mongoose
	.connect(MONGOOSE_URI, connectionParamsDB)
	.then(() => {
		console.log('Connected to Mongoose Database!');
	})
	.catch((error) => {
		// console.log(error);
		console.log('Database Connection Failed');
	});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Server listening on PORT: ${PORT}`);
});
