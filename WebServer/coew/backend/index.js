import express from 'express';
import boddParser from 'body-parser';
import expressSession from 'express-session';
import cors from 'cors';
import passport from 'passport';

const app = express();

app.use(boddParser.json());
app.use(boddParser.urlencoded({extended: true}));
app.use(expressSession({secret: 'key', resave: false, saveUninitialized: false}));

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));

app.use(passport.initialize());
app.use(passport.session());


app.get("/", (req, res) => {
    res.send("rat");
})

app.post("/api/auth/login", (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if(err){throw err;}
        if(!user){res.send('no user found')}
        if(user){
            req.login(user, (err) => {
                if(err){throw err;}
                res.send("user logged in");
                console.log(user);
            })
        }
    })
});

app.get("/getUser", (req, res) => {
    res.send(req.user);
})


app.listen(3002, () => {
    console.log("Server started on port 3002");
})