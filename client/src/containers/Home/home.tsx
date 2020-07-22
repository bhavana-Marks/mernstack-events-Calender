import * as React from 'react';
import * as Styled from './styled';
import { RootStore } from '../../store/root.store';
import { observer, inject } from 'mobx-react';
import { Card, Typography, Button } from '@material-ui/core';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

interface Props {
    rootStore: RootStore
}

@inject((allStores: { rootStore: RootStore }) => {
    let rootStore = allStores.rootStore;
    return {
        rootStore
    };
})

@observer
export default class Home extends React.Component<Props> {
    async componentDidMount() {
        this.props.rootStore.homeStore.getEvents()
    }

    render() {
        let { events } = this.props.rootStore.homeStore;
//          const tileClassName: any = {
//     background: '#926e38',
//     'box-shadow': '0 0 10px rgba(0, 0, 0, 0.3) !important'
//   };
        return (
            <Styled.homeContainer>
                <Styled.EventsList>
                    {events.map((ev) => {
                        return(
                            <Styled.StyledCard>
                            <Card>
                                <Typography variant="h6" component="h2">
                                    {ev.name}
                                </Typography>
                                <Styled.StyledDates>
                                    {'start: '+  new Date(ev.start).toLocaleDateString()}
                                </Styled.StyledDates>
                                <Styled.StyledDates>
                                    {'end: '+ new Date(ev.end).toLocaleDateString()}
                                </Styled.StyledDates>
                            </Card>
                        </Styled.StyledCard>
                        )
                    })}
                </Styled.EventsList>
                <Styled.CalendarContainer>
                    {events.length > 0 &&
                   <Calendar
                    value={new Date()}
                    // tileClassName={({ date, view }) => {
                    //     if(events.find((e: any) => new Date(e.start).toISOString() === new Date(date).toISOString() || new Date(e.end).toISOString() === new Date(date).toISOString())){
                    //      return  tileClassName
                    //     }
                    //   }}
                    tileContent={({ date, view }) => {
                        if(events.find((e: any) => new Date(e.start).toISOString() === new Date(date).toISOString() || new Date(e.end).toISOString() === new Date(date).toISOString())){
                         return  <Button style={{backgroundColor: '#926e38'}}/>
                        } else {
                            return null
                        }
                      }}
                   />
                    }
                </Styled.CalendarContainer>
            </Styled.homeContainer>
        )
    }
}