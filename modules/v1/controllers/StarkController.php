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
class StarkController extends \yii\rest\ActiveController
{
    public $modelClass='app\models\User';

   
    public function actionIndex()
    {
        // $request = Yii::$app->request;

        $i =  ['name'=>'stark','age'=>'18','sex'=>'man'];
        return $i;
    }

    public function actions()
    {

        $actions = parent::actions();

        // 全部的API都手动写出来,然后用权限控制
        unset($actions['delete'], $actions['create'], $actions['index'], $actions['view'], $actions['update']);

        return $actions;
    }

}
