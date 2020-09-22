import React, {Component} from 'react';
import WeekCalendar from 'react-week-calendar';
import moment from 'moment';
import 'react-week-calendar/dist/style.css';

export default class TutoringCalendar extends Component{
    render(){
        return(
            <div>
                <WeekCalendar 
                    scaleUnit="30" 
                    startTime={moment({h: 10, m: 0})}
                    endTime={moment({h: 17, m: 30})}
                    dayFormat='dddd'
                    scaleFormat='H:mm'
                />
            </div>
        )
    };
}