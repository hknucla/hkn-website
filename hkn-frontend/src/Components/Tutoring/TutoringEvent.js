import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    start: PropTypes.object.isRequired,
    end: PropTypes.object.isRequired,
    value: PropTypes.string.isRequired,
};


class TutoringEvent extends React.PureComponent {
    render() {
        const {
            start,
            end,
            value,
        } = this.props;
        return (
            <div className="event">
                <span>{`${start.format('h:mm A')} - ${end.format('h:mm A')}`}</span>
                <br />
                {value}
            </div>
        );
    }
}

TutoringEvent.propTypes = propTypes;
export default TutoringEvent;