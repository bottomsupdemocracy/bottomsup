import IssueTile from './issueTile.jsx';

import React from 'react'


// PROPS:
// page: number
// nPages: number
// nextPageHandler: () => void;
// prevPageHandler: () => void;

export default React.createClass({

  

  render(){
    console.log(this.props.issues);
    return (
    <div style={WRAPPER_STYLES}>
        { this.props.issues.map((issue, i) => {
         return <IssueTile key={i} issue={issue} >
        </IssueTile>
        })
        }
    </div>)
  },

  nextPageHandler: () => {

      if(this.props.page !== (nPages-1)){
          this.props.nextPageHandler();
      }
        
  },

  prevPageHandler:  () => {

      if(this.props.page !== (0)){
          this.props.prevPageHandler();
      }

  }

})

const ISSUE_FILTER_WRAPPER_STYLES = {
    height: "50px",
    width: "100%",
    boxSizing: "border-box",
    backgroundColor: "#ccc",

}

const WRAPPER_STYLES = {
    height: "450px",
    boxSizing: "border-box",
    padding: 10,
    display: "flex",
    flexWrap: "wrap"
}