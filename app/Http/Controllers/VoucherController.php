<?php

namespace App\Http\Controllers;

use App\Voucher;

class VoucherController extends Controller
{
  public function getAll()
  {
    return Voucher::all();
  }
}