const passport = require("passport");
const User = require("../Model/user.js");
module.exports.renderSignup = (req,res)=>{
    res.render("./users/signup.ejs");
}

module.exports.signup = async(req,res) => {
    try{
    let {username, email, password} = req.body;
    const newUser = new User({email,username});
    const registerUser = await User.register(newUser,password);
    req.login(registerUser,(err)=>{
        if(err){
            return next(err);
        }
    req.flash("success","Welcome to Wanderlust");
    res.redirect("/listening");
    })
    } catch(e){
        req.flash("deleted",e.message);
        res.redirect("/signup");
    }
}

module.exports.renderLogin = (req , res) =>{
    res.render("./users/login.ejs")
}

module.exports.renderLogout = (req,res)=>{
    req.logout((err)=>{
        if(err){
            return next(err);
        }
        req.flash("success","You are logged out");
        res.redirect("/listening");
    });
}

module.exports.login = (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
        if (err) {
            return next(err);
        }
        if (!user) {
            req.flash("deleted", "Invalid username or password");
            return res.redirect("/login");
        }

        req.logIn(user, (err) => {
            if (err) {
                return next(err);
            }
            req.flash("success", `Welcome back ${user.username}`);
            let redirecturl = res.locals.redirecturl || "/listening"
            return res.redirect(redirecturl);
        });
    })(req, res, next);
}