import { connect } from "react-redux";
import Shift from "../screens/Shift";

import { addData, editData, removeData } from "../actions";

const mapStateToProps = (state) => ({
    setup: state.setup,
    oldData: state.data,
});

const mapDispatchToProps = {
    addData,
    editData,
    removeData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Shift);
