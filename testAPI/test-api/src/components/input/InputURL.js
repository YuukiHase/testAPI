import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './InputURLStyles';
import TextField from '@material-ui/core/TextField';

class InputURL extends React.Component {

    handleChange = url => event => {
        this.props.onChangeURL(event.target.value);
    };

    render() {
        const { classes, url } = this.props;

        return (
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    label="URL"
                    placeholder="Enter URL"
                    className={classes.textField}
                    value={url}
                    onChange={this.handleChange('url')}
                    variant="filled"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </form>
        );
    }
}

InputURL.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InputURL);
