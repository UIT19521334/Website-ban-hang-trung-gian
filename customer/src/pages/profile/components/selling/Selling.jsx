import React from 'react';
import { Tab , Tabs } from 'react-bootstrap';
const Selling = () => {
  const [key, setKey] = React.useState('current');
  return (
    <div>
      <div className="header">
        <h3>Selling</h3>
      </div>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="current" title="Current">
          <div className="home">
            home
          </div>
        </Tab>
        <Tab eventKey="pending" title="Pending">
          <div className="ff">
            profile
          </div>
        </Tab>
        <Tab eventKey="history" title="History">
          <div className="s">
            sss
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}

export default Selling;
