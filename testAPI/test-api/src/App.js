import React from 'react';
import Container from '@material-ui/core/Container';
import Request from './components/request/Request';
import Response from './components/response/Response';
import { connect } from 'react-redux';
import { actOnExcute, actCreateLogs } from './actions/actions';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            method: 'GET',
            url: '',
            amount: '',
            expectedTime: '',
            code: '',
            body: ''
        }
    }

    onSelectMethod = (method) => {
        this.setState({
            method: method
        });
    }

    onChangeURL = (url) => {
        this.setState({
            url: url
        });
    }

    onChangeAmount = (amount) => {
        this.setState({
            amount: amount
        });
    }

    onChangeExpectedTime = (expectedTime) => {
        this.setState({
            expectedTime: expectedTime
        });
    }

    onChangeCode = (code) => {
        this.setState({
            code: code
        })
    }

    onChangeBody = (body) => {
        this.setState({
            body: body
        })
    }

    expected = (e) => {
        let myEx = 'OLS0000';
        return e.errorCode === myEx;
    }

    onExcute = () => {
        let { method, url, amount, expectedTime, code, body } = this.state;
        if (method === 'GET' && url && amount && code) {
            this.props.onCreateLogs(amount);
            if (expectedTime.trim() === '') {
                this.props.onExcute(method, url, amount, 10000, code, body);
            } else {
                this.props.onExcute(method, url, amount, expectedTime, code, body);
            }
        } else if (method === 'POST' && url && amount && code && body) {
            this.props.onCreateLogs(amount);
            if (expectedTime.trim() === '') {
                this.props.onExcute(method, url, amount, 10000, code, body);
            } else {
                this.props.onExcute(method, url, amount, expectedTime, code, body);
            }
        }
    }

    render() {
        let { method, url, amount, code, body, expectedTime } = this.state;

        return (
            <Container>
                <Request
                    method={method}
                    onSelectMethod={this.onSelectMethod}
                    url={url}
                    onChangeURL={this.onChangeURL}
                    amount={amount}
                    onChangeAmount={this.onChangeAmount}
                    expectedTime={expectedTime}
                    onChangeExpectedTime={this.onChangeExpectedTime}
                    code={code}
                    onChangeCode={this.onChangeCode}
                    body={body}
                    onChangeBody={this.onChangeBody}
                    onExcute={this.onExcute}
                />
                <Response />
            </Container>
        );
    }
}

export default connect(
    state => ({

    }),
    dispatch => ({
        onExcute: (method, url, amount, expectedTime, code, body) => {
            dispatch(actOnExcute(method, url, amount, expectedTime, code, body));
        },
        onCreateLogs: (amount) => {
            dispatch(actCreateLogs(amount));
        }
    })
)(App);
