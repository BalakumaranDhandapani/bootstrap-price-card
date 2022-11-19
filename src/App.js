import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container py-5">
      <div className="row">
        <div className='col-lg-4'>
          <div className='card mb-5 mb-lg-0'>
            <div className='card-body'>
              <h5 className='card-title text-muted text-center'>FREE</h5>
              <h6 className='card-price text-center'><i className="fa fa-usd"></i>0<sub className='month'>/month</sub></h6>
              <hr></hr>
              <ul className='details'>
                <li><i className="fa fa-check"></i>Single User</li>
                <li><i className="fa fa-check"></i>5GB Storage</li>
                <li><i className="fa fa-check"></i>Unlimited Public Projects</li>
                <li><i className="fa fa-check"></i>Community Access</li>
                <li className='text-muted'><i class="fa fa-times"></i>Unlimited Private Projects</li>
                <li className='text-muted'><i class="fa fa-times"></i>Dedicated Phone Support</li>
                <li className='text-muted'><i class="fa fa-times"></i>Free Subdomain</li>
                <li className='text-muted'><i class="fa fa-times"></i>Monthly Status Reports</li>
              </ul>
              <div className='button'>
                <a href="#" class="btn text-uppercase btn-block">Submit</a>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-4'>
          <div className='card mb-5 mb-lg-0'>
            <div className='card-body'>
              <h5 className='card-title text-muted text-center'>PLUS</h5>
              <h6 className='card-price text-center'><i className="fa fa-usd"></i>9<sub className='month'>/month</sub></h6>
              <hr></hr>
              <ul className='details'>
                <li><i className="fa fa-check"></i><b>5 Users</b></li>
                <li><i className="fa fa-check"></i>50GB Storage</li>
                <li><i className="fa fa-check"></i>Unlimited Public Projects</li>
                <li><i className="fa fa-check"></i>Community Access</li>
                <li><i className="fa fa-check"></i>Unlimited Private Projects</li>
                <li><i className="fa fa-check"></i>Dedicated Phone Support</li>
                <li><i className="fa fa-check"></i>Free Subdomain</li>
                <li className='text-muted'><i class="fa fa-times"></i>Monthly Status Reports</li>
              </ul>
              <div className='button'>
                <a href="#" class="btn text-uppercase btn-block">Submit</a>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-4'>
          <div className='card mb-5 mb-lg-0'>
            <div className='card-body'>
              <h5 className='card-title text-muted text-center'>PRO</h5>
              <h6 className='card-price text-center'><i className="fa fa-usd"></i>49<sub className='month'>/month</sub></h6>
              <hr></hr>
              <ul className='details'>
                <li><i className="fa fa-check"></i><b>Unlimited Users</b></li>
                <li><i className="fa fa-check"></i>150GB Storage</li>
                <li><i className="fa fa-check"></i>Unlimited Public Projects</li>
                <li><i className="fa fa-check"></i>Community Access</li>
                <li><i className="fa fa-check"></i>Unlimited Private Projects</li>
                <li><i className="fa fa-check"></i>Dedicated Phone Support</li>
                <li><i className="fa fa-check"></i> <b>Unlimited</b> Free Subdomains</li>
                <li><i className="fa fa-check"></i>Monthly Status Reports</li>
              </ul>
              <div className='button'>
                <a href="#" class="btn text-uppercase btn-block">Submit</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
