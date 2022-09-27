<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index(Request $request)
    {
        $products = Product::all();
        foreach($products as $product)
        {
            $product->total = $product->price * $product->quantity;
        }

        if($request->wantsJson())
        {
            return response()->json($products);
        }

        return view('dashboard', compact('products'));
    }
}
