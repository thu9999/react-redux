import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    if(token === 'null' || token === 'undefined') {
        return res.status(401).json({
            error: 'Access denied!'
        })
    }

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        if(verified) {
            req.verified = true;
            next();
        } else {
            res.status(401).send('Token is expired');  
        }
    } catch (err) {
        res.status(400).send('Invalid Token');
    }
}

export default auth;