import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './InputAmountStyles';
import TextField from '@material-ui/core/TextField';

class InputAmount extends React.Component {
    handleChange = amount => event => {
        this.props.onChangeAmount(event.target.value);
    };

    render() {
        const { classes, amount } = this.props;

        return (
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    label="Amount"
                    placeholder="Enter Amount"
                    className={classes.textField}
                    value={amount}
                    onChange={this.handleChange('amount')}
                    variant="filled"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </form>
        );
    }
}

InputAmount.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InputAmount);
