<?php

namespace App\Http\Controllers;

use App\Models\Listing;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ListingsController extends Controller
{
    public function addListing(Request $request){
        $validator = Validator::make($request->all(), [
            'imageURL' => 'required',
            'description' => 'required',
            'homeType' => 'required',
            'price' => 'required|numeric|min:1',
            'location' => 'required'
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        }
        $listing = Listing::create([
            'homeType' => $request->homeType,
            'description' => $request->description,
            'location' => $request->location,
            'imageURL' => $request->imageURL,
            'price' => $request->price
        ]);
        return response()->json(['message' => 'Listing created'], 201);
    }

    
}
