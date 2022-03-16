import React from 'react';
import PropTypes from 'prop-types';
import styled from './Message.module.css'




const Message = ({
  createdAt = null,
  text = '',
  displayName = '',
  photoURL = '',
}) => {
  if (!text) return null;

  return (
    <div className={styled.messageBox}>
      {photoURL ? (
        <img
          src={photoURL}
          alt="Avatar"
          className="rounded-full mr-4"
          width={45}
          height={45}
        />
      ) : null}
      <div>
        <div className="flex items-center mb-1">
          {displayName ? (
            <p className="mr-2 text-primary-500">{displayName}</p>
          ) : null}
          {createdAt?.seconds ? (
            <span className="text-gray-500 text-xs">
             
            </span>
          ) : null}
        </div>
        <p>{text}</p>
      </div>
    </div>
  );
};

Message.propTypes = {
  text: PropTypes.string,
  createdAt: PropTypes.shape({
    seconds: PropTypes.number,
  }),
  displayName: PropTypes.string,
  photoURL: PropTypes.string,
};

export default Message;