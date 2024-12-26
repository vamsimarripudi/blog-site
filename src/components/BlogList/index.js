// Write your JS code here

import './index.css'
import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogsList} = props
  return (
    <div>
      <ul className="blog-list-item">
        {blogsList.map(eachBlog => (
          <BlogItem key={eachBlog.id} blogDetails={eachBlog} />
        ))}
      </ul>
    </div>
  )
}

export default BlogList
