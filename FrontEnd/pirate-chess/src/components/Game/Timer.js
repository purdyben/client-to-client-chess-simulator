const {Button} = require('reactstrap')
const React = require('react')
const ms = require('pretty-ms')

class Timer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      time: 600000,
      isOn: false,
      start: 0
    }
    this.startTimer = this.startTimer.bind(this)
    this.stopTimer = this.stopTimer.bind(this)
    this.resetTimer = this.resetTimer.bind(this)
  }
  startTimer() {
    this.setState({
      isOn: true,
      time: this.state.time,
      start: Date.now() - this.state.start
    })
    this.timer = setInterval(() => this.setState({
      time: 600000 - (Date.now() - this.state.start)
    }), 1);
  }
  stopTimer() {
    this.setState({isOn: false})
    clearInterval(this.timer)
  }
  resetTimer() {
    this.setState({time: 600000, isOn: false})
  }
  render() {
    let start = (this.state.time == 600000) ?
      <Button color="info" size="lg" onClick={this.startTimer}>start</Button> :
      null
    let stop = (this.state.time == 600000 || !this.state.isOn) ?
      null :
      <Button color="info" size="lg" onClick={this.stopTimer}>stop</Button>
    let resume = (this.state.time == 600000 || this.state.isOn) ?
      null :
      <Button color="info" size="lg" onClick={this.startTimer}>resume</Button>
    let reset = (this.state.time == 600000 || this.state.isOn) ?
      null :
      <Button color="info" size="lg" onClick={this.resetTimer}>reset</Button>
    return(
      <div>
        <h3>timer: {ms(this.state.time)}</h3>
        {start}
        {resume}
        {stop}
        {reset}
      </div>
    )
  }
}
module.exports = Timer