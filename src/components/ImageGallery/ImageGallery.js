import Item from "..//ImageGalleryItem";
import l from "./ImageGallery.module.css";
import PropTypes from "prop-types";


function List({ hits, openModal, onClick }) {
  return (
    <ul className={l.list}>
      <Item hits={hits} open={openModal} toggleModal={onClick} />
    </ul>
  );
}

export default List;


List.propTypes = {
  hits: PropTypes.array,
  openModal: PropTypes.func,
  onClick: PropTypes.func,
};