import { Notify } from 'notiflix';
import { useEffect, useState } from 'react';

import { searchByQuery } from 'api';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';

export const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showBtn, setShowBtn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');

  const onSubmit = event => {
    event.preventDefault();
    setQuery(event.target.search.value);
    setIsLoading(true);
    setImages([]);
    setPage(1);
  };

  const onPage = () => {
    setPage(prevState => prevState + 1);
    setIsLoading(true);
  };

  const onClickImage = url => {
    setShowModal(true);
    setLargeImageURL(url);
  };

  const onModalClose = () => {
    setShowModal(false);
    setLargeImageURL('');
  };

  useEffect(() => {
    if (!query) return;

    const fetchGallery = async searchQuery => {
      try {
        const response = await searchByQuery(searchQuery, page);
        setImages(prevState => [...prevState, ...response]);
        if (response.length < 12) {
          setShowBtn(false);
        }
        if (response.length === 12) {
          setShowBtn(true);
        }
        if (response.length === 0) {
          Notify.failure('No matches found!');
        }
      } catch (error) {
        console.log('Error');
      } finally {
        setIsLoading(false);
      }
    };
    fetchGallery(query, page);
  }, [page, query]);

  return (
    <div>
      <Searchbar onSubmit={onSubmit} />
      <ImageGallery images={images} onClickImage={onClickImage} />
      {isLoading && <Loader />}
      {showBtn && <Button onPage={onPage} />}
      {showModal && (
        <Modal largeImageURL={largeImageURL} onModalClose={onModalClose} />
      )}
    </div>
  );
};
