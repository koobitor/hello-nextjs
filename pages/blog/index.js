import Link from 'next/link'
import Header from '../../components/Header'
import blogs from '../../data/blogs'

const BlogLink = (props) => (
  <li>
    <Link as={`/b/${props.id}`} href={`/blog?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

class Blog extends React.Component {

  static getInitialProps () {
    return { blogs: blogs }
  }

  render() {
    const { blogs } = this.props
    return (
      <div>
        <Header title="blog page" />
        <h1>Blog</h1>
        <ul>
          {blogs.map((item, index) => (
            <li>
              <img src={ item.display_src } />
              <h1>{ item.codeName }</h1>
              <h3>{ item.realName }</h3>
              <p>{ item.story }</p>
            </li>
          ))}
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