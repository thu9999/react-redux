/**
 * Google strategy
 */
import User from './../db/users.model';
import GoogleStrategy from 'passport-google-oauth20';
import passport from 'passport';

const GOOGLE_CLIENT_ID = '115046605446-m6rl5ifetknv911a3fr75oiavhj4ekgd.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = 'gLZngnEmdVk8NwZzOyNFAFNc';

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
})

const googleStrategyConfig = new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: '/api/users/google/redirect'
}, (accessToken, refreshToken, profile, done) => {

    /**
     * Passport callback function
     * Check if user with google account has been existed
     * If yes, find that user and return callback
     * Otherwise, create a new user with that google account and return callback
     * */

    User.findOne({
        googleId: profile.id
    }, (err, user) => {
        if(!user) {
            // Create and store new google account
            const UserModel = new User({
                name: profile.displayName,
                googleId: profile.id,
                avatar: profile._json.picture
            });

            UserModel.save()
                .then((newUser) => {
                    return done(err, newUser);
                })
                .catch(error => {
                    return done(error, null);
                })
        } else {
            // Google account has been existed
            return done(err, user);
        }
    })
});

export default googleStrategyConfig;