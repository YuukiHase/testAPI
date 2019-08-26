import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './SelectMethodStyles';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

class SelectMethod extends React.Component {

    handleChange = event => {
        this.props.onSelectMethod(event.target.value);
    };

    render() {
        const { classes, method } = this.props;

        return (
            <form className={classes.root} autoComplete="off">
                <FormControl variant="filled" className={classes.formControl}>
                    <InputLabel>Method</InputLabel>
                    <Select
                        value={method}
                        onChange={this.handleChange}
                        input={<FilledInput name="method" />}
                    >
                        <MenuItem value="GET">GET</MenuItem>
                        <MenuItem value="POST">POST</MenuItem>
                    </Select>
                </FormControl>
            </form>
        );
    }
}

SelectMethod.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SelectMethod);
