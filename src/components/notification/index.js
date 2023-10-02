import 'antd/dist/reset.css';
import { notification } from 'antd';

const Notification = (type, title, description) => {
  notification[type]({
    message: title,
    description: description,
    top: 65,
  });
};

export default Notification;