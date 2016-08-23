<?php
namespace app\modules\v1\controllers;

use yii\rest\ActiveController;


/**
 * 活动控制器
 *
 * Class ActivityController
 *
 * @package app\modules\v1\controllers
 */
class IndexController extends \yii\rest\ActiveController
{
    public $modelClass='app\models\User';

   
    public function actionIndex()
    {
        $request = Yii::$app->request;

        $i =  "string";
        return $i;
    }
}
