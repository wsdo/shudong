<?php
namespace app\modules\v1\controllers;

use app\services\WappalyzerService;
use yii\rest\ActiveController;

/**
 * 活动控制器
 *
 * Class ActivityController
 *
 * @package app\modules\v1\controllers
 */
class FenxiController extends \yii\rest\ActiveController
{
    public $modelClass='app\models\User';


    public function actionIndex($url)
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
            // $url = urldecode($_REQUEST['url']);
            // print_r($url);
            // die;
            $wappalyzer = new WappalyzerService($url);

            $detectedApps = $wappalyzer->analyze();
            // echo "<pre>";
            // print_r($detectedApps);
            // die;
            // return $detectedApps;
            if ($detectedApps) {
                foreach ($detectedApps as $detectedApp => $data) {
                    // echo $detectedApp . ', ' . $data->version . ', ', $data->confidence . '%, ', implode(', ', $data->categories) . "\n";
                }

                return json_encode($detectedApps);
            } else {
                echo "No applications detected\n";
            }

            exit(0);
        } catch (Exception $e) {
            echo $e->getMessage() . "\n";

            exit(1);
        }
    }

    public function actions()
    {
        $actions = parent::actions();

        // 全部的API都手动写出来,然后用权限控制
        unset($actions['delete'], $actions['create'], $actions['index'], $actions['view'], $actions['update']);

        return $actions;
    }
}
