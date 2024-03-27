import React, { useState } from 'react';
import { Col, Divider, Row, Input, Typography, Button } from 'antd';
import '../style/Card.css';
import ImageUpload from './ImageUpload';

const { Text } = Typography;

const TextInput = ({ value, onChange }) => {
  const wordCount = value.trim() === '' ? 0 : value.trim().split(/\s+/).filter(Boolean).length;
  return (
    <div>
      <div>
        <Text className='text' style={{ color: '#B6BBC5' }}>WORDS</Text>
        <Text className="word-count ">{`${wordCount}`}</Text>
        <Text className='text' style={{ marginLeft: '20px',color: '#B6BBC5' }}>CHARACTERS</Text>
        <Text className="char-count" style={{ marginLeft: '-30px' }}>{`${value.length}`}</Text>
        <Text className='text' style={{ marginLeft: '50px',color: '#B6BBC5'}}>SENTENCES</Text>
        <Text className="sentence-count" style={{ marginLeft: '-25px' }}>{`${value.trim().split(/[.!?]+/).filter(Boolean).length}`}</Text>
      </div>
      <Input.TextArea
        rows={4}
        placeholder="Enter text here..."
        value={value}
        onChange={onChange}
        style={{ border: '2px solid #E6F4FF', outline: 'none', height:'22vh', wordWrap: 'break-word', marginTop:'40px' }}
      />
      
    </div>
  );
};

const App = () => {
  const [blocks, setBlocks] = useState([]);

  const addBlock = (type) => {
    const newBlock = { type, content: '' };
    setBlocks([...blocks, newBlock]);
  };

  const moveBlock = (index, direction) => {
    const newBlocks = [...blocks];
    const block = newBlocks.splice(index, 1)[0];
    if (direction === 'up') {
      newBlocks.splice(index - 1, 0, block);
    } else {
      newBlocks.splice(index + 1, 0, block);
    }
    setBlocks(newBlocks);
  };

  return (
    <>
      <Divider style={{ border: 'none' }} orientation="left" />
      <div style={{ textAlign: 'center', marginTop: '50px', margin:'20px'}}>
        <Button type="primary" style={{ marginRight: '10px',backgroundColor: 'black' }} onClick={() => addBlock('text')}>Add Block</Button>
        <Button type="primary" style={{ marginLeft: '10px',backgroundColor: 'black' }} onClick={() => addBlock('image')}>Picture Block</Button>
      </div>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {blocks.map((block, index) => (
          <Col className="gutter-row" span={24} key={index}>
            <div className="wrapper">
              {/* Render each block based on its type */}
              {block.type === 'text' ? (
                <TextInput
                  value={block.content}
                  onChange={(e) => {
                    const newBlocks = [...blocks];
                    newBlocks[index].content = e.target.value;
                    setBlocks(newBlocks);
                  }}
                />
              ) : (
                <ImageUpload />
              )}
              <Button
                onClick={() => moveBlock(index, 'up')}
                disabled={index === 0}
                style={{ marginRight: '8px' }}
              >
                Move Up
              </Button>
              <Button
                onClick={() => moveBlock(index, 'down')}
                disabled={index === blocks.length - 1}
                style={{ marginLeft: '8px' }} // Add left margin
              >
                Move Down
              </Button>
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default App;