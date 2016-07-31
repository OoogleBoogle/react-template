import React, {Component} from 'react';
import { connect } from 'react-redux';
import { changeTitle } from '../redux/actions';


class Main extends Component {
  clickHandler() {
    this.props.changeTitle();
  }
  render() {
    return <h1 onClick={this.clickHandler.bind(this)}>{this.props.state.title}</h1>;
  }
}


const mapStateToProps = (state, props) => {
  return {
    state: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeTitle: () => {
      dispatch(changeTitle());
    }
  }
}

const Container = connect(mapStateToProps, mapDispatchToProps)(Main);

export default Container;
