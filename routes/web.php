<?php

Route::resource('simulador', 'simulador\CrudController');
Route::post('simulador.welcome', 'simulador\CrudController@store');
