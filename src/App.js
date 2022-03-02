import logo from './logo.svg';
import './App.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-3 bg-primary">  
            <div className="row border-bottom border-5">
              <div className="col-sm-12 ">
                Valex
              </div>
            </div>
            <div className="row border-bottom border-5">
              <div className="col-sm-12">
                Valex
              </div>
            </div>
        </div>
        <div className="col-9 bg-info">  
          <div className="row border-bottom border-5">
              <div className="col-sm-12 ">
                Icon1 Icon2 
              </div>
          </div>
          <div className="row border-bottom border-5">
              <div className="col-sm-4 ">
                Welcome
              </div>
              <div className="col-sm-2 offset-sm-2">
                Customer rating
              </div>
              <div className="col-sm-2">
                Online sales
              </div>
              <div className="col-sm-2">
                Offline sales
              </div>
          </div>
          <div className="row border-bottom border-5">
              <div className="col-sm-4 card py-4">
                <div className="col-sm-4 card bg-light py-4">
                  Welcome
                </div>
              </div>
              <div className="col-sm-4 card bg-warning py-4">
              <div className="col-sm-4 card bg-info py-4">
              Customer rating
                </div>
              </div>
              <div className="col-sm-2 card bg-success py-4">
              <div className="col-sm-4 card bg-info py-4">
              Online sales
                </div>
              </div>
              <div className="col-sm-2 card bg-danger py-4">
              <div className="col-sm-4 card bg-info py-4">
              Offline sales
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>

    // <Container>
    //   <Row>
    //     <Col sm="3">
    //     </Col>
    //   </Row>
    //   <Row>

    //   </Row>
    // </Container>
  );
}

export default App;

// @media only screen and (min-width: 500px) {
//   .col-sm-3 {
//     width:30%;
//   }
//   .col-sm-6 {
//     width:60%;
//   }
// }

// @media only screen and (min-width: 700px) {
//   .col-md-3 {
//     width:30%;
//   }
//   .col-md-6 {
//     width:60%;
//   }
// }


// @media only screen and (min-width: 900px) {
//   .col-lg-3 {
//     width:30%;
//   }
//   .col-lg-6 {
//     width:60%;
//   }
// }