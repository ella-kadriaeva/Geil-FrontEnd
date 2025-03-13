import React, { useState } from 'react';
import styles from './PhotoModal.module.scss';

const Photo = () => {
  const [selectedImage, setSelectedImage] = useState('');

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    const modal = document.getElementById('image-modal');
    modal.showModal(); 
  };

  const closeModal = () => {
    const modal = document.getElementById('image-modal');
    modal.close(); 
  };

  return (
    <div>
      <div className="gallery">
 
          <img
            key={index}
            src={image}
            alt={`image-${index}`}
            className="thumbnail"
            onClick={() => openModal(image)} 
          />

      </div>

      <dialog id="image-modal" className={styles.modal}>
        <div className={styles.modalContent}>
          <button className={styles.closeBtn} onClick={closeModal}>
            X
          </button>
          <img
            src={selectedImage}
            alt="Modal Content"
            className={styles.modalImage}
          />
        </div>
      </dialog>
    </div>
  );
};

export default Photo;
