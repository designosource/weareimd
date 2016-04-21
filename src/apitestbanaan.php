<?php 

// Get cURL resource
$curl = curl_init();
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, false);

// Set some options - we are passing in a useragent too here
curl_setopt_array($curl, array(
    CURLOPT_RETURNTRANSFER => 1,
    CURLOPT_URL => 'http://www.revise.be/api/v1/items/popular?page=1&perpage=10&key=HGKqODUBtYUHT3xJhO3I',
    CURLOPT_USERAGENT => 'Codular Sample cURL Request'
));
// Send the request & save response to $resp
$resp = curl_exec($curl);
// Close request to clear up some resources
var_dump($resp);

curl_close($curl);


 ?>

 <!DOCTYPE html>
 <html lang="en">
 <head>
 	<meta charset="UTF-8">
 	<title>Document</title>
 </head>
 <body>
 	test
 </body>
 </html>