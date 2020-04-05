import { connect } from "react-redux";
import Shift from "../screens/Shift";

import { editData, removeData } from "../actions";

const mapStateToProps = (state) => ({
    setup: state.setup,
    oldData: state.data,
});

const mapDispatchToProps = {
    editData,
    removeData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Shift);
