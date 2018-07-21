import Head from 'next/head'

const Layout = (props) => (
  <div>
    <Head>
      <title>{props.title}</title>
    </Head>
    {props.children}
  </div>
)

export default Layout