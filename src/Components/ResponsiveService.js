import React from "react";
import { Tabs, Tab, Popover, MenuItem } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { allWorks } from "./ServiceAllWorksItems";
import ServiceRightPartText from "./ServiceRightPartText";
import { webSites } from "./ServiceWebSitesItems";
import "../Components/Service.css";
const styles = {
  Tab: {
    flexDirection: "row-reverse",
    color:"white",
    marginBottom: "21%"
  }
};
const firstTitle="Allwork";
const secondTitle="Portfolio";
const thirdTitle="Setting";
function allwork(){
  let arr = [];
  allWorks.map((item)=>{
    console.log(item);
    arr.push(item);
 })
 return<div className='service_page_right_part'>
 {arr.map((item)=>{
        return <ServiceRightPartText item={item}/>
     })}
  </div>  
 
}
function websites(){
  let arr = [];
  webSites.map((item)=>{
    console.log(item);
    arr.push(item);
 })
 
  return<div className='service_page_right_part'>
 {arr.map((item)=>{
        return <ServiceRightPartText item={item}/>
     })}
  </div>  
 
}
class TabDemo extends React.Component {
  constructor() {
    super();

    this.state = {
      value: "All Works",
      label: "All Works",
      content: allwork(),
      anchorEl: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleMenuItemClick = this.handleMenuItemClick.bind(this);
  }

  handleChange(event, value) {
    this.setState({ value });
  }

  handleClick(event) {
    event.stopPropagation();
    this.setState({
      anchorEl: event.currentTarget
    });
  }

  handleClose() {
    this.setState({
      anchorEl: null
    });
  }

  handleMenuItemClick(menuItem,textItem) {
    this.handleClose();
    this.setState({
      label: textItem,
      content: menuItem,
      value: "More"
    });
   
   
  }
 

  render() {
    const { value } = this.state;
    const open = Boolean(this.state.anchorEl);
    const { classes } = this.props;
   
    return (
      <>
      <div className='service_page'> 
       <Tabs
          value={value}
        
          onChange={this.handleChange}
          
        >
           
          <Tab
            classes={{ wrapper: classes.Tab }}
            value="More"
            label={this.state.label}
            onClick={() => this.setState({ content: this.state.content })}
            icon={<ArrowDropDownIcon onClick={this.handleClick} />}
            
          />
        </Tabs>
        {this.state.content}
         
        <Popover
          open={open}
          anchorEl={this.state.anchorEl}
          onClose={this.handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "center"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center"
          }}
        >
         
         
          <MenuItem onClick={() => this.handleMenuItemClick(allwork(),firstTitle)}>
          All Works
          </MenuItem>
          <MenuItem onClick={() => this.handleMenuItemClick(websites(),secondTitle)}>
          Portfolio
          </MenuItem>
          <MenuItem onClick={() => this.handleMenuItemClick("Settings",thirdTitle)}>
          Settings
          </MenuItem>
        </Popover></div>
      
      </>
    );
  }
}

export default withStyles(styles)(TabDemo);
