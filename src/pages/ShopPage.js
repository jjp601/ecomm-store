import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../components/CollectionPreview';

import { selectCollections } from '../redux/shop/shopSelectors';

const ShopPage = ({ collections }) => {
    return (
        <div className="shop-page">
            {
                collections.map(({ id, ...CollectionProps}) => (
                    <CollectionPreview key={id} {...CollectionProps} />
                ))
            }
        </div>
    ); 
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(ShopPage);
