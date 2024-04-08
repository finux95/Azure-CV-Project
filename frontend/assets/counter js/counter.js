window.addEventListener('DOMContentLoaded',(event) =>{
    getVisitCount();
})

const functionApi = 'http://localhost:7071/api/GetCVCounter';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApi).then(Response => {
        return Response.json()
    }).then(Response =>{
        console.log("website called function API.");
        count = Response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
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

