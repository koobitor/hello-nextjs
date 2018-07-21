import Link from 'next/link'
import Header from '../../components/Header'

const BlogLink = (props) => (
  <li>
    <Link as={`/b/${props.id}`} href={`/blog?title=${props.title}`}>
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
          <BlogLink id="hello-kmutt" title="Hello KMUTT" />
          <BlogLink id="text-nextjs" title="Test Next.js" />
          <BlogLink id="demo-reactjs" title="Demo React.js" />
        </ul>
        <h2>{this.props.url.query.title}</h2>
      </div>
    )
  }
}

export default Blog