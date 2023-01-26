let coureName = "Web Dev";
let coursePrice = 500; //500dollars
let courseGoals = ['FrontEnd', 'BackEnd', 'Fullstack'];


//alert(courseName);
//alert(coursePrice);
//alert(courseGoals);


let onlineCourse = { 
    name: 'Web Dev', 
    price: 50, 
    goals: ['FrontEnd', 'BackEnd', 'Fullstack'],
};

 //alert(onlineCourse.name);
//alert(onlineCourse.price);
//alert(onlineCourse.goals); 

//alert(onlineCourse.goals[1]);

function listItem(x,xindex) {
    let xElement = x[xindex];
    return xElement;
};

let firstGoal = listItem(onlineCourse.goals, 0);
alert(firstGoal);