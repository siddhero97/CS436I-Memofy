import passport from 'passport';
import {Strategy as localStrategy} from 'passport-local';
import {Strategy as jwtStrategy, ExtractJwt as extractJWT} from 'passport-jwt';
import {createUser, findUser} from '../components/users/DALs';

passport.use('signup', new localStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, async (req, email, password, done) => {
  try {
    const {firstName, lastName} = req.body;

    const user = await createUser(firstName, lastName, email, password);

    return done(null, user);
  } catch (error) {
    done(error);
  }
}));

passport.use('login', new localStrategy({
  usernameField: 'email',
  passwordField: 'password',
}, async (email, password, done) => {
  try {
    const user = await findUser(email);

    if (!user) {
      return done(null, false, {message: 'User not found'});
    }

    const validate = await user.isValidPassword(password);

    if (!validate) {
      return done(null, false, {message: 'Incorrect password'});
    }

    return done(null, user, {message: 'Logged in Successfully'});
  } catch (error) {
    return done(error);
  }
}));

passport.use(new jwtStrategy({
  secretOrKey: 'top_secret',
  jwtFromRequest: extractJWT.fromUrlQueryParameter('secret_token')
}, async (token, done) => {
  try {
    return done(null, token.user);
  } catch (error) {
    done(error);
  }
}));