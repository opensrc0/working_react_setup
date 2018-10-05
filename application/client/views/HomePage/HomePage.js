import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as testActionCreators from './../../store/test/testReducer';
import * as homeActionCreators from './../../store/homeReducer/homeReducer';
import Search from './../SearchPage';
import './homePage.css';

class HomePage extends Component {
  static componentWillServerRender = () => {
      // const promises = [];
      console.log('working ssr');
      // var a = fetch('https://sit-digital.ril.com/rildigitalws/v2/rrldigital/cms/pagedata?pageId=headerpage&pageType=contentPage')
      // .then((response) => response.json())
      // .then((response) => console.log(response));  

      // promises.push(a);
      // return Promise.all(promises);
    }
    componentDidMount = () => {
      // fetch('https://sit-digital.ril.com/rildigitalws/v2/rrldigital/cms/pagedata?pageId=headerpage&pageType=contentPage')
      //   .then((response) => response.json())
      //   .then((response) => console.log(response));      
        // _this.headerData = _this.prepareHeaderData(response.data);
        // _this.menuData = _this.prepareMenuData(response.data);

      // fetch(ServicePath.footer, function (response) {
      //   _this.footerData = response.data;
      // });
      const { homeActions } = this.props;
      homeActions.getTestData('himanshu');
      homeActions.getAPIData('other himanshu data');
      // Search.preload();
    }

    componentWillUnmount() {
      console.log('unmount home');
    }

    render() {
      // console.log(this.props);
      return (
        <React.Fragment>
          Home Page found
            <Link to="/search/">Search</Link>
        </React.Fragment>
      )
    }
}

HomePage.propTypes = {
  test: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  test: state.test,
});

const mapDispatchToProps = (dispatch) => ({
  testActions: bindActionCreators(testActionCreators, dispatch),
  homeActions: bindActionCreators(homeActionCreators, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);