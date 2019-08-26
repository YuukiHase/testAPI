export const styles = theme => ({
    expansionPanel: {
        width: '100%',
    },
    expansionPanelSummary: {
        cursor: 'default !important',
        '&.Mui-expanded': {
            minHeight: '20px',
        },
        '& .MuiExpansionPanelSummary-content': {
            '&.Mui-expanded': {
                marginTop: theme.spacing(2),
                marginBottom: theme.spacing(1),
            }
        }
    },
    expansionPanelDetails: {
        padding: '8px 10px 8px',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    }
});