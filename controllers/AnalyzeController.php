<?php
namespace app\controllers;

use yii\rest\ActiveController

class Analyze extends ActiveController
{
	public function index()
	{
	try {
		// if ( php_sapi_name() !== 'cli' ) {
		// 	exit('Run me from the command line');
		// }
		
		// $url = !empty($argv[1]) ? $argv[1] : '';
		
		// if ( !$url ) {
		// 	echo "Usage: php {$argv[0]} <url>\n";
		
		// 	exit(0);
		// }
		// $url = "itnote.cn";
		$url = urldecode($_REQUEST['url']);
		// print_r($url);
		// die;
		$wappalyzer = new Wappalyzer($url);

		$detectedApps = $wappalyzer->analyze();
	   // echo "<pre>";
	   // print_r($detectedApps);
	   echo json_encode($detectedApps);
		if ( $detectedApps ) {
			foreach ( $detectedApps as $detectedApp => $data ) {
				// echo $detectedApp . ', ' . $data->version . ', ', $data->confidence . '%, ', implode(', ', $data->categories) . "\n";
			}

			return json_encode($detectedApps);
		} else {
			echo "No applications detected\n";
		}

		exit(0);
		} catch ( Exception $e ) {
			echo $e->getMessage() . "\n";

			exit(1);
		}
		}
	}
