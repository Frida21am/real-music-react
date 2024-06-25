import Articles from "../entities/Articles"
import OurBlogFullscreen from "../fullscreens/OurBlogFullscreen"

function PageOurBlog() {
  return (
    <div className="blog">
      <OurBlogFullscreen />

      <div className="container">
        <Articles />
      </div>
    </div>
  )
}

export default PageOurBlog
