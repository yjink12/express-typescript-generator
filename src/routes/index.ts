import express from 'express';
import login from '../routes/users';

export default(app:express.Application) => {
    app.use('/login', login);
}