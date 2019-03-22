import React from 'react';
import { Switch } from 'antd';

class StepTwo extends React.Component<{amenities: Array<any>},{}> {
    constructor(props: any) {
        super(props);
        this.state = {
        };
    }

    onChange(e: any) {
        console.log(e.target.value)
    }

    renderAmenities = () => {
        return this.props.amenities.map((el, i) => {
            return (<div>
                <p key={i+el.name}>{el.name} <Switch defaultChecked onChange={this.onChange} /></p>
                
            </div>)
        })
    }

    render() {
        return (
            <div>
                {this.renderAmenities()}
            </div>
        );
    }
}

export default StepTwo;