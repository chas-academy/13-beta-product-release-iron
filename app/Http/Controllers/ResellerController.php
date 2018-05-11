<?php

namespace App\Http\Controllers;

use App\Reseller;
use App\Http\Resources\Reseller as ResellerResource;

class ResellerController extends Controller
{
    public function show ($id)
    {
        return new ResellerResource(Reseller::find($id));
    }
    public function getAll()
    {
        return Reseller::all();
    }
}