import { connect } from "react-redux";
import { addData } from "../actions";
import ShiftDetails from "../screens/ShiftDetails";

const mapStateToProps = (state) => ({
    setup: state.setup,
    theme: state.theme,
    add_: true,
});

const mapDispatchToProps = {
    addData,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShiftDetails);
