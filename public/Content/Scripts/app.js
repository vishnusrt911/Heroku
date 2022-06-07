// IIFE Immediately Invoked Function Expression for the client side
//This app.js file is called using 

console.log("Test Comment....");
(function(){

    function Start()
    {
        console.log("app started....");
    }

    window.addEventListener('DOMContentLoaded',Start);
})(); 