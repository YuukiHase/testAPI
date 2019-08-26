import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './StatusResponseStyles';
import { connect } from 'react-redux';

class StateResponse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: '',
            status: -1
        }
    }

    componentWillMount() {
        let { expectedTime } = this.props
        this.setState({
            time: this.props.time,
            status: (this.props.result === true && this.props.time <= expectedTime) ? (0) :
                ((this.props.result === false) || (this.props.result === true && this.props.time > expectedTime)) ? (1) : (-1)
        })
    }

    componentWillReceiveProps(nextProps) {
        let { expectedTime } = nextProps;
        this.setState({
            time: nextProps.time,
            status: (nextProps.result === true && nextProps.time <= expectedTime) ? (0) :
                ((nextProps.result === false) || (nextProps.result === true && nextProps.time > expectedTime)) ? (1) : (-1)
        })
    }

    render() {
        const { classes, expectedTime } = this.props;
        let { status, time } = this.state;
        let element = (status === 0) ? (
            <div className={classes.success}>
                <span className="warning-success">Success</span> {time} ms <span className="warning">Expected time: {expectedTime} ms</span>
            </div>
        ) :
            (status === 1) ? (
                <div className={classes.fail}>
                    <span className="warning-fail">Fail</span> {time} ms <span className="warning">Expected time: {expectedTime} ms</span>
                </div>
            ) : (
                    <div className={classes.spending}>
                        <span className="warning">Pending...</span>
                    </div>
                );

        return (
            <div className={classes.response}>
                {element}
            </ div>
        );
    }
}

export default connect(
    state => ({
        expectedTime: state.excute.expectedTime
    }),
    dispatch => ({

    })
)(withStyles(styles)(StateResponse));
