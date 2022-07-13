//alert("It's working!");



/*
One unique image, with appropriate and matching content in the alt tag.  
A paragraph or two of content that describes the daily item (paragraph must include the name of the highlighted weekday)
A unique color that supports the image and paragraph of content


pic - image src
alt - the alt tag for image 
desc - a desciption of the coffee
day - the day of the week for the coffee
color - color associated with the coffee
name - the name if the coffee



*/
function coffeeTemplate(coffee){
    let myReturn = "";

    myReturn += `
    <p>
            <img src="${coffee.pic}" alt="${coffee.alt}" id="coffee" />
           <strong class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong class="feature">${coffee.name}</strong>, ${coffee.desc} which makes us wish it was always Fall, as this is one of our top sellers!</p>
    `;
//Finish this from the screenshot
    return myReturn;

};
//check out the recording on 7/6 at 11:10
let myDate = new Date();
let myDay = myDate.getDay();
let today = "";
let coffee = "";

//myDay = 6;

//use location object to access querystring (address bar)
const queryString = window.location.search;

//Output to console
console.log(queryString);

//separate querystring parameters
const urlParams = new URLSearchParams(queryString);

if(urlParams.has("day")){//if data on querystring, load from querystring
    myDay = urlParams.get("day");
}

myDay = parseInt(myDay);
//there is a code watch the video on 7/7 at 11:20
switch(myDay){
 
    case 0:
       today = "Sunday";

       coffee = {
        color:"orange",
        name: "Pumpkin Spice Latte",
        pic: "images/pumpkin-spice-latte.jpg",
        alt: "A picture of a pumpkin-spice-latte",
        day: "Sunday",
        desc: `I like me some Pumpkin-Spice-Latte`

    };
    break;

    case 1:
        today = "Monday";

        coffee = {
            color:"black",
            name: "Drip",
            pic: "images/drip.jpg",
            alt: "A picture of a drip",
            day: "Monday",
            desc: `I like me some Drip`

        };
     break;

    case 2:
       today = "Tuesday";

       coffee = {
        color:"grey",
        name: "Carmel Latte",
        pic: "images/caramel-latte.jpg",
        alt: "A picture of a carmel latte",
        day: "Tuesday",
        desc: `I like me some Carmel Latte`

    };
    break;

    case 3:
       today = "Wednesday";
       
       coffee = {
            color:"Pink",
            name: "Bubble Tea",
            pic: "images/bubble-tea.jpg",
            alt: "A picture of a bubble tea",
            day: "Wednesday",
            desc: `I like me some Bubble Tea`

        };

    break;

    case 4:
       today = "Thursday";
       
       coffee = {
            color:"brown",
            name: "Mocha",
            pic: "images/mocha.jpg",
            alt: "A picture of a mocha",
            day: "Thursday",
            desc: `I like me some Mocha`

        };

    break;

    case 5:
       today = "Friday";
       
       coffee = {
            color:"blue",
            name: "Cold Brew",
            pic: "images/cold-brew.jpg",
            alt: "A picture of a cold brew",
            day: "Friday",
            desc: `I like me some Cold Brew`

        };

    break;

    case 6:
       today = "Saturday";
       
       coffee = {
            color:"green",
            name: "Frappaccino",
            pic: "images/frappaccino.jpg",
            alt: "A picture of a frappaccino",
            day: "Saturday",
            desc: `I like me some Frappaccino`

        };

    break;



    default: 
      today = "Something went wrong!"; 
}
//let coffeeData = coffeeTemplate(coffee)
//alert(coffeeData);
document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);

document.querySelector("html").style.backgroundColor = coffee.color;

//console.log(coffee);