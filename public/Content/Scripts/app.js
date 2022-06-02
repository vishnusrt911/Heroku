// IIFE Immediately Invoked Function Expression
console.log("Test Comment....");
(function(){

    function Start()
    {
        console.log("app started....");
    }

    window.addEventListener('DOMContentLoaded',Start);
})(); 