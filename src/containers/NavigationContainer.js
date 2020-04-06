import { connect } from "react-redux";
import Navigation from "../components/Navigation";

const mapStateToProps = (state) => ({
    theme: state.theme,
});

export default connect(mapStateToProps)(Navigation);
