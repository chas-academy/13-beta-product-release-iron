<?php

namespace App\Http\Controllers;

use App\Header;

class HeaderController extends Controller
{
  public function getAll()
  {
    return Header::all();
  }
}