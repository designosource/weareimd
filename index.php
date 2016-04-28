<?php
session_start();

require 'vendor/autoload.php';

use Larabros\Elogram\Client;

$clientId = "cee9b6fe6d7b48a4815d7ef0035f8d58";
$clientSecret = "e1df8f0b1a304b7097c5003700e4a2c6";
$redirectUrl = "www.weareimd.be";

$client = new Client($clientId, $clientSecret, null, $redirectUrl);

var_dump($client->getLoginUrl());