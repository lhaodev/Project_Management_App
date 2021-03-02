// Dependencies

const path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

// Routes
module.exports = (app) => {
    // Each of the below routes just handles the HTML page that the user gets sent to.


    // index route loads view.html
    app.get('/', (req, res) =>
        res.sendFile(path.join(__dirname, '../views/login.html'))
    );

    // project route loads project.html
    app.get('/project', (req, res) =>
        res.sendFile(path.join(__dirname, '../views/project.html'))
    );

    app.get('/employee', (req, res) =>
        res.sendFile(path.join(__dirname, '../views/employeeTracker.html'))
    );

    app.get('/dashboard', (req, res) =>
        res.sendFile(path.join(__dirname, '../views/dashboard.html'))
    );


    //* Amir
    app.get('/login', (req, res) =>
    res.sendFile(path.join(__dirname, '../views/login.html'))
);

    app.get('/about', (req, res) => {
        const dev = {
            contributors : [
                {
                    avatar: "../images/devs/me.jpg",
                    name: "Johnnie Simpson",
                    github: "Github: https://github.com/balokdecoy",
                    email: "Email: johnniesimpson88@gmail.com",
                    technologies: "Technologies: MySQL, CRUD, Handlebars, Linter",
                },
                {
                    avatar: "file path",
                    name: "Amir Ashtiany",
                    github: "Github: https://github.com/Alexfit4",
                    email: "Email: amir@gmail.com",
                    technologies: "Technologies: MySQL, CRUD, Validation",
                },
                {
                    avatar: "file path",
                    name: "Lu Hao",
                    github: "Github: https://github.com/lhaodev",
                    email: "Email: lu@gmail.com",
                    technologies: "Technologies: Javascript, CSS",
                },
                {   
                    avatar: "file path",
                    name: "Mengyue Zhang",
                    github: "Github: https://github.com/mengyue-z",
                    email: "Email: mengyue@gmail.com",
                    technologies: "Technologies: Javascript, CSS"
                }
            ],
        }
        res.render('about', dev)
    }
    );
};
