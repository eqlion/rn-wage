import * as React from "react";
import { ScrollView } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Paragraph, Snackbar, Checkbox, Divider } from "react-native-paper";
import moment from "moment";

import { Header, Card, Box, NumericInput, DateButton } from "../components";

import { divider } from "../styles";
import i18n from "../i18n";

export default class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.modifySettings = this.props.modifySettings;

        const {
            holidayWage,
            nightWage,
            prepayRate,
            taxRate,
            nightStarts,
            nightEnds,
        } = this.props.setup;

        this.state = {
            ...this.props.setup,
            isHolidayWage: holidayWage !== 1,
            isNightWage: nightWage !== 1,
            nightStarts: moment(nightStarts, "HH:mm").valueOf(),
            nightEnds: moment(nightEnds, "HH:mm").valueOf(),
            taxRate: taxRate * 100,
            isPrepay: prepayRate !== 0,
            prepayRate: prepayRate * 100,
            pickerMode: "start",
            showPicker: false,
            showSnack: false,
        };

        this.value = this.state.nightStarts;
    }

    setWage = (baseWage) => {
        this.setState({ baseWage });
    };

    setHolidayWage = (wage) => {
        this.setState({ holidayWage: wage });
    };

    setIsHolidayWage = () => {
        const { isHolidayWage } = this.state;
        if (isHolidayWage) {
            this.setState({ holidayWage: 1 });
        }
        this.setState({ isHolidayWage: !isHolidayWage });
    };

    setNightWage = (wage) => {
        this.setState({ nightWage: wage });
    };

    setIsNightWage = () => {
        const { isNightWage } = this.state;
        if (isNightWage) {
            this.setState({ nightWage: 1 });
        }
        this.setState({ isNightWage: !isNightWage });
    };

    showPicker = (mode) => {
        this.setState({ showPicker: true });
        if (mode === "start") {
            this.setState({ pickerMode: "start" });
            this.value = this.state.nightStarts;
        } else {
            this.setState({ pickerMode: "finish" });
            this.value = this.state.nightEnds;
        }
    };
    changeTime = (event, selected) => {
        this.setState({ showPicker: false });
        // Handle pressing the "Cancel" button
        if (!selected) {
            return;
        }

        const { pickerMode } = this.state;
        if (pickerMode === "start") {
            this.setState({ nightStarts: selected.valueOf() });
        } else {
            this.setState({ nightEnds: selected.valueOf() });
        }
    };

    setTaxRate = (taxRate) => {
        this.setState({ taxRate });
    };

    setIsPrepay = () => {
        const { isPrepay } = this.state;
        if (isPrepay) {
            this.setState({ isPrepay: 0 });
        }
        this.setState({ isPrepay: !isPrepay });
    };

    setPrepayRate = (prepayRate) => {
        this.setState({ prepayRate });
    };

    setPrepayDate = (prepayDate) => {
        this.setState({ prepayDate });
    };

    setSalaryDate = (salaryDate) => {
        this.setState({ salaryDate });
    };

    setShowSnack = () => {
        const { showSnack } = this.state;
        this.setState({ showSnack: !showSnack });
    };

    setLunchTime = (lunchTime) => {
        this.setState({ lunchTime });
    };

    compileData = () => ({
        ...this.state,
        taxRate: this.state.taxRate / 100,
        prepayRate: this.state.prepayRate / 100,
        nightStarts: moment(this.state.nightStarts).format("HH:mm"),
        nightEnds: moment(this.state.nightEnds).format("HH:mm"),
        firstSetup: false,
    });

    render() {
        const {
            firstSetup,
            baseWage,
            isHolidayWage,
            holidayWage,
            isNightWage,
            nightWage,
            nightStarts,
            nightEnds,
            showPicker,
            taxRate,
            isPrepay,
            prepayRate,
            prepayDate,
            salaryDate,
            showSnack,
            lunchTime,
        } = this.state;
        return (
            <>
                <Header
                    title={
                        firstSetup ? i18n.t("FIRST_SETUP") : i18n.t("SETTINGS")
                    }
                    onSave={() => {
                        this.modifySettings(this.compileData());
                        this.setShowSnack();
                    }}
                />
                <ScrollView
                    backgroundColor={this.props.theme ? "white" : "#121212"}
                >
                    <Card
                        title={
                            firstSetup
                                ? i18n.t("ENTER_SETTINGS")
                                : i18n.t("CHANGE_SETTINGS")
                        }
                    >
                        {firstSetup && (
                            <>
                                <Paragraph>{i18n.t("CHANGE_LATER")}</Paragraph>
                                <Divider style={divider} />
                            </>
                        )}
                        <NumericInput
                            value={baseWage.toString()}
                            onChangeText={(wage) => this.setWage(wage)}
                            label={i18n.t("BASE_WAGE")}
                        />

                        <Divider style={divider} />
                        <Box>
                            <Paragraph>{i18n.t("IS_HOLIDAY_WAGE")}</Paragraph>
                            <Checkbox
                                status={isHolidayWage ? "checked" : "unchecked"}
                                onPress={() => this.setIsHolidayWage()}
                            />
                        </Box>
                        {isHolidayWage && (
                            <NumericInput
                                value={holidayWage.toString()}
                                onChangeText={(wage) =>
                                    this.setHolidayWage(wage)
                                }
                                label={i18n.t("HOLIDAY_WAGE")}
                            />
                        )}

                        <Divider style={divider} />
                        <Box>
                            <Paragraph>{i18n.t("IS_NIGHT_WAGE")}</Paragraph>
                            <Checkbox
                                status={isNightWage ? "checked" : "unchecked"}
                                onPress={() => this.setIsNightWage()}
                            />
                        </Box>
                        {isNightWage && (
                            <>
                                <NumericInput
                                    value={nightWage.toString()}
                                    onChangeText={(wage) =>
                                        this.setNightWage(wage)
                                    }
                                    label={i18n.t("NIGHT_WAGE")}
                                />

                                <Box>
                                    <Paragraph>
                                        {i18n.t("NIGHT_STARTS")}
                                    </Paragraph>
                                    <DateButton
                                        onPress={() => {
                                            this.showPicker("start");
                                        }}
                                    >
                                        <Paragraph>
                                            {moment(nightStarts).format("LT")}
                                        </Paragraph>
                                    </DateButton>
                                </Box>
                                <Box>
                                    <Paragraph>
                                        {i18n.t("NIGHT_ENDS")}
                                    </Paragraph>
                                    <DateButton
                                        onPress={() => {
                                            this.showPicker("finish");
                                        }}
                                    >
                                        <Paragraph>
                                            {moment(nightEnds).format("LT")}
                                        </Paragraph>
                                    </DateButton>
                                </Box>
                            </>
                        )}

                        <Divider style={divider} />
                        <NumericInput
                            value={taxRate.toString()}
                            onChangeText={(tax) => this.setTaxRate(tax)}
                            label={i18n.t("TAX_RATE")}
                        />

                        <Divider style={divider} />
                        <Box>
                            <Paragraph>
                                {i18n.t("SALARY_IN_TWO_PARTS")}
                            </Paragraph>
                            <Checkbox
                                status={isPrepay ? "checked" : "unchecked"}
                                onPress={() => this.setIsPrepay()}
                            />
                        </Box>
                        {isPrepay && (
                            <>
                                <NumericInput
                                    value={prepayRate.toString()}
                                    onChangeText={(rate) =>
                                        this.setPrepayRate(rate)
                                    }
                                    label={i18n.t("PREPAY_RATE")}
                                />
                                <NumericInput
                                    value={prepayDate.toString()}
                                    onChangeText={(day) =>
                                        this.setPrepayDate(day)
                                    }
                                    label={i18n.t("PREPAY_DATE")}
                                />
                            </>
                        )}
                        <NumericInput
                            value={salaryDate.toString()}
                            onChangeText={(day) => this.setSalaryDate(day)}
                            label={i18n.t("SALARY_DATE")}
                        />
                        <Divider style={divider} />
                        <NumericInput
                            value={lunchTime.toString()}
                            onChangeText={(time) => this.setLunchTime(time)}
                            label={i18n.t("LUNCH")}
                        />
                    </Card>
                    {showPicker && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={this.value}
                            mode={"time"}
                            display="default"
                            onChange={this.changeTime}
                        />
                    )}
                </ScrollView>
                <Snackbar
                    visible={showSnack}
                    onDismiss={() => this.setShowSnack()}
                    action={{
                        label: i18n.t("GREAT"),
                        onPress: () => this.setShowSnack(),
                    }}
                >
                    {i18n.t("SAVED")}
                </Snackbar>
            </>
        );
    }
}
