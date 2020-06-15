"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importStar(require("express"));
const validator_1 = __importDefault(require("validator"));
const _ = __importStar(require("lodash"));
const router = express.Router();
const validateInput = (params) => {
    const { username, email, password, confirmPassword } = params;
    let errors = {};
    if (_.isEmpty(username)) {
        errors.username = 'This field is required';
    }
    /**
     * Check email is valid
     */
    if (!validator_1.default.isEmail(email)) {
        errors.email = 'Email is invalid';
    }
    if (_.isEmpty(email)) {
        errors.email = 'This field is required';
    }
    if (_.isEmpty(password)) {
        errors.password = 'This field is required';
    }
    if (_.isEmpty(confirmPassword)) {
        errors.confirmPassword = 'This field is required';
    }
    /**
     * Check passords match
     */
    if (!_.isEqual(password, confirmPassword)) {
        errors.confirmPassword = 'Passwords do not match';
    }
    return {
        errors,
        isValid: _.isEmpty(errors)
    };
};
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
    if (!isValid) {
        res.status(400).json({ errors });
    }
    res.status(200).end(json);
});
exports.default = router;
//# sourceMappingURL=users.js.map