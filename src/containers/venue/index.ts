import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import Venue from './Venue';

import * as venueActions from './venueActions';

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        actions: bindActionCreators(venueActions, dispatch),
    };
};

const mapStateToProps = (state: any) => {
    return {
        amenities: state.venue.amenities
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Venue);