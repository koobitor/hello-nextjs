import Link from 'next/link'
import Header from '../../components/Header'

const BlogLink = (props) => (
  <li>
    <Link href={`/blog?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

class Blog extends React.Component {

  render() {
    return (
      <div>
        <Header title="blog page" />
        <h1>Blog</h1>
        <ul>
          <BlogLink title="Hello KMUTT" />
          <BlogLink title="Test Next.js" />
          <BlogLink title="Demo React.js" />
        </ul>
      </div>
    )
  }
}

export default Blog