export const styles = theme => ({
    response: {
        marginLeft: '5px',
        fontFamily: "Roboto",

        '& .warning-success': {
            padding: "5px 10px",
            color: "#FFFFFF",
            backgroundColor: "#20e344",
            borderRadius: "5px"
        },

        '& .warning-fail': {
            padding: "5px 10px",
            color: "#000000",
            backgroundColor: "#ff0d0d",
            borderRadius: "5px"
        },

        '& .warning': {
            padding: "5px 10px",
            color: "#000000",
            backgroundColor: "#e3c819",
            borderRadius: "5px"
        }
    }
});