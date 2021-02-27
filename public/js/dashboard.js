// const { BIGINT } = require("sequelize");

// Wait for the DOM to completely load before we run our JS
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded! 🚀');
    feather.replace()

    const projectContainer = document.querySelector('.project-container');
    // const projectDet = document.querySelector('#projectDetail');
    let button = document.querySelector('.btn');

    // document.getElementsByClassName(".btn").addEventListener("click", myFunction);

    // function myFunction() {
    // projectDet.innerHTML = "YOU CLICKED ME!";
    // }

    // Variable to hold our projects
    let projects;

    const getProjects = (id) => {
        // employeeId = employee || '';
        // if (employeeId) {
        //     employeeId = `/?employee_id=${employeeId}`;
        // }

        fetch('/api/project', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.length > 0) {
                    console.log('Success in getting post:', data);
                    console.log(data)

                    $("#projectTable > tbody").empty();
                    // Populate the form
                    for (i = 0; i < data.length; i++) {
                        console.log(data[i].id)
                        projId = data[i].id;
                        projName = data[i].name;
                        projDescript = data[i].description;
                        projMngFirst = data[i].Manager.first_name;
                        projMngLast = data[i].Manager.last_name;
                        projMngName = `${projMngFirst} ${projMngLast}`

                        // projEmpFirst = data[i].Employees[0].first_name;
                        // projEmpLast = data[i].Employees[0].last_name;
                        // projEmpName = `${projEmpFirst} ${projEmpLast}`

                        console.log(projDescript)
                        var newRow = $("<tr>").append(
                            $(`<button type='button' id=${data[i].id} class='button${data[i].id} btn btn-primary'>`).text(projId),
                            $("<button>").text("Edit").addClass("edit-proj-btn").val(projId),
                            $("<td>").text(projName),
                            $("<td>").text(projDescript),
                            $("<td>").text(projMngName),
                            // $("<td>").text(projEmpName),
                            console.log(projDescript)
                            // $("<td>").text(empSalary),
                            // $("<td>").text(empEmail),
                            // $("<button>").text("Edit").addClass("edit-emp-btn"),
                            // $("<button>").text("Delete").addClass("delete-emp-btn"),
                        );

                        // // Append the new row to the table
                        $("#projectTable > tbody").append(newRow);


                    }

                }


            })
        // .catch((error) => console.error('Error:', error));
    };

    getProjects();



    const buttonClick = (e) => {
        //e.preventDefault();
        fetch('/api/project', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {

                console.log(data);


            })
    };


    // const buttonClick = (id) => {
    //     fetch('/api/project', {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //     })
    //         .then((response) => response.json())
    //         .then((data) => {

    //         const test = "hello world"
    //         button.onclick = console.log(test);




    //         //     
    //         //     button.onclick = function() {
    //         //         console.log('button');
    //         //     }

    //         // if (data.id = button) {
    //         //     console.log('hello world');
    //         // }

    // })}

    buttonClick();







    const editProject = (e) => {
        id = e.target.value;
        console.log("hello")
        fetch(`/api/project/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(e),
        })
            .then(() => {
                console.log("hello")
                // window.location.href = '/project';
            })
            .catch((err) => console.error(err));
    };

    //  $(".edit-proj-btn").on("click", editProject);


    $(document).on("click", '.edit-proj-btn', editProject);















    // Front end call to DELETE a post
    const deleteProject = (id) => {
        fetch(`/api/project/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(getProjects());
    };





    // Handle when we click the delete post button
    const handleProjectDelete = (e) => {
        const currentProject = JSON.parse(
            e.target.parentElement.parentElement.dataset.project
        );

        deleteProject(currentProject.id);
    };

    // Handle when we click the edit post button
    const handleProjectEdit = (e) => {
        const currentProject = JSON.parse(
            e.target.parentElement.parentElement.dataset.project
        );

        window.location.href = `/project?project_id=${currentProject.id}`;
    };
});

