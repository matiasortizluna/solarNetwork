<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

//Route::get('/stocks', 'StocksController@index')->name('stocks.index');


Route::get('/', 'HomeController@index')->name('home');
Route::get('/unauthorized', 'HomeController@home');
Auth::routes(['verify' => false]);
Auth::routes(['register' => false]);
