
import './App.css';
import Dropdown from 'react-bootstrap/Dropdown';

function App() {
  return (
    <div className="wrapper">
      <h1>Store Maintainence</h1>
      <form>
        <fieldset>
          <label>
            <span>Store Number: &nbsp;&nbsp;</span>
            <input name="store_number" type="number" placeholder='123..' />
            <br></br>
            <span>Name: &nbsp;&nbsp;</span>
            <input name="name" placeholder='College Book Store' />
            <div>
              <br></br>
              <span>Address1: &nbsp;&nbsp;</span>
              <input name="name" placeholder='Address1' />
              <br></br>
              <span>City: &nbsp;&nbsp;</span>
              <Dropdown>
                <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                  City
                </Dropdown.Toggle>

                <Dropdown.Menu variant="dark">
                  <Dropdown.Item href="#/action-1" active>Action</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              State/Province:
              <Dropdown>
                <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                  State/Province
                </Dropdown.Toggle>

                <Dropdown.Menu variant="dark">
                  <Dropdown.Item href="#/action-1" active>Action</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <span>ZIP: &nbsp;&nbsp;</span>
              <input name="zip" type="number" placeholder='12345..' />
              <span>Phone: &nbsp;&nbsp;</span>
              <input name="phone" type="number" placeholder='1234567890..' />
              <span>EXT: &nbsp;&nbsp;</span>
              <input name="ext" type="number" />
              <br></br>
              <span>FAX: &nbsp;&nbsp;</span>
              <input name="fax" type="number" placeholder='123456789..' />
            </div>
            <br></br>
            <div>
              <span>Address2 &nbsp;&nbsp;</span>
              <input name="name" placeholder='Address2' />
              <input type="checkbox" /> Same as Address1
              <br></br>
              <span>City: &nbsp;&nbsp;</span>
              <Dropdown>
                <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                  City
                </Dropdown.Toggle>

                <Dropdown.Menu variant="dark">
                  <Dropdown.Item href="#/action-1" active>Action</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              State/Province:
              <Dropdown>
                <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                  State/Province
                </Dropdown.Toggle>

                <Dropdown.Menu variant="dark">
                  <Dropdown.Item href="#/action-1" active>Action</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <span>ZIP: &nbsp;&nbsp;</span>
              <input name="zip" type="number" placeholder='12345..' />
              <span>Phone: &nbsp;&nbsp;</span>
              <input name="phone" type="number" placeholder='1234567890..' />
              <span>EXT: &nbsp;&nbsp;</span>
              <input name="ext" type="number" />
              <br></br>
              <span>FAX: &nbsp;&nbsp;</span>
              <input name="fax" type="number" placeholder='123456789..' />
            </div>
            <br></br>
            <span>Email: &nbsp;&nbsp;</span>
            <input name="email" placeholder='abc@gmail.com' />
            <br></br>
            <span>Default Finance Charge: &nbsp;&nbsp;</span>
            <input name="finance" defaultValue="1.5" type="float" />
            <br></br>
            <span>Default Number of days: &nbsp;&nbsp;</span>
            <input name="finance" />
            <br></br>
            <span>Current Accounting Period: &nbsp;&nbsp;</span>
            <input name="finance" />
            <br></br>
            <span>Date Of last Archive: &nbsp;&nbsp;</span>
            <input name="finance" type="Datetime" />
            <br></br>
            <span>Cycle Begin Date: &nbsp;&nbsp;</span>
            <input name="finance" />
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
