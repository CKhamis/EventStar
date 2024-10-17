"use client";
import TopBar from "../../components/TopBar";
import Footer from "@/components/Footer";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {CircleUser} from "lucide-react";
import RTable from "@/app/spots/RTable";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import Link from "next/link";
import {useState} from "react";
import TitleBar from "@/components/TitleBar";

export default function Spots() {
  const [totalRatings, setTotalRatings] = useState(0);
  const [totalRatingsStat, setTotalRatingsStat] = useState("#3 most active");

  const [averageRating, setAverageRating] = useState(0);
  const [averageRatingStat, setAverageRatingStat] = useState("/ 20 spots");

  const [placesAdded, setPlacesAdded] = useState(0);
  const [placesAddedStat, setPlacesAddedStat] = useState("/ 20 spots");

  const [topRatedSpot, setTopRatedSpot] = useState("Costi's house");
  const [topRatedSpotStat, setTopRatedSpotStat] = useState("Ranked 5th place globally");

  const spotList = [
    {id: 1, logoUrl: "", name: "Five Guys", price: "expensive", globalRating: "87", rated: false},
    {id: 1, logoUrl: "", name: "Five Guys", price: "expensive", globalRating: "87", rated: true},
    {id: 1, logoUrl: "", name: "Five Guys", price: "expensive", globalRating: "87", rated: false},
  ];

  return (
      <>
        <TopBar isLoggedIn={false}/>
        <div className="flex flex-1 flex-col gap-6 p-4 md:gap-5 md:p-8 container">
          <TitleBar title="Spots" />
          <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
            <Card x-chunk="dashboard-01-chunk-0">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Ratings
                </CardTitle>
                <CircleUser className="h-4 w-4 text-muted-foreground"/>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{totalRatings}</div>
                <p className="text-xs text-muted-foreground">
                  {totalRatingsStat}
                </p>
              </CardContent>
            </Card>
            <Card x-chunk="dashboard-01-chunk-1">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Average Rating
                </CardTitle>
                <CircleUser className="h-4 w-4 text-muted-foreground"/>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{averageRating}</div>
                <p className="text-xs text-muted-foreground">
                  {averageRatingStat}
                </p>
              </CardContent>
            </Card>
            <Card x-chunk="dashboard-01-chunk-2">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Places Added
                </CardTitle>
                <CircleUser className="h-4 w-4 text-muted-foreground"/>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{placesAdded}</div>
                <p className="text-xs text-muted-foreground">{placesAddedStat}</p>
              </CardContent>
            </Card>
            <Card x-chunk="dashboard-01-chunk-3">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Top Rated Spot
                </CardTitle>
                <CircleUser className="h-4 w-4 text-muted-foreground"/>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{topRatedSpot}</div>
                <p className="text-xs text-muted-foreground">{topRatedSpotStat}</p>
              </CardContent>
            </Card>
          </div>
          <RTable spotList={spotList}/>
        </div>
        <Footer/>
      </>
  );
}
