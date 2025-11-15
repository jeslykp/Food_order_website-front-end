import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";


export default function PopularLocations() {
  const popularLocations = [
    { id: 1, name: "Ajman" },
    { id: 2, name: "Dubai" },
    { id: 3, name: "Sharjah" },
    { id: 4, name: "Fujairah" },
    { id: 5, name: "Abu Dhabi" },
    { id: 6, name: "Ras Al Khaimah" },
    { id: 7, name: "Umm Al Quwain" },
  ];

  return (
    <Box>
      <Box className="pink-band rounded-t-sm pb-8 px-4">
        <Typography variant="h4" align="center" sx={{ fontWeight: 600 }}>
          Popular locations in UAE
        </Typography>
        <Typography
          variant="body2"
          align="center"
          sx={{ mt: 1, color: "text.secondary", maxWidth: 720, mx: "auto" }}
        >
          From swanky upscale restaurants to the coziest hidden gems serving the
          most incredible food, we cover it all. Explore menus, and reviews to
          find your next great meal.
        </Typography>
      </Box>
      <div className="flex gap-4 items-center justify-center pb-5">
        {popularLocations.map((location) => (
          <div
            key={location.id}
            className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition text-center border border-[rgb(220,70,5)]"
          >
            {location.name}
          </div>
        ))}
      </div>
    </Box>
  );
}
