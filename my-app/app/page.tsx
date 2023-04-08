import Hero from "@/components/Hero/Hero";
import MidClasses from "@/components/Hero/MidClasses";
import MidFirst from "@/components/Hero/MidFirst";
import JoinCommunity from "@/components/Review/JoinCommunity";
import Review from "@/components/Review/Review";
import React from "react";

export default function Home() {
  return (
    <main className="font-poppin animation_body">
      <Hero />
      <MidFirst />
      <MidClasses />
      <Review />
      <JoinCommunity />
    </main>
  );
}
