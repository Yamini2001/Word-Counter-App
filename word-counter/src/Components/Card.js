import React from 'react';
import { Col, Divider, Row } from 'antd';
import '../style/Card.css';
// const style = {
  
// };
const App = () => (
  <>
    {/* <Divider orientation="left">Responsive</Divider> */}
    <Row
      gutter={{
        xs: 8,
        sm: 16,
        md: 24,
        lg: 32,
      }}
    >
      <Col className="gutter-row" span={24}>
        <div className ="wrapper ">
           
            
        </div>
      </Col>
      
    </Row>
  </>
);
export default App;