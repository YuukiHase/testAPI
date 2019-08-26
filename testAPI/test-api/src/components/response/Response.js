import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './ResponseStyles';
import TabsResponse from './tabs/TabsResponse';

class Response extends React.Component {
    render() {
        let { classes } = this.props;

        return (
            <ExpansionPanel
                className={classes.expansionPanel}
                expanded={true}
            >
                <ExpansionPanelSummary className={classes.expansionPanelSummary}>
                    <Typography className={classes.heading}>Response</Typography>
                </ExpansionPanelSummary>

                <ExpansionPanelDetails className="panel-result">
                    <TabsResponse />
                </ExpansionPanelDetails>
            </ExpansionPanel>
        );
    }
}

export default withStyles(styles)(Response);
