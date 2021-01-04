import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    start: PropTypes.object.isRequired,
    end: PropTypes.object.isRequired,
    value: PropTypes.string.isRequired,
};


class TutoringEvent extends React.PureComponent {
    getCSSName=(props)=>{
        if(props.highlighted.includes(props.uid)){
            return "event_highlighted";
        }
        return "event";
    }

    render() {
        const {
            uid,
            start,
            end,
            value,
            highlighted,
        } = this.props;
        return (
            <div className={this.getCSSName(this.props)}>
                <span>{`${start.format('h:mm A')} - ${end.format('h:mm A')}`}</span>
                <br />
                {value}
            </div>
        );
    }
}

TutoringEvent.propTypes = propTypes;
export default TutoringEvent;