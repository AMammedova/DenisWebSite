// import React from "react";
// function Portfolio(){
//         return(
//             <>
//             <p style={{color:"white"}}>Portfolio</p>
//             </>
//       );
    
// }
// export default Portfolio;
import React from "react";
import { Tabs, Tab, Popover, MenuItem } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { allWorks } from "./ServiceAllWorksItems";
import ServiceRightPartText from "./ServiceRightPartText";
import { webSites } from "./ServiceWebSitesItems";

const styles = {
  Tab: {
    flexDirection: "row-reverse",
    color:"white"
  }
};
function allwork(){
  let arr = [];
  allWorks.map((item)=>{
    console.log(item);
    arr.push(item);
 })
  return arr.map(x=>
    <ServiceRightPartText item={x}/>
    );
 
}
function websites(){
  let arr = [];
  webSites.map((item)=>{
    console.log(item);
    arr.push(item);
 })
  return arr.map(x=>
    <ServiceRightPartText item={x}/>
    );
 
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

  handleMenuItemClick(menuItem) {
    this.handleClose();
    this.setState({
      label: "Alworks",
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
        <Tabs
          value={value}
          indicatorColor="primary"
          onChange={this.handleChange}
          
        >
          {/* <Tab
            value="One"
            label="One"
            onClick={() => this.setState({ content: "One" })}
          />
          <Tab
            value="Two"
            label="Two"
            onClick={() => this.setState({ content: "Two" })}
          /> */}
          <Tab
            classes={{ wrapper: classes.Tab }}
            value="More"
            label={this.state.label}
            onClick={() => this.setState({ content: this.state.label })}
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
          <MenuItem onClick={() => this.handleMenuItemClick(allwork())}>
          All Works
          </MenuItem>
          <MenuItem onClick={() => this.handleMenuItemClick(websites())}>
          Portfolio
          </MenuItem>
          <MenuItem onClick={() => this.handleMenuItemClick("Settings")}>
          Settings
          </MenuItem>
        </Popover>
      </>
    );
  }
}

export default withStyles(styles)(TabDemo);
