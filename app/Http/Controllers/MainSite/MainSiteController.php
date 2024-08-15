<?php

namespace App\Http\Controllers\MainSite;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class MainSiteController extends Controller
{

    /**
     * Function for displaying the main site
     *
     * @return Redirect
     *
     */
    public function index()
    {
        return Inertia::render('MainSite/Index');
    }
}
