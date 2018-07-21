import Layout from './Layout'
import Link from 'next/link'

const Header = (props) => (
  <Layout title={props.title}>
    <Link href="/blog">
      <a>Blog</a>
    </Link>
    <Link href="/about">
      <a>About Us</a>
    </Link>
  </Layout>
)

export default Header