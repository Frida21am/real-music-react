import Articles from "@/components/ui/blogs/Articles";
import OurBlogFullscreen from "@/components/ui/fullscreens/OurBlogFullscreen";
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
