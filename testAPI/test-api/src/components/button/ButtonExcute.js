import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './ButtonExcuteStyles';
import Button from '@material-ui/core/Button';

class ButtonExcute extends React.Component {
    onClick = () => {
        this.props.onExcute();
    }

    render() {
        const { classes } = this.props;
        return (
            <Button
                variant="contained"
                size="large"
                color="primary"
                className={classes.margin}
                onClick={this.onClick}
            >
                Excute
            </Button>
        );
    }
}

ButtonExcute.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonExcute);
