import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

const options = {
  method: "GET",
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMGM1YjFhMjUzMzY5YTZhZDQ5NjhjOWJiYTlhMDAxOCIsInN1YiI6IjY1MWMyYzY0OTY3Y2M3MzQyOTVlMTVmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ik6eY4V2Q-_W0WB7A0Xj8FeSBvBtgzG3MTN8I0OdtrY',
  },
};
const Allmovies = async () => {
  try {
    const response = await fetch('https://api.themoviedb.org/3/movie/popular',options);
    const data = await response.json()
    return data;
} catch (error) {
    console.error(error);
    return NextResponse.json({ message:error });
  }
};
export default Allmovies
