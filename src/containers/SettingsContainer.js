import { connect } from "react-redux";
import { modifySettings } from "../actions";
import Settings from "../screens/Settings";

const mapStateToProps = (state) => ({
    setup: state.setup,
    theme: state.theme,
});

const mapDispatchToProps = {
    modifySettings,
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
