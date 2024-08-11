<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AdminDashboardController extends Controller
{

    /**
     *Show Admin dashboard
     */
    public function index()
    {
        return inertia('Admin/Dashboard/Index');
    }
}
