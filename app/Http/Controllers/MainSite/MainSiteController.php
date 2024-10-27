<?php

namespace App\Http\Controllers\MainSite;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;

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
        $videoPath = 'public/main-site/videos/enter_video.mp4';
        $bgVideoContent = Storage::url($videoPath);

        return Inertia::render('MainSite/Index', [
            'bgVideoUrl' => asset($bgVideoContent),
        ]);
    }
}
