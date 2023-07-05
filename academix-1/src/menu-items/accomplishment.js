// assets
import { BankOutlined, FileJpgOutlined } from '@ant-design/icons';

// icons
const icons = {
  BankOutlined,
  FileJpgOutlined
};

// ==============================|| MENU ITEMS - Accomplishment  ||============================== //

const accomplishment = {
  id: 'accomplishment',
  title: 'Accomplishment',
  type: 'group',
  children: [
    {
      id: 'reward',
      title: 'Reward',
      type: 'item',
      url: '/reward',
      icon: icons.BankOutlined
    },
    {
      id: 'certification',
      title: 'Certificate',
      type: 'item',
      url: '/certificate',
      icon: icons.FileJpgOutlined
    }
  ]
};

export default accomplishment;
