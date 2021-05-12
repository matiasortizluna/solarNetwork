<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SensorsController extends Controller
{


    public function receiveData(Request $request){
        
        $bodyContent = $request->getContent();

        dd($bodyContent);

    }

}