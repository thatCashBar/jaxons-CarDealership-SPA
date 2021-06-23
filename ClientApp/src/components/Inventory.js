import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


export class Inventory extends React.Component {

  constructor(props) {
    super(props)
  }

  returnListOfCarsInHtml(listedCars) {
    const tmpCarsList = []
    for (let i = 0; i < listedCars.length; i++) {
      tmpCarsList.push(
        <div key={i} style={{ margin: '8px 8px' }}>
          <Card>
            <Card.Header>Car {i + 1}</Card.Header>
            <Card.Body>
              <b>Owner:</b> {listedCars[i].owner}
              <br />
              <b>Make:</b> {listedCars[i].make}
              <br />
              <b>Model:</b> {listedCars[i].model}
              <br />
              <b>Year:</b> {listedCars[i].year}
              <br />
              <b>Color:</b> {listedCars[i].color}
              <br />
              <b>Price:</b> {(listedCars[i].price)}
            </Card.Body>
            <Card.Footer><p>Listed By: {listedCars[i].user}</p></Card.Footer>
          </Card>
        </div>
      )
    }
    return tmpCarsList
  }

  componentDidMount() {
    this.props.getCars();
    if (this.props.carPosted) {
      this.props.ToggleCarPostedBool();
    }
  }

  render() {
    return (
      <div className="cars-inventory">
        <h1 style={{ textAlign: 'center' }}>Inventory</h1>
        <CardGroup style={{ margin: '16px 32px', justifyContent: 'center' }}>
          {this.returnListOfCarsInHtml(this.props.carsList)}
        </CardGroup>
      </div>
    );
  }
}

export default Inventory;