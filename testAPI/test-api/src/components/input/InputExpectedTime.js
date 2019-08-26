import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './InputExpectedTimeStyles';
import TextField from '@material-ui/core/TextField';

class InputExpectedTime extends React.Component {
    handleChange = expectedTime => event => {
        this.props.onChangeExpectedTime(event.target.value);
    };

    render() {
        const { classes, expectedTime } = this.props;

        return (
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    label="Expected Time"
                    placeholder="Time (ms)"
                    className={classes.textField}
                    value={expectedTime}
                    onChange={this.handleChange('expectedTime')}
                    variant="filled"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </form>
        );
    }
}

InputExpectedTime.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InputExpectedTime);
