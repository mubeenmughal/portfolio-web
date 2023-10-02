import React from 'react';
import { Modal } from 'antd';

const CustomModal = ({
  isModalOpen,
  setIsModalOpen,
  projectInfo,
  setProjectInfo
}) => {
  const { title, description, role } = projectInfo || {};

  const handleOk = () => {
    setIsModalOpen(false);
    setProjectInfo({});
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal title={title} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <h3>Info</h3>
      <p>{description}</p>
      <h3>My Role</h3>
      <p>{role}</p>
    </Modal>
  );
};

export default CustomModal;