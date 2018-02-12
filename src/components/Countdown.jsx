import React, {Component} from 'react';
import Clock from 'components/Clock';
import CountdownForm from 'components/CountdownForm';
import Controls from 'components/Controls';


export default class Countdown extends Component {

  constructor(props){
    super(props);

    this.state = {
      count : 0,
      countdownStatus: 'stopped'
    }

    this.handleSetCountdown = this.handleSetCountdown.bind(this);
    this.handleStatusChange = this.handleStatusChange.bind(this);
  }

  componentDidUpdate(prevProps, prevState){
    if(this.state.countdownStatus !== prevState.countdownStatus){
      switch(this.state.countdownStatus){
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({count: 0});
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  }

  componentWillUnmount(){
    clearInterval(this.timer);
    this.timer = undefined;
  }

  startTimer(){
    this.timer = setInterval(() => {
      let newCount = this.state.count - 1;
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });
      if(newCount === 0){
        this.setState({
          countdownStatus: 'stopped'
        })
      }
    }, 1000);
  }

  handleSetCountdown(seconds){
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    });
  }

  handleStatusChange(newStatus){
    this.setState({countdownStatus: newStatus});
  }

  render(){
    let {count, countdownStatus} = this.state;

    let renderControlArea = () => {
      if(countdownStatus !== 'stopped'){
        return (
          <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>
        );
      }else{
        return (
          <CountdownForm onSetCountdown={this.handleSetCountdown}/>
        );
      }
    }

    return (
      <div>
        <h1 className="page-title">Countdown App</h1>
        <Clock totalSeconds={this.state.count}/>
        {renderControlArea()}
      </div>
    );
  }
}


