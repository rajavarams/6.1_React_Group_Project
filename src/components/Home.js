import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardColumns } from "react-bootstrap";
import '../App.css';

class Home extends Component {
    render(){
      return(
        <div>
          {/* <h4 className="heading">WinMart</h4> */}
          
          <p className="para">Shop online for everything from clothing to electronics</p>
        <CardColumns className="display">
        <Card border="secondary" style={{ width: '22rem' }}>
          <Card.Img variant="top" src="https://images.unsplash.com/photo-1597248881519-db089d3744a5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c25lYWtlcnN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60" />
          <Card.Body>
            <Card.Title>Shoes </Card.Title>
            <Card.Text>
            Gear up to move more with essentials for all your adventures{" "}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card border="secondary" style={{ width: '22rem' }}>
          <Card.Img variant="top" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8ZWxlY3Ryb25pY3N8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60" />
          <Card.Body>
            <Card.Title>Electronics</Card.Title>
            <Card.Text>
              Handpicked electronics. We've done the research so you don't have to{" "}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card border="secondary" style={{ width: '22rem' }}>
          <Card.Img variant="top" src="https://images.unsplash.com/photo-1493150134366-cacb0bdc03fe?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVybml0dXJlJTIweWVsbG93fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60" />
          <Card.Body>
            <Card.Title>Furniture</Card.Title>
            <Card.Text>
             Make home your happy place. Shop our wide variety of antique furniture.{" "}
             <br></br>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card border="secondary" style={{ width: '22rem' }}>
          <Card.Img variant="top" src="https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2xvdGhpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
          <Card.Body>
            <Card.Title>Apparel</Card.Title>
            <Card.Text>
            Get ready for the Spring ahead with all our softest tones and colors.{" "}
            </Card.Text>
          </Card.Body>
        </Card>
      </CardColumns>
      </div>
  );
    }
  }
  export default Home;
