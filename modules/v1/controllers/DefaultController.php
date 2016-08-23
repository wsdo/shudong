<?php

namespace app\modules\v1\controllers;

use yii\rest\ActiveController;

/**
 * Default controller for the `v1` module
 */
class DefaultController extends \yii\rest\ActiveController
{
    /**
     * Renders the index view for the module
     * @return string
     */
    public function actionIndex()
    {
        $request = Yii::$app->request;

        $i =  "string";
        return $i;
    }
}
