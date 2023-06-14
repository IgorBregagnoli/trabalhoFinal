const passport = require("passport");
const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const {Usuario} = require("../models");

const options = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: "trabalhoFinal",
};

passport.use(
    new JWTStrategy(options, async (jwtPayload, done) => {
        try {
            const usuario = await Usuario.findByPk(jwtPayload.id);
            if(usuario){
                return done(null, usuario);
            } else {
                return done(null, false);
            }
        } catch (error) {
            return done(error, false)
        }
    })
);

module.exports = passport;