import React, { useMemo, useState } from "react";
import {Link} from "react-router-dom";
import {
  Box,
  TextField,
  Checkbox,
  FormControlLabel,
  Card,
  CardContent,
  Typography,
  Divider,
} from "@mui/material";

// Sample Data (source-of-truth)
const restaurantData = [
  {
    id: 1,
    name: "Maroush, Al Dhafra",
    description: "Lebanese, Shawarma",
    address: "Abu Dhabi, UAE",
    phone: "0501234567",
    categories: ["Lebanese", "Shawarma"],
    deliveryCharge: 0,
  },
  {
    id: 2,
    name: "The Right Taste Chinese Restaurant",
    description: "Chinese, Asian, Noodles",
    address: "Dubai, UAE",
    phone: "0509876543",
    categories: ["Chinese", "Asian", "Noodles"],
    deliveryCharge: 10,
  },
  {
    id: 3,
    name: "Flower of Lebanon",
    description: "Lebanese, Grill",
    address: "Sharjah, UAE",
    phone: "0502223333",
    categories: ["Lebanese", "Grill"],
    deliveryCharge: 5,
  },
];

const sortOptions = [
  { label: "From A to Z", value: "name" },
  { label: "Delivery fees", value: "deliveryCharge" },
];

const allCategories = Array.from(
  new Set(restaurantData.flatMap((r) => r.categories))
);

const RestaurantListing = () => {
  const [allRestaurants] = useState(restaurantData);

  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("name");
  const [freeDelivery, setFreeDelivery] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleSearch = (e) => setSearchTerm(e.target.value.toLowerCase());

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const displayedRestaurants = useMemo(() => {
    let list = [...allRestaurants];

    if (searchTerm) {
      list = list.filter((r) => r.name.toLowerCase().includes(searchTerm));
    }

    if (freeDelivery) {
      list = list.filter((r) => r.deliveryCharge === 0);
    }

    if (selectedCategories.length > 0) {
      list = list.filter((r) =>
        r.categories.some((c) => selectedCategories.includes(c))
      );
    }

    list.sort((a, b) => {
      if (sortOption === "name") return a.name.localeCompare(b.name);
      if (sortOption === "deliveryCharge")
        return a.deliveryCharge - b.deliveryCharge;
      return 0;
    });

    return list;
  }, [
    allRestaurants,
    searchTerm,
    freeDelivery,
    selectedCategories,
    sortOption,
  ]);

  return (
    <Box sx={{ p: 4, mx: 10 }}>
      <Box display="flex" alignItems="center" gap={2} flexWrap="wrap" mb={2}>
        <TextField
          label="Search restaurants..."
          variant="outlined"
          value={searchTerm}
          onChange={handleSearch}
          size="small"
        />

        <Typography sx={{ fontWeight: "bold" }}>Sort by:</Typography>

        {sortOptions.map((option) => (
          <Typography
            key={option.value}
            onClick={() => setSortOption(option.value)}
            sx={{
              cursor: "pointer",
              px: 2,
              py: 0.5,
              borderRadius: "16px",
              fontSize: "0.875rem",
              backgroundColor:
                sortOption === option.value ? "rgb(245, 89, 5)" : "transparent",
              color: sortOption === option.value ? "white" : "text.primary",
              "&:hover": {
                backgroundColor:
                  sortOption === option.value ? "rgb(220, 70, 0)" : "grey.200",
              },
              userSelect: "none",
            }}
          >
            {option.label}
          </Typography>
        ))}
      </Box>

      <Divider sx={{ mb: 2 }} />

      <Box display="flex" gap={3} flexWrap="wrap">
        <Box
          sx={{
            flex: "0 0 250px",
            minWidth: "200px",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography variant="h6">Filters</Typography>

          <FormControlLabel
            control={
              <Checkbox
                checked={freeDelivery}
                onChange={(e) => setFreeDelivery(e.target.checked)}
              />
            }
            label="Free Delivery"
          />

          <Typography variant="subtitle1" fontWeight="bold" sx={{ mt: 1 }}>
            Categories
          </Typography>

          {allCategories.map((cat) => (
            <FormControlLabel
              key={cat}
              control={
                <Checkbox
                  checked={selectedCategories.includes(cat)}
                  onChange={() => toggleCategory(cat)}
                />
              }
              label={`${cat}`}
            />
          ))}
        </Box>

        <Box
          sx={{
            flex: "1 1 0",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {displayedRestaurants.length === 0 ? (
            <Typography>No restaurants found.</Typography>
          ) : (
            displayedRestaurants.map((r) => (
              <Link
                to={`/restaurants/${r._id}`}
              >
                <Card key={r.id}>
                  <CardContent>
                    <Typography variant="h6">{r.name}</Typography>
                    <Typography color="textSecondary">
                      {r.description}
                    </Typography>

                    <Box sx={{ mt: 1 }}>
                      <Typography variant="body2">
                        Address: {r.address}
                      </Typography>
                      <Typography variant="body2">Phone: {r.phone}</Typography>
                      <Typography variant="body2">
                        Categories: {r.categories.join(", ")}
                      </Typography>
                      <Typography variant="body2">
                        Delivery Charge: {r.deliveryCharge} AED
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Link>
            ))
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default RestaurantListing;
