<?php

namespace App\Http\Controllers;

use App\Vision;
use App\Banner;

class VisionController extends Controller
{
  public function getAll()
  {
    return Vision::All();
  }
  public function getBanner()
  {
    return Banner::All();
  }
}