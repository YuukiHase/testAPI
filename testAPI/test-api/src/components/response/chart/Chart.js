import React from 'react';
import { connect } from 'react-redux';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { actUpdateLogs, actExcuteDone, actCalAvg } from '../../../actions/actions';
import worker from '../../../worker/excute.worker';
import WebWorker from '../../../worker/WebWorker';


class Chart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentWillMount() {
        if (this.props.excute === false) {
            this.setState({
                data: this.props.logs
            })
        }
    }

    componentWillReceiveProps(nextProps) {
        let { method, url, amount, code, body, excute, logs } = nextProps;
        if (excute === true) {
            for (let i = 0; i < amount; i++) {
                if (method === 'GET' && url && amount && code) {
                    // New Worker for each dot in chart.
                    this.worker = new WebWorker(worker);
                    this.worker.addEventListener('message', event => {
                        const log = event.data;
                        if (log) {
                            this.props.onUpdateLogs(log.result, log.time, log.index);

                            // Calulate Avg.
                            if (this.props.excute === false) {
                                this.props.onCalAvg();
                            }
                        }
                    });

                    // Post Message to worker.
                    this.worker.postMessage({ method, url, code, body, index: i });

                    // Excute Done.
                    if (i === amount - 1) {
                        this.props.onExcuteDone();
                    }
                } else if (method === 'POST' && url && amount && code && body) {
                    // New Worker for each dot in chart.
                    this.worker = new WebWorker(worker);
                    this.worker.addEventListener('message', event => {
                        const log = event.data;
                        if (log) {
                            this.props.onUpdateLogs(log.result, log.time, log.index);

                            // Calulate Avg.
                            if (this.props.excute === false) {
                                this.props.onCalAvg();
                            }
                        }
                    });

                    // Post Message to worker.
                    this.worker.postMessage({ method, url, code, body, index: i });

                    // Excute Done.
                    if (i === amount - 1) {
                        this.props.onExcuteDone();
                    }
                }
            }
        } else if (excute === false) {
            this.setState({
                data: logs
            })
        }
    }

    render() {
        let { data } = this.state;
        return (
            <ResponsiveContainer height={585} width="100%" key={new Date().getTime()}>
                <LineChart data={data}
                    margin={{ right: 30 }}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="time" stroke="#82ca9d" />
                    <Line type="monotone" dataKey="avg" stroke="#fc5151" />
                </LineChart>
            </ResponsiveContainer>
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
)(Chart);
