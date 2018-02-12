import React, {Component} from 'react';

export default class Controls extends Component {

  onStatusChange(newStatus){
    this.props.onStatusChange(newStatus);
  }

  render(){
    let {countdownStatus} = this.props;

    let renderStartStopButton = () => {
      if(countdownStatus === 'started'){
        return <button className="button secondary" onClick={this.onStatusChange.bind(this,"paused")}>Pause</button>;
      }else{
        return <button className="button primary" onClick={this.onStatusChange.bind(this,"started")}>Start</button>;
      }
    };

    return (
      <div className="controls">
        {renderStartStopButton()}
        <button className="button alert hollow" onClick={this.onStatusChange.bind(this,"stopped")}>Clear</button>
      </div>
    );
  }
}

Controls.propType = {
  countdownStatus: React.PropTypes.string.isRequired,
  onStatusChange: React.PropTypes.func.isRequired
}