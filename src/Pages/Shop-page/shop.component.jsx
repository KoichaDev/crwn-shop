import React, { Component } from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../Components/collection-preview/collection-preview.component';

class ShopPage extends Component {
  state = {
    collections: SHOP_DATA,
  };

  render() {
    const { collections } = this.state;
    return (
      <div className='shop-page'>
        {collections.map(({ id, ...otherColletionProps }) => (
          <CollectionPreview key={id} {...otherColletionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
