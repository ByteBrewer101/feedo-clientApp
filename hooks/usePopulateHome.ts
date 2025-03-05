import { hotels } from "@/testData/testDb";
import { useState } from "react";

export default function usePopulateHome() {
  // Static hotel data - replace with your actual array
  const hotel = hotels

  // Commented API call structure for future use
  // const [err, setErr] = useState();
  // const [loading, setLoading] = useState(false);

  return {
    err: null, // Error state placeholder
    data: hotel, // Directly return static data
    loading: false, // No loading state needed
  };
}
