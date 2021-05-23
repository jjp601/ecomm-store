import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollections } from '../redux/shop/shopSelectors';
import CollectionPreview from './CollectionPreview';

import '../styles/CollectionsOverview.scss';

const CollectionsOverview = ({ collections }) => (
    <div className="collections-overview">
        {
            collections.map(({ id, ...CollectionProps}) => (
                <CollectionPreview key={id} {...CollectionProps} />
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(CollectionsOverview);