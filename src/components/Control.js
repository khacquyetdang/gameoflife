import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import './styles/Control.css';

const style = {
  margin: 12,
};

class Control extends React.Component {
  render() {
    return (
      <div className="Control">
          <RaisedButton label="Clear" primary={true} style={style}></RaisedButton>
          <RaisedButton label="Next" primary={true} style={style}></RaisedButton>
          <RaisedButton label="Start" primary={true} style={style}></RaisedButton>
      </div>
    );
  }
}

export default Control;
