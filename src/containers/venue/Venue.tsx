import React from 'react';
import { Steps, Button, message } from 'antd';
import StepTwo from './steps/StepTwo';
import StepOne from './steps/StepOne';
import './styles.css';

const Step = Steps.Step;



class Venue extends React.Component<{actions: {fetchAmenities: any}, amenities: any}, { current: number }> {
    constructor(props: any) {
        super(props);
        this.state = {
            current: 0,
        };
    }

    componentDidMount() {
        // fetch ameneties
        this.props.actions.fetchAmenities();
    }

    next() {
        const current = this.state.current + 1;
        this.setState({ current });
    }

    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    }

    render() {
        const { current } = this.state;
        const steps = [{
            title: 'Venue Information',
            content: <StepOne />
        }, {
            title: 'Venue Amenities',
            content: <StepTwo amenities={this.props.amenities} />
        }, {
            title: 'Venue Detail',
            content: 'Venue Detail'
        }, {
            title: 'Food and Drinks Sections',
            content: 'Food and Drinks Sections'
        }, {
            title: 'Event Type Section',
            content: 'Event Type Section'
        }];
        return (
            <div>
                <Steps current={current}>
                    {steps.map(item => <Step key={item.title} title={item.title} />)}
                </Steps>
                <div className="steps-content">{steps[current].content}</div>
                <div className="steps-action">
                    {
                        current < steps.length - 1
                        && <Button type="primary" onClick={() => this.next()}>Next</Button>
                    }
                    {
                        current === steps.length - 1
                        && <Button type="primary" onClick={() => message.success('Processing complete!')}>Done</Button>
                    }
                    {
                        current > 0
                        && (
                            <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                                Previous
            </Button>
                        )
                    }
                </div>
            </div>
        );
    }
}

export default Venue;