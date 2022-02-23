let request = new http XMLHttpRequest();
request.open("GET , http://makeup-api.herokuapp.com/api/v1/products.json");
request.send();
request.onload=(data){console.log(data);};
request.console.error();
