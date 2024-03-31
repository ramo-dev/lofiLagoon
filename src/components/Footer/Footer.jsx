import { Flex } from 'antd';
import './FooterStyles.css'
import { GithubFilled } from '@ant-design/icons';
const Footer = () => {
    return (
      <footer>
        <Flex align="center" gap="1rem">
          <p>© 2024 - All rights reserved</p>
        </Flex>
      </footer>
    );
}
 
export default Footer;