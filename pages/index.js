import Header from '../components/Header'

class Index extends React.Component {

  state = {
    title: 'index page',
    msg: ''
  }

  changeTitle = () => {
    this.setState({
      title: 'Yo man'
    })
  }

  changeMsg = (e) => {
    this.setState({
      msg: e.target.value
    })
  }

  render() {
    return (
      <div>
        <Header title={this.state.title} />
        <h1 style={{ background: 'red' }}>
          {this.state.msg}
        </h1>
        <input onChange={(e) => this.changeMsg(e)} />
        <div onClick={this.changeTitle}>Change Title</div>
      </div>
    )
  }
}

export default Index