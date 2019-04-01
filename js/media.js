function getAllPosts(){
    const Http = new XMLHttpRequest();
    const token = '0DLRM3YW97U5FWSBG586';
    const url='https://api.dropinblog.com/v1/json?b=' + token;
    Http.open("GET", url);
    Http.send();
    Http.onreadystatechange=(e)=>{
        console.log(Http.responseText)
    }
}


$(document).ready(function() {
        var request = new XMLHttpRequest();
        var method = 'GET';
        var url = 'https://api.dropinblog.com/v1/json?b=0DLRM3YW97U5FWSBG586';
       // var endpoint = '/gen_payment_qr';
        console.log('Testing');
        request.open(method, url, true);
        request.setRequestHeader("Content-Type", "text/html");
        request.setRequestHeader('Access-Control-Allow-Origin', '*');
        request.send();
        request.onload = function () {
            // Begin accessing JSON data here
            console.log("Here");
            console.log(this.response);
            var response = JSON.parse(this.response);
            console.log(response);
        }
});

