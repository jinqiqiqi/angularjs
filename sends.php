<?php

$username = "0512C00157998";
$password = "7998qwer";

$wsdl = "http://202.102.41.99:8090/wsewebsm/services/SendMessageService?wsdl";
$sClient = new SoapClient($wsdl) ;


try {
	// $result = $sClient->SendSms($xml1, $xml2);
	$simpleUserInfoValue = array(
		'username' => $username,
		'password' => $password
	);
	$sendSmsInfoValue = array(
		'content' => 'testing',
		'recieveNum' => '13862540144',
		'sendType' => '1',
		'signature' => 'account'
	);
	$simpleUserInfo = new SoapParam($simpleUserInfoValue, 'simpleUserInfo');
	$sendSmsInfo = new SoapParam($sendSmsInfoValue, 'sendSmsInfo');
	$result = $sClient->sendSms($simpleUserInfo, $sendSmsInfo);

	print_r($result);

	// $result_xml = simplexml_load_string($result);

	// var_dump($result_xml);
	echo $username, "\n", $password, "\n";
}
catch (Exception $e) {
	print_r($e);
}






