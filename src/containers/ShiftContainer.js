import { connect } from "react-redux";
import ShiftDetails from "../screens/ShiftDetails";

import { editData, removeData } from "../actions";

const mapStateToProps = (state) => ({
    setup: state.setup,
    oldData: state.data,
    theme: state.theme,
});

const mapDispatchToProps = {
    editData,
    removeData,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShiftDetails);
