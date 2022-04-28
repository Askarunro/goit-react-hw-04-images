import i from './ImageGalleryItem.module.css'
import React,{Component} from 'react'

class Item extends Component {

  onClick=(e)=>{
    this.props.open(e.currentTarget.dataset.url)
  }

render(){
  return (
    <>
      {this.props.hits.map((hit) => (
          <li key={hit.id} className={i.item} onClick={this.props.toggleModal}>
              <img src={hit.webformatURL} className={i.img} data-url={hit.largeImageURL}  onClick={this.onClick}/>
          </li>
        ))}
    </>
  );
}
}

export default Item;
