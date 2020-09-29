import React, {Component} from 'react';
import WeekCalendar, {Event} from 'react-week-calendar';
import moment from 'moment';
import 'react-week-calendar/dist/style.css';
import './Tutoring.scss';
import TutoringEvent from './TutoringEvent';

const M=1;
const T=2;
const W=3;
const R=4;
const F=5;

export default class TutoringCalendar extends Component{
    constructor(props) {
        super(props);
        this.state = {
            lastUid: 4,
            selectedIntervals: [
                {
                    uid: 1,
                    start: this.createMoment({h: 14, m: 0, d: M}),
                    end: this.createMoment({ h: 14, m: 30, d: M}),
                    value: "Kayla, Athya"
                },
                {
                    uid: 2,
                    start: this.createMoment({ h: 13, m: 0, d: W}),
                    end: this.createMoment({ h: 13, m: 30, d: W}),
                    value: "Athya, Nico"
                },
                {
                    uid: 3,
                    start: this.createMoment({ h: 15, m: 0, d: F }),
                    end: this.createMoment({ h: 15, m: 30, d: F }),
                    value: "Nico, Kayla"
                },
            ]
        }
    }

    createMoment=(props)=>{
        const monday=this.getMonday();
        const adjust = props.d-1;
        const res=monday.set('hour',props.h).set('minute',props.m).add(adjust,'d')
        return res;
    }

    getMonday=()=>{
        const today=moment().weekday();
        if(today===1){
            return today;
        }
        const adjust=1-today;
        return moment().add(adjust, 'days').startOf('day');
    }

    render(){
        return(
            <div className="TutoringCalendar">
                <WeekCalendar 
                    scaleUnit="30" 
                    startTime={moment({h: 12, m: 0})}
                    endTime={moment({h: 19, m: 30})}
                    dayFormat='dddd'
                    scaleFormat='h:mm A'
                    firstDay={this.getMonday()}
                    numberOfDays="5"
                    cellHeight={40}
                    selectedIntervals={this.state.selectedIntervals}
                    eventComponent={TutoringEvent}
                />
            </div>
        )
    };
}