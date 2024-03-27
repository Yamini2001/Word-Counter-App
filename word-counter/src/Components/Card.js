import React, { useState } from 'react';
import { Col, Divider, Row, Input, Typography, Button } from 'antd';
import ImageUpload from './ImageUpload'; // Import the ImageUpload component
import '../style/Card.css';

const { Text } = Typography;

const App = () => {
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [sentenceCount, setSentenceCount] = useState(0);
  const [showBlocks, setShowBlocks] = useState(false); // State to manage whether blocks should be displayed

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    // Count words and characters in the text
    const words = newText.trim().split(/\s+/);
    setWordCount(words.length);
    setCharCount(newText.length);
    const sentences = newText.trim().split(/[.!?]+/).filter(Boolean); // Remove empty strings
    setSentenceCount(sentences.length);
  };

  const handleAddBlock = () => {
    setShowBlocks(true); // Set showBlocks state to true when the "Add Block" button is clicked
  };
  const handleAddPicture = () => {
    setShowBlocks(true); // Set showBlocks state to true when the "Add Block" button is clicked
  };


  return (
    <>
      <Divider style={{border:'none'}} orientation="left" ></Divider>
      {!showBlocks && ( 
        <div style={{ textAlign: 'center', marginTop: '50px', margin:'20px'}}>
          <Button type="primary" style={{ marginRight: '10px' }} onClick={handleAddBlock}>Add Block</Button>
          <Button type="primary" style={{ marginLeft: '10px' }}  onClick={handleAddPicture}>Picture Block</Button>
        </div>
      )}
      {showBlocks && ( // Show blocks if showBlocks is true
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={24}>
            <div className="wrapper">
              <Text className='text' style={{ color: '#B6BBC5' }}>WORDS</Text>
              <Text className="word-count ">{`${wordCount}`}</Text>
              <Text className='text' style={{ marginLeft: '20px',color: '#B6BBC5' }}>CHARACTERS</Text>
              <Text className="char-count" style={{ left: '-70px' }}>{`${charCount}`}</Text>
              <Text className='text' style={{ marginLeft: '20px',color: '#B6BBC5'}}>SENTENCES</Text>
              <Text className="sentence-count" style={{ left: '-70px' }}>{`${sentenceCount}`}</Text>
              {/* <Divider style={{border:'none'}} orientation="left" ></Divider> */}
              <Input.TextArea
                rows={4}
                placeholder="Enter text here..."
                value={text}
                onChange={handleTextChange}
                style={{ border: '2px solid #E6F4FF', outline: 'none',height:'22vh',wordWrap: 'break-word', }}
              />
            </div>
          </Col>
          <Col className="gutter-row" span={24}>
            <div className="wrapper">
              <ImageUpload /> {/* Include the ImageUpload component here */}
            </div>
          </Col>
        </Row>
      )}
    </>
  );
};

export default App;
