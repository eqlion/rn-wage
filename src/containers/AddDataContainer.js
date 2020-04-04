import { connect } from "react-redux";
import { addData } from "../actions";
import AddData from "../screens/AddData";

const mapStateToProps = (state) => ({
    setup: state.setup,
});

const mapDispatchToProps = {
    addData,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddData);
