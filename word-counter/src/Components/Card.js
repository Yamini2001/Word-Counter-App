
// Card.js code
import React, { useState } from 'react';
import { Col, Divider, Row, Input, Typography } from 'antd';
import ImageUpload from './ImageUpload'; // Import the ImageUpload component
import '../style/Card.css';

const { Text } = Typography;

const App = () => {
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [sentenceCount, setSentenceCount] = useState(0);

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

  return (
    <>
      <Divider orientation="left"></Divider>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={24}>
          <div className="wrapper">
            <Text className='text'>WORDS</Text>
            <Text className="word-count">{`${wordCount}`}</Text>
            <Text style={{ marginLeft: '20px' }}>CHARACTERS</Text>
            <Text className="char-count" style={{ left: '-70px' }}>{`${charCount}`}</Text>
            <Text style={{ marginLeft: '20px' }}>SENTENCES</Text>
            <Text className="sentence-count" style={{ left: '-70px' }}>{`${sentenceCount}`}</Text>
            <Input.TextArea
              rows={4}
              placeholder="Enter text here..."
              value={text}
              onChange={handleTextChange}
            />
          </div>
        </Col>
        <Col className="gutter-row" span={24}>
          <div className="wrapper">
            <ImageUpload /> {/* Include the ImageUpload component here */}
          </div>
        </Col>
      </Row>
    </>
  );
};

export default App;
