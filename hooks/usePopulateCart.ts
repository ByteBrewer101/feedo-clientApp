import { food} from "@/testData/testDb";
import { useState } from "react";

export default function usePopulateCart() {
  // Static hotel data - replace with your actual array
  const foods = food;

  // Commented API call structure for future use
  // const [err, setErr] = useState();
  // const [loading, setLoading] = useState(false);

  return {
    err: null, // Error state placeholder
    data: foods, // Directly return static data
    loading: false, // No loading state needed
  };
}
