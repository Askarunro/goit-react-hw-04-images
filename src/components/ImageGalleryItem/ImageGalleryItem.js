import i from "./ImageGalleryItem.module.css";

function Item({ hits, open, toggleModal }) {
  const onClick = (evt) => {
    open(evt.currentTarget.dataset.url);
  };

  return (
    <>
      {hits.map((hit) => (
        <li key={hit.id} className={i.item} onClick={toggleModal}>
          <img
            src={hit.webformatURL}
            className={i.img}
            data-url={hit.largeImageURL}
            onClick={onClick}
          />
        </li>
      ))}
    </>
  );
}

export default Item;
