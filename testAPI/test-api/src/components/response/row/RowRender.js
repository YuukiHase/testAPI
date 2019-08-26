import React from 'react';
import StateResponse from './StateResponse';
import ListItem from '@material-ui/core/ListItem';
import worker from '../../../worker/excute.worker';
import WebWorker from '../../../worker/WebWorker';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './RowRenderStyles';
import { actUpdateLogs, actExcuteDone, actCalAvg } from '../../../actions/actions';

class RowRender extends React.Component {
    componentWillMount() {
        this.worker = new WebWorker(worker);

        this.worker.addEventListener('message', event => {
            const log = event.data;
            if (log) {
                this.props.onUpdateLogs(log.result, log.time, log.index);
                if (this.props.excute === false) {
                    this.props.onCalAvg();
                }
            }
        });
    }

    componentDidMount() {
        let { method, url, amount, code, body, excute, index } = this.props;
        if (method === 'GET' && url && amount && code && excute === true) {
            this.worker.postMessage({ method, url, code, body, index });
        } else if (method === 'POST' && url && amount && code && body && excute === true) {
            this.worker.postMessage({ method, url, code, body, index });
        }
    }

    componentWillReceiveProps(nextProps) {
        let { method, url, amount, code, body, excute, index } = nextProps;
        if (method === 'GET' && url && amount && code && excute === true) {
            this.worker.postMessage({ method, url, code, body, index });
            if (index === amount - 1) {
                this.props.onExcuteDone();
            }
        } else if (method === 'POST' && url && amount && code && body && excute === true) {
            this.worker.postMessage({ method, url, code, body, index });
            if (index === amount - 1) {
                this.props.onExcuteDone();
            }
        }
    }

    render() {
        const { classes, index } = this.props;
        let { result, time } = this.props.logs[index];

        return (
            <ListItem>
                <div className={classes.prepare}>
                    {`Call API ${index + 1}: `}
                </div>
                <StateResponse
                    result={result}
                    time={time}
                />
            </ListItem>
        );
    }
}

export default connect(
    state => ({
        method: state.excute.method,
        url: state.excute.url,
        amount: state.excute.amount,
        code: state.excute.code,
        body: state.excute.body,
        excute: state.excute.excute,
        logs: state.logs
    }),
    dispatch => ({
        onUpdateLogs: (result, time, index) => {
            dispatch(actUpdateLogs(result, time, index));
        },
        onExcuteDone: () => {
            dispatch(actExcuteDone());
        },
        onCalAvg: () => {
            dispatch(actCalAvg());
        }
    })
)(withStyles(styles)(RowRender));
