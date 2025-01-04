import Articles from "@/entities/Articles";
import OurBlogFullscreen from "@/fullscreens/OurBlogFullscreen";
import React from "react";

function Page() {
  return (
    <div className="blog">
      <OurBlogFullscreen />

      <div className="container">
        <Articles />
      </div>
    </div>
  );
}

export default Page;
