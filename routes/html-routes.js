// Dependencies

const path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

// Routes
module.exports = (app) => {
	// Each of the below routes just handles the HTML page that the user gets sent to.

	// index route loads view.html
	// app.get("/", (req, res) =>
	// 	res.sendFile(path.join(__dirname, "../views/login.html"))
	// );

	// project route loads project.html
	app.get("/project", (req, res) =>
		res.sendFile(path.join(__dirname, "../views/project.html"))
	);

	app.get("/employee", (req, res) =>
		res.sendFile(path.join(__dirname, "../views/employeeTracker.html"))
	);

	app.get("/dashboard", (req, res) =>
		res.sendFile(path.join(__dirname, "../views/dashboard.html"))
	);

	//     //* Amir

	app.get("/", function (req, res) {
		// If the user already has an account send them to the members page
		// if (req.user) {
		// 	res.redirect("/members");
		// }
		res.sendFile(path.join(__dirname, "../views/login.html"));
	});

	app.get("/login", function (req, res) {
		// If the user already has an account send them to the members page
		// if (req.user) {
		// 	res.redirect("/members");
		// }
		res.sendFile(path.join(__dirname, "../views/login.html"));
	});

	// Here we've add our isAuthenticated middleware to this route.
	// If a user who is not logged in tries to access this route they will be redirected to the signup page
	app.get("/dashboard", isAuthenticated, function (req, res) {
		res.sendFile(path.join(__dirname, "../views/dashboard.html"));
	});
	// * Amir

const path = require('path');
// const { HasOne } = require('sequelize/types');

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
                    name: "Johnnie Simpson",
                    github: "Github: https://github.com/balokdecoy",
                    email: "Email: johnniesimpson88@gmail.com",
                    avatar: "insert file path",
                },
                {
                    name: "Amir Ashtiany",
                    github: "Github: https://github.com/Alexfit4",
                    email: "Email: amir@gmail.com",
                    avatar: "insert file path",
                },
                {
                    name: "Lu Hao",
                    github: "Github: https://github.com/lhaodev",
                    email: "Email: lu@gmail.com",
                    avatar: "insert file path",
                },
                {
                    name: "Mengyue Zhang",
                    github: "Github: https://github.com/mengyue-z",
                    email: "Email: mengyue@gmail.com",
                    avatar: "insert file path here"
                }
            ],
        }
        res.render('about', dev)
    }
    );

    // insert app.get() hbsObject function contributors: data, avatar loop, 


	app.get("/about", (req, res) => {
		const dev = {
			contributors: [
				{
					name: "Johnnie Simpson",
					github: "balokdecoy",
					email: "johnniesimpson88@gmail.com",
					avatar: "insert file path",
				},
				{
					name: "Amir Ashtiany",
					github: "Alexfit4",
					email: "amir@gmail.com",
					avatar: "insert file path",
				},
			],
		};
		res.render("about", dev);
	});

	// insert app.get() hbsObject function contributors: data, avatar loop,
};
