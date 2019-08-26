import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './TabsResponseStyles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import List from '@material-ui/core/List';
import Chart from '../chart/Chart';
import RowRender from '../row/RowRender';

function TabContainer(props) {
    return (
        <Typography component="div" {...props}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

class TabsResponse extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes, amount, click } = this.props;
        const { value } = this.state;
        let elRows = [];
        for (let i = 0; i < amount; i++) {
            elRows.push(<RowRender key={click + '_' + i} index={i} />);
        }

        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Tabs value={value} onChange={this.handleChange}>
                        <Tab label="Report List" />
                        <Tab label="Report Chart" />
                    </Tabs>
                </AppBar>
                {
                    value === 0 &&
                    <TabContainer>
                        <List className={classes.list}>
                            {elRows}
                        </List>
                    </TabContainer>
                }
                {
                    value === 1 &&
                    <TabContainer className={classes.chart}>
                        <Chart />
                    </TabContainer>
                }
            </div>
        );
    }
}

TabsResponse.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(
    state => ({
        amount: state.excute.amount,
        click: state.excute.click
    }),
    dispatch => ({

    })
)(withStyles(styles)(TabsResponse));
