export async function GET(req: Request) {
    console.log("API Route: Fetching product data...");
  
    const res = await fetch("https://dummyjson.com/products/1", {
      cache: "no-store", // Change to "no-store" to disable caching
    });
  
    const data = await res.json();
    return Response.json({ cache: "no-store", data });
  }
  