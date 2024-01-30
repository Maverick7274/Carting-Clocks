import express from 'express';
import { createUser, getUserByMail } from 'Models/userModels';
import { random, authentication } from '../helpers';


export const register = async(req: express.Request, res: express.Response) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ msg: 'Please enter all fields' });
        }
        const existingUser = await getUserByMail(email);

        if (existingUser) {
            return res.sendStatus(400);
        }

        const salt = random();
        const user = await createUser({
            email,
            name,
            authentication: {
                salt,
                password: authentication(salt, password),
            },
        })

        return res.status(201).json(user).end();
    } catch (error) {
        console.error(error.message);
        return res.sendStatus(400);
    }
}
