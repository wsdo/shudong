<?php
/**
 * Created by PhpStorm.
 * User: maxwelldu
 * Date: 31/5/2016
 * Time: 10:58 AM
 */

namespace app\modules\v1\controllers;


class SiteController extends \yii\rest\ActiveController
{

    public $modelClass = 'app\models\User';

    public function actionIndex()
    {
        $request = Yii::$app->request;

        $i =  "string";
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