import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './InputBodyStyles';
import TextField from '@material-ui/core/TextField';

class InputBody extends React.Component {
    handleChange = body => event => {
        this.props.onChangeBody(event.target.value);
    };

    render() {
        const { classes, body } = this.props;

        return (
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    label="Body"
                    className={classes.textField}
                    value={body}
                    multiline
                    rows="10"
                    onChange={this.handleChange('body')}
                    variant="filled"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </form>
        );
    }
}

InputBody.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InputBody);
