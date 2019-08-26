import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './InputCodeStyles';
import TextField from '@material-ui/core/TextField';

class InputCode extends React.Component {
    handleChange = code => event => {
        this.props.onChangeCode(event.target.value);
    };

    render() {
        const { classes, code } = this.props;

        return (
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    label="Code"
                    className={classes.textField}
                    value={code}
                    multiline
                    rows="10"
                    onChange={this.handleChange('code')}
                    variant="filled"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </form>
        );
    }
}

InputCode.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InputCode);
