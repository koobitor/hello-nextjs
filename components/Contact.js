class Contact extends React.Component {

  render() {
    const { name, tel } = this.props
    return (
      <li>
        <strong>{name}</strong>
        <a href="tel:{tel}">{tel}</a>
      </li>
    )
  }
}

export default Contact