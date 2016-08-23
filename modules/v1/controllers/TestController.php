<?php

namespace app\modules\v1\controllers;

use app\services\V8jsService;
use yii\rest\ActiveController;

class TestController extends \yii\web\Controller
{
    public $bar = null;
    public function actionIndex()
    {
        $v8 = new \V8js();
        // This prints "no"
        $v8->executeString('print( "bar" in PHP.foo ? "yes" : "no" );');

        // return $this->render('index');
    }
}
