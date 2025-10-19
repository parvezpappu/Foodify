import express from "express";
import fetch from "node-fetch"; // if Node < 18

const app = express();

app.get("/api/menu", async (req, res) => {
  const url =
    "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=773198";

  const upstream = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0", Accept: "application/json" }
  });

  const text = await upstream.text();
  res
    .status(upstream.status)
    .set("content-type", upstream.headers.get("content-type") || "application/json")
    .send(text);
});

app.listen(4000, () => console.log("proxy on :4000"));
