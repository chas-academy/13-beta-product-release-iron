<?php

namespace App\Http\Controllers;

use App\Event;
use App\Http\Resources\Event as EventResource;

class EventController extends Controller
{
  public function getAll()
  {
    return Event::all();
  }
}