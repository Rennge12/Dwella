<?php

namespace App\Http\Controllers;

use App\Models\Listing;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class ListingsController extends Controller
{
    public function addListing(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'price' => 'required|numeric|min:0',  // Price should be a valid number and not negative
        ]);

        // If validation fails, return an error response
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        }

        // Ensure that the user is authenticated
        if (!Auth::check()) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        // Get the authenticated user
        $user = Auth::user();

        // Create a new listing and associate it with the authenticated user
        $listing = Listing::create([
            'user_id' => $user->id,   // Associate the listing with the logged-in user
            'title' => $request->title,
            'description' => $request->description,
            'price' => $request->price,
        ]);

        // Return a success response
        return response()->json(['message' => 'Listing added successfully', 'listing' => $listing], 201);
    }

    /**
     * View all listings.
     */
    public function viewListings()
    {
        // Get all listings from the database
        $listings = Listing::all();

        // Return the listings in a response
        return response()->json(['listings' => $listings], 200);
    }
}
