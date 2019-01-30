<?php
echo "<h3>Firebase test</h3>";

/*
{
	"app_id" : "225aadb4-8d28-45a8-a45a-4e9a304f045a",
    "contents" : {"en" : "Test Message"},
    "headings" : {"en" : "Test Heading"},
    "data" : {"foo" : "bar"},
    "include_player_ids" : ["c5d7eb50-d54b-424f-89df-d135309cb11f"]
}
*/

$ONESIGNAL_APP_ID = "225aadb4-8d28-45a8-a45a-4e9a304f045a";
$REST_API_KEY = "MDZkZGEzZDAtZmNmZC00MmI2LTk4ODEtMTI0ZDQ2MWM3YTky";

$data = array(
    'app_id' => $ONESIGNAL_APP_ID,
    'contents' => array('en' => 'test'),
    'included_segments' => ['All']
);
$data_string = json_encode($data);																															
$ch = curl_init('https://onesignal.com/api/v1/notifications');
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    'Content-Type: application/json',
        'Authorization: Basic ' . $REST_API_KEY)
    );																			
$result = json_decode(curl_exec($ch));
print_r($result);
?>