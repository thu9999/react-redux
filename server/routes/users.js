import express from 'express';
import validator  from 'validator';
import * as _ from 'lodash';
import User from '../db/users.model';
import bscrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const users = express.Router();

/**
 * Check exist
 */
const checkExist = async (key, value) => {
    const query = { [key]: _.trim(value) };
    const result = await User.find(query);
    if(result.length) {
        return true;
    }
    return false;
}

/**
 * Sign up
 */
users.post('/signup', async (req, res) => {
    const params = req.body;

    const { username, email, password, confirmPassword } = params;

    let errors = {};
    let isValid;

    if(_.isEmpty(username)) {
        errors.username = 'This field is required';
    }

    // Check username exists
    try {
        const checkUsernameExisted = await checkExist('username', username);
        if(checkUsernameExisted) {
            errors.username = 'Username has been existed';
        }
    } catch (err) {
        return res.status(500).json({error: 'Something went wrong'});
    }

    /**
     * Check email is valid
     */
    if(!validator.isEmail(email)) {
        errors.email = 'Email is invalid';
    }

    // Check email is exist
    try {
        const checkEmailExisted = await checkExist('email', email);
        if(checkEmailExisted) {
            errors.email = 'Email has been existed';
        }
    } catch (err) {
        return res.status(500).json({error: 'Something went wrong'});
    }

    if(_.isEmpty(email)) {
        errors.email = 'This field is required';
    }

    if(_.isEmpty(password)) {
        errors.password = 'This field is required';
    }

    if(_.isEmpty(confirmPassword)) {
        errors.confirmPassword = 'This field is required';
    }

    /**
     * Check passords match
     */
    if(!_.isEqual(password, confirmPassword)) {
        errors.confirmPassword = 'Passwords do not match';
    }

    isValid = _.isEmpty(errors);

    if(!isValid) {
        return res.status(400).json({errors});
    }

    // Hash the password
    const salt = await bscrypt.genSalt(10);
    const hashPassword = await bscrypt.hash(password, salt);

    if(isValid) {
        const userModel = new User({
            username: _.trim(username),
            email: _.trim(email),
            password: hashPassword
        });

        userModel.save()
            .then(() => {
                return res.status(200).json({
                    success: true
                });
            })
            .catch(error => {
                return res.status(500).json({error});
            });
    }
});

/**
 * Login
 */
users.post('/login', async (req, res) => {
    const { username, password } = req.body;

    // Check username
    const checkUsername = await User.findOne({ username });
    if(!checkUsername) {
        return res.status(400).json({
            error: 'Credential is invalid'
        })
    }

    // Check password
    const { password: hashPassword } = checkUsername;
    bscrypt.compare(password, hashPassword, (err, result) => {
        if(err) {
            return res.status(500).json({
                error: 'Something went wrong'
            }) 
        }

        if(result) {
            // Password is correct
            // Create and assign a token
            const token = jwt.sign(
                {_id: checkUsername._id},
                process.env.TOKEN_SECRET
            );
            res.header('token', token);

            return res.status(200).json({
                success: true,
                token
            })
        } else {
            // Password is incorrect
            return res.status(400).json({
                error: 'Credential is invalid'
            })
        }
    })

});

/**
 * Refresh token
 */
users.post('/refresh', async (req, res) => {
    res.status(200).send('Refresh successfully')
})

export default users;