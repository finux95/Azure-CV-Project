window.addEventListener('DOMContentLoaded',(event) =>{
    getVisitCount();
})

const functionApiURL = 'https://azurecvcounter.azurewebsites.net/api/GetCVCounter?code=4y-e0jLBS50QTe9jaK1dTkqFj3y_K0-QTJHncwGWs-K-AzFuW9Nlmg==';
const localfunctionApi = 'http://localhost:7071/api/GetCVCounter';

const getVisitCount = () => {
    fetch(functionApiURL)
        .then(response => response.json())
        .then(data => {
            console.log("Website called function API.");
            const count = data.count;
            document.getElementById("counter").innerText = count;
        })
        .catch(error => {
            console.error("Error fetching visit count:", error);
        });
}
//<script type="text/javascript" src="https://code.jquery.com/jquery-1.12.0.min.js"></script>
 
//$(document).ready(function(){
//    $('.counter-value').each(function(){
//        $(this).prop('Counter',0).animate({
//            Counter: $(this).text()
//        },{
//            duration: 3500,
//            easing: 'swing',
//            step: function (now){
//                $(this).text(Math.ceil(now));
//            }
//        });
//    });
//});

