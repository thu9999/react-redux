import express from 'express';
import validator  from 'validator';
import * as _ from 'lodash';

const router = express.Router();

const validateInput = (params) => {

    const { username, email, password, confirmPassword } = params;

    let errors = {};

    if(_.isEmpty(username)) {
        errors.username = 'This field is required';
    }
    
    /**
     * Check email is valid
     */
    if(!validator.isEmail(email)) {
        errors.email = 'Email is invalid';
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

    return {
        errors,
        isValid: _.isEmpty(errors)
    }
}

/**
 * Sign up
 */
router.post('/signup', (req, res) => {
    const params = req.body;

    const { errors, isValid } = validateInput(params);

    let json = JSON.stringify({
        data: isValid,
        err: errors
    });

    if(!isValid) {
        res.status(400).json({errors});
    }

    res.status(200).end(json);
});

export default router;