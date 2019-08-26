import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import SelectMethod from '../select/SelectMethod';
import InputURL from '../input/InputURL';
import InputAmount from '../input/InputAmount';
import InputCode from '../input/InputCode';
import ButtonExcute from '../button/ButtonExcute';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './RequestStyles';
import InputBody from '../input/InputBody';
import InputExpectedTime from '../input/InputExpectedTime';

class Request extends React.Component {
    render() {
        const { classes, method, url, amount, code, body, expectedTime } = this.props;

        return (
            <ExpansionPanel
                className={classes.expansionPanel}
                expanded={true}
            >
                <ExpansionPanelSummary className={classes.expansionPanelSummary}>
                    <Typography className={classes.heading}>Request</Typography>
                </ExpansionPanelSummary>

                <ExpansionPanelDetails className={classes.expansionPanelDetails}>
                    <SelectMethod
                        method={method}
                        onSelectMethod={this.props.onSelectMethod}
                    />
                    <InputURL
                        url={url}
                        onChangeURL={this.props.onChangeURL}
                    />
                </ExpansionPanelDetails>
                <ExpansionPanelDetails className={classes.expansionPanelDetails}>
                    <InputAmount
                        amount={amount}
                        onChangeAmount={this.props.onChangeAmount}
                    />
                    <InputExpectedTime
                        expectedTime={expectedTime}
                        onChangeExpectedTime={this.props.onChangeExpectedTime}
                    />
                </ExpansionPanelDetails>
                <ExpansionPanelDetails className={classes.expansionPanelDetails}>
                    <InputCode
                        code={code}
                        onChangeCode={this.props.onChangeCode}
                    />
                    {method === 'POST' ? <InputBody body={body} onChangeBody={this.props.onChangeBody} /> : ''}
                    <ButtonExcute onExcute={this.props.onExcute} />
                </ExpansionPanelDetails>
            </ExpansionPanel>
        );
    }
}

export default withStyles(styles)(Request);
