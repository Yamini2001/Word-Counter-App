import { Menu, Button, Drawer } from 'antd';
import { useState } from 'react';

const NavigationBar = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onClose = () => {
    setDrawerVisible(false);
  };

  return (
    <nav>
      <div className="logo_container">
      Logo
      </div>

      <div className="menu_container">
        <Menu mode="horizontal">
          <Menu.Item key="home">
            <a href="#" className="active">Home</a>
          </Menu.Item>
          <Menu.Item key="why-us">
            <a href="#">Why Us</a>
          </Menu.Item>
          <Menu.Item key="review">
            <a href="#">Blog</a>
          </Menu.Item>
          <Menu.Item key="blog">
            <a href="#">Login</a>
          </Menu.Item>
        </Menu>
      </div>

      <div className="btn_container">
        <Button type="primary" onClick={showDrawer} className="btn_register">
          Register
        </Button>
      </div>

      <Drawer
        title="Menu"
        placement="left"
        closable={false}
        onClose={onClose}
        visible={drawerVisible}
      >
        <Menu mode="vertical">
          <Menu.Item key="home">
            <a href="www.ziontutorial.com" className="active">Home</a>
          </Menu.Item>
          <Menu.Item key="why-us">
            <a href="www.ziontutorial.com">Why Us</a>
          </Menu.Item>
          <Menu.Item key="review">
            <a href="www.ziontutorial.com">Review</a>
          </Menu.Item>
          <Menu.Item key="blog">
            <a href="www.ziontutorial.com">Blog</a>
          </Menu.Item>
          <Menu.Item key="sign-in">
            <a href="www.ziontutorial.com">Sign In</a>
          </Menu.Item>
        </Menu>
      </Drawer>
    </nav>
  );
};

export default NavigationBar;

