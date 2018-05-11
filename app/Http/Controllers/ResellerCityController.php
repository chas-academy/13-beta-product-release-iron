<?php

namespace App\Http\Controllers;

use App\ResellerCity;
use App\Http\Resources\ResellerCity as ResellerCityResource;

class ResellerCityController extends Controller
{
    public function show ($id)
    {
        return new ResellerCityResource(ResellerCity::find($id));
    }
    public function getAll()
    {
        return ResellerCity::all();
    }
}