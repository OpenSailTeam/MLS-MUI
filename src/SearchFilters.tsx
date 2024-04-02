import React, { useState } from 'react';
import { TextField, Slider, Typography } from '@mui/material';
import { useSearchContext } from './SearchContextProvider'; // Import the context hook

export const SearchFilters = () => {
  const { setSearchQuery, setFilters } = useSearchContext(); // Utilize context to manage global state
  const [priceRange, setPriceRange] = useState<number[]>([20, 50]); // Local state for the slider

  // Handler for search input changes
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value); // Update global search query state
  };

  // Handler for slider value change
  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setPriceRange(newValue as number[]); // Update local state
    setFilters({ priceRange: newValue }); // Update global filters state
  };

  return (
    <div className="flex flex-col gap-4 p-4">
      {/* Search Input */}
      <TextField
        variant="outlined"
        label="Search"
        onChange={handleSearchChange}
        className="w-full"
        InputLabelProps={{
          shrink: true,
        }}
      />

      {/* Price Range Slider */}
      <div>
        <Typography id="price-range-slider" gutterBottom>
          Price Range
        </Typography>
        <Slider
          value={priceRange}
          onChange={handleSliderChange}
          valueLabelDisplay="auto"
          aria-labelledby="price-range-slider"
          min={0}
          max={100}
        />
      </div>
    </div>
  );
};
