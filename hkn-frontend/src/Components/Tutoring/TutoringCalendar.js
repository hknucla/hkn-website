import React, {Component} from 'react';
import WeekCalendar from 'react-week-calendar';
import moment from 'moment';
import 'react-week-calendar/dist/style.css';
import './Tutoring.scss';

export default class TutoringCalendar extends Component{
    printWeekday(){
        console.log(moment.weekday(0));
        return moment.weekday(0);
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
                    firstDay={moment('2020-10-06T05:00:00.000+0000')}
                    numberOfDays="5"
                    cellHeight={40}
                />
            </div>
        )
    };
}