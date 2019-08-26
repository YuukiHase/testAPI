export const styles = theme => ({
    expansionPanel: {
        width: '100%',

        '& .panel-result': {
            margin: '0px 24px 16px 24px',
            padding: '0px',
            border: '1px solid gray'
        }
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
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    }
});