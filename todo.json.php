<?php
$result = array(
	array("id" => "1", "text" => "learn angular", "done" => true),
	array("id" => "2", "text" => "change angular", "done" => false),
	array("id" => "3", "text" => "edit angular", "done" => false),
	array("id" => "5", "text" => "5edit angular", "done" => false),
	array("id" => "4", "text" => "build an angular app", "done" => false)
);
echo json_encode($result);

/*
[
{"id": "1", "text": "learn angular", "done": true},
{"id": "2", "text": "change angular", "done": false},
{"id": "3", "text": "edit angular", "done": false},
{"id": "5", "text": "5edit angular", "done": false},
{"id": "4", "text": "build an angular app", "done": false}
]
*/