import Header from '../components/Header'
import Hello from './hello'
import Contact from '../components/Contact'
class Index extends React.Component {

  state = {
    title: 'index page',
    msg: ''
  }

  constructor(props) {
    super(props)
    console.log('constructor')
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  changeTitle = () => {
    this.setState({
      title: 'Yo man'
    })
  }

  changeMsg = (e) => {
    this.setState({
      title: e.target.value
    })
  }

  render() {
    const contact = [
      {
        name: 'Sakol Assawasagool',
        tel: '02-777-777'
      },
      {
        name: 'Koobitor',
        tel: '081-234-5678'
      }
    ]
    return (
      <div>
        {contact.map((item) => (
          <Contact {...item} />
        ))}
      </div>
    )
  }
}

export default Index