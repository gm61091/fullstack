
const LocalStrategy = require('passport-local').Strategy;

const bcrypt = require('bcryptjs');
// const { Passport } = require('passport/lib');
const db = require('../models');

const init = (passport) => {

    passport.use(new LocalStrategy({usernameField: 'email'}, async (email, password, done)=>{

        try {

            let records = await db.users.findAll({where: {email:email}})

            if(records){

                let record = records[0];
                bcrypt.compare(password, record.password, (err, match)=>{

                    if(match){
                        console.log('matches!!');
                        return done(null, record)

                    }
                    else{
                        console.log('NO matches!!');
                        return done(null, false)

                    }
                })

            }
            else{
                return done(null, false)
            }
            
        } catch (error) {
            console.log(error);
            return done(error)
        }

    }))

    passport.serializeUser((user, done)=>{

        done(null, user.id)
    })

    passport.deserializeUser(async (id, done)=>{

        let foundUserInDBFromSessionData = await db.users.findByPk(id);

        if(foundUserInDBFromSessionData){
            done(null, foundUserInDBFromSessionData)
        }
        else{
            done(null, false)
        }
    })


}


module.exports = init;