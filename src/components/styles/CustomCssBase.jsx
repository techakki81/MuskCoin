import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  "@global": {
    body: {
      ...theme.typography.body1
    }
  }
});

function CustomCssBase() {
  return null;
}

export default withStyles(styles)(CustomCssBase);
