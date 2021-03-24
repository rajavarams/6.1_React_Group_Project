import React, {Component} from 'react';
import PropTypes from 'prop-types'; // be sure to include this!
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

class ShoppingItem extends Component {
  constructor() {
    super();
  }
  state = { showing: false };
  render() {
    const { showing } = this.state;
    return (    
          <div className='col-3 card' style={{backgroundColor: 'darkslategray'}} style={{padding: '30px'}}  >
                  <img
                      src={this.props.itemImg}
                      className='card-img-top rest-logo'
                      
                      onClick={() => this.setState({ showing: !showing })}   
                  />
                  <div className='card-body'>
                      <p className='department'>{this.props.department}</p>
                      <p className='title'>{this.props.title}</p>
                      { showing
                          ? <p>{this.props.description}</p>
                          : null
                      }
                      <p className='price'>Price: {this.props.price}</p>                
                  </div>
                  
              </div>
    );
  }
}
ShoppingItem.defaultProps = {
    itemImg: "https://images.unsplash.com/photo-1597248881519-db089d3744a5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c25lYWtlcnN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60",
    title: "[INSERT NAME HERE]",
    department: "[INSERT DEPARTMENT HERE]",
    description: "INSERT DESCRIPTION HERE]",
    price: "[INSERT PRICE HERE]",
};
ShoppingItem.propTypes = {
    title: PropTypes.string,
    department: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.string,
};
export default ShoppingItem;