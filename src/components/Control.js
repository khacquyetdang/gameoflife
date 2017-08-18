import React from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Slider from 'material-ui/Slider';
import './styles/Control.css';
import { setBoardSize, nextGen, clearBoard } from '../actions';
const styles = {
    customBtn : {
        margin: 5,
    },
    customSlider : {
        width: 80,
        height: 10,
        margin: 5,
    }
};

class Control extends React.Component {
  render() {
    return (
      <div className="Control">
          <Slider name="Grid size" min={5} max={100}
              value={this.props.boardSize}
              style={styles.customSlider}
              step={1}
              onChange={(event, value) => this.props.setBoardSize(value)}>
          </Slider>
          <div className="gridSize">{"Grid size : " + this.props.boardSize}</div>
          <RaisedButton label="Clear" primary={true} style={styles.customBtn}
              onClick={() => this.props.clearBoard()}></RaisedButton>
          <RaisedButton label="Next" primary={true} style={styles.customBtn}
              onClick={() => this.props.nextGen()}></RaisedButton>
          <RaisedButton label="Start" primary={true} style={styles.customBtn}></RaisedButton>
      </div>
    );
  }
}

function mapStateToProps(state)
{
    const { boardSize } = state;
    return {
        boardSize
    };
}

export default connect(mapStateToProps, { setBoardSize, nextGen, clearBoard }) (Control);
