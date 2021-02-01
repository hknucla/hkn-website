import React, { Component } from 'react';

import WeekCalendar, { Event } from 'react-week-calendar';
import moment from 'moment';
import './calendarStyle.css';
import './Tutoring.scss';
import TutoringEvent from './TutoringEvent';

const M = 1;
const T = 2;
const W = 3;
const R = 4;
const F = 5;

export default class TutoringCalendar extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            lastUid: 4,
            selectedIntervals: [
                { uid: 1, start: this.createMoment({ h: 10, m: 0, d: M }), end: this.createMoment({ h: 11, m: 0, d: M }), value: "Justin Loo, Ali, Ryan, Michelle, Serene", highlighted: [] },
                { uid: 2, start: this.createMoment({ h: 10, m: 0, d: T }), end: this.createMoment({ h: 11, m: 0, d: T }), value: "Michael, Abdullah, Serene", highlighted: [] },
                { uid: 3, start: this.createMoment({ h: 10, m: 0, d: W }), end: this.createMoment({ h: 11, m: 0, d: W }), value: "Joseph, Aaron Lim, Gaofang, Aaron Wissing", highlighted: [] },
                { uid: 4, start: this.createMoment({ h: 10, m: 0, d: R }), end: this.createMoment({ h: 11, m: 0, d: R }), value: "Tara, Michelle", highlighted: [] },
                { uid: 5, start: this.createMoment({ h: 10, m: 0, d: F }), end: this.createMoment({ h: 11, m: 0, d: F }), value: "Andrew", highlighted: [] },
                { uid: 6, start: this.createMoment({ h: 11, m: 0, d: M }), end: this.createMoment({ h: 12, m: 0, d: M }), value: "Ryan, Ali, Aaron Wissing", highlighted: [] },
                { uid: 7, start: this.createMoment({ h: 11, m: 0, d: T }), end: this.createMoment({ h: 12, m: 0, d: T }), value: "Robert, Abdullah, Michael, Eric", highlighted: [] },
                { uid: 8, start: this.createMoment({ h: 11, m: 0, d: W }), end: this.createMoment({ h: 12, m: 0, d: W }), value: "Joseph, Aaron Lim, Aaron Wissing", highlighted: [] },
                { uid: 9, start: this.createMoment({ h: 11, m: 0, d: R }), end: this.createMoment({ h: 12, m: 0, d: R }), value: "Tara, Max, Fathah", highlighted: [] },
                { uid: 10, start: this.createMoment({ h: 11, m: 0, d: F }), end: this.createMoment({ h: 12, m: 0, d: F }), value: "Andrew", highlighted: [] },
                { uid: 11, start: this.createMoment({ h: 12, m: 0, d: M }), end: this.createMoment({ h: 13, m: 0, d: M }), value: "Shayok, Adam, Alexandre, Jiacheng", highlighted: [] },
                { uid: 12, start: this.createMoment({ h: 12, m: 0, d: T }), end: this.createMoment({ h: 13, m: 0, d: T }), value: "Karunesh, Benjamin He, Julian, Anusha", highlighted: [] },
                { uid: 13, start: this.createMoment({ h: 12, m: 0, d: W }), end: this.createMoment({ h: 13, m: 0, d: W }), value: "Yu Liang, Adam, Pong", highlighted: [] },
                { uid: 14, start: this.createMoment({ h: 12, m: 0, d: R }), end: this.createMoment({ h: 13, m: 0, d: R }), value: "Alexander, Jorge, Anirudh, Max", highlighted: [] },
                { uid: 15, start: this.createMoment({ h: 12, m: 0, d: F }), end: this.createMoment({ h: 13, m: 0, d: F }), value: "Nihar, Jameson, Ben", highlighted: [] },
                { uid: 16, start: this.createMoment({ h: 13, m: 0, d: M }), end: this.createMoment({ h: 14, m: 0, d: M }), value: "Shayok, Siranush, Keerti, Alexandre, Jiacheng", highlighted: [] },
                { uid: 17, start: this.createMoment({ h: 13, m: 0, d: T }), end: this.createMoment({ h: 14, m: 0, d: T }), value: "Karunesh, Benjamin He, David, Julian, Anusha", highlighted: [] },
                { uid: 18, start: this.createMoment({ h: 13, m: 0, d: W }), end: this.createMoment({ h: 14, m: 0, d: W }), value: "Yu Liang, Pong, Fathah", highlighted: [] },
                { uid: 19, start: this.createMoment({ h: 13, m: 0, d: R }), end: this.createMoment({ h: 14, m: 0, d: R }), value: "Alexander, David, Jorge, Anirudh", highlighted: [] },
                { uid: 20, start: this.createMoment({ h: 13, m: 0, d: F }), end: this.createMoment({ h: 14, m: 0, d: F }), value: "Nihar, Kevin, Vincent", highlighted: [] },
                { uid: 21, start: this.createMoment({ h: 14, m: 0, d: M }), end: this.createMoment({ h: 15, m: 0, d: M }), value: "Siranush, Derek, Carol", highlighted: [] },
                { uid: 22, start: this.createMoment({ h: 14, m: 0, d: T }), end: this.createMoment({ h: 15, m: 0, d: T }), value: "Robert, Harrison, Vivek", highlighted: [] },
                { uid: 23, start: this.createMoment({ h: 14, m: 0, d: W }), end: this.createMoment({ h: 15, m: 0, d: W }), value: "Kaleb, Ben", highlighted: [] },
                { uid: 24, start: this.createMoment({ h: 14, m: 0, d: R }), end: this.createMoment({ h: 15, m: 0, d: R }), value: "Amy, Jameson, Justin Chang", highlighted: [] },
                { uid: 25, start: this.createMoment({ h: 14, m: 0, d: F }), end: this.createMoment({ h: 15, m: 0, d: F }), value: "Kevin, Max", highlighted: [] },
                { uid: 26, start: this.createMoment({ h: 15, m: 0, d: M }), end: this.createMoment({ h: 16, m: 0, d: M }), value: "Austin, Derek, Carol", highlighted: [] },
                { uid: 27, start: this.createMoment({ h: 15, m: 0, d: T }), end: this.createMoment({ h: 16, m: 0, d: T }), value: "Isabel, Justin Loo, Harrison, Vivek", highlighted: [] },
                { uid: 28, start: this.createMoment({ h: 15, m: 0, d: W }), end: this.createMoment({ h: 16, m: 0, d: W }), value: "Kaleb, Howard, Jeannie, Ben", highlighted: [] },
                { uid: 29, start: this.createMoment({ h: 15, m: 0, d: R }), end: this.createMoment({ h: 16, m: 0, d: R }), value: "Amy, Keerti, Zheyi, Justin Chang", highlighted: [] },
                { uid: 30, start: this.createMoment({ h: 15, m: 0, d: F }), end: this.createMoment({ h: 16, m: 0, d: F }), value: "Nico, Chester, Vincent", highlighted: [] },
                { uid: 31, start: this.createMoment({ h: 16, m: 0, d: M }), end: this.createMoment({ h: 17, m: 0, d: M }), value: "Minh, Austin", highlighted: [] },
                { uid: 32, start: this.createMoment({ h: 16, m: 0, d: T }), end: this.createMoment({ h: 17, m: 0, d: T }), value: "Isabel, Christopher", highlighted: [] },
                { uid: 33, start: this.createMoment({ h: 16, m: 0, d: W }), end: this.createMoment({ h: 17, m: 0, d: W }), value: "Minh, Zhaoyi, Howard, Jeannie", highlighted: [] },
                { uid: 34, start: this.createMoment({ h: 16, m: 0, d: R }), end: this.createMoment({ h: 17, m: 0, d: R }), value: "Zhaoyi, Zheyi, Christopher", highlighted: [] },
                { uid: 35, start: this.createMoment({ h: 16, m: 0, d: F }), end: this.createMoment({ h: 17, m: 0, d: F }), value: "Nico, Chester, Christopher", highlighted: [] }]
        }
    }

    updateHighlighted=(uids)=>{
        var changedIntervals=this.state.selectedIntervals; 
        for(const[key,value] of Object.entries(changedIntervals)){
            changedIntervals[key].highlighted = uids; //update which ones should be highlighted
        }
        this.setState({selectedIntervals: changedIntervals}); //update the state
    }

    createMoment = (props) => {
        const monday = this.getMonday();
        const adjust = props.d - 1;
        const res = monday.set('hour', props.h).set('minute', props.m).add(adjust, 'd')
        return res;
    }

    getMonday = () => {
        const today = moment().weekday();
        if (today === 1) {
            return today;
        }
        const adjust = 1 - today;
        return moment().add(adjust, 'days').startOf('day');
    }

    render(){
        return(
            <div className="TutoringCalendar">
                
                <WeekCalendar 
                    scaleUnit={60}
                    startTime={moment({h: 12, m: 0})}
                    endTime={moment({h: 19, m: 30})}
                    dayFormat='dddd'
                    scaleFormat='h:mm A'
                    firstDay={this.getMonday()}
                    numberOfDays="5"
                    cellHeight={80}
                    selectedIntervals={this.state.selectedIntervals}
                    eventComponent={TutoringEvent}
                    eventSpacing={0}
                />
            
            </div>
        )
    };
}