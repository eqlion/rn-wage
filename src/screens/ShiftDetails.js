import React, { useState } from "react";
import { View } from "react-native";
import {
    Paragraph,
    Title,
    Divider,
    Checkbox,
    Dialog,
    Button,
    Portal,
} from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";

import moment from "moment";

import { Card, Box, Header, DateButton, NumericInput } from "../components";

import { view } from "../styles";

export default ShiftDetails = ({
    navigation,
    route,
    setup,
    addData,
    editData,
    removeData,
    oldData,
    theme,
    add_,
}) => {
    if (!add_) {
        const date = route.params.day;
        oldData = oldData.find((i) => i.startDate === date);
    }
    const [isHoliday, setHoliday] = add_
        ? useState(false)
        : useState(oldData.isHoliday);
    const [lunches, setLunches] = add_
        ? useState(0)
        : useState(oldData.lunches);
    const [data, setData] = add_
        ? useState({
              startHour: moment("10:00", "HH:mm").valueOf(),
              startDate: moment().valueOf(),
              finishHour: moment("15:00", "HH:mm").valueOf(),
              finishDate: moment().valueOf(),
          })
        : useState({
              startHour: moment(oldData.startHour, "HH:mm").valueOf(),
              startDate: moment(oldData.startDate, "DD.MM.YYYY").valueOf(),
              finishHour: moment(oldData.finishHour, "HH:mm").valueOf(),
              finishDate: moment(oldData.finishDate, "DD.MM.YYYY").valueOf(),
          });

    const [showModal, setShowModal] = useState(false);
    const [changesMade, setChanges] = useState(false);
    const [show, setShow] = useState(false);
    const [mode, setMode] = useState("date");
    const [order, setOrder] = useState("start");
    const [value, setValue] = useState(moment().valueOf());

    const onChange = (event, selected) => {
        setShow(false);

        // Handle pressing the "Cancel" button
        if (!selected) {
            return;
        }
        switch (mode + order) {
            case "datestart":
                if (add_) {
                    setData({
                        ...data,
                        startDate: selected.valueOf(),
                        finishDate: selected.valueOf(),
                    });
                } else {
                    setData({
                        ...data,
                        startDate: selected.valueOf(),
                    });
                }

                break;
            case "datefinish":
                setData({ ...data, finishDate: selected.valueOf() });
                break;
            case "timestart":
                setData({ ...data, startHour: selected.valueOf() });
                break;
            default:
                setData({ ...data, finishHour: selected.valueOf() });
                break;
        }
    };

    const showPicker = (mode_, order_) => {
        setMode(mode_);
        setOrder(order_);
        if (mode_ === "date" && order_ === "start") {
            setValue(data.startDate);
        } else if (mode_ === "date" && order_ === "finish") {
            setValue(data.finishDate);
        } else if (mode_ === "time" && order_ === "start") {
            setValue(data.startHour);
        } else {
            setValue(data.finishHour);
        }
        setShow(true);
    };

    const compileData = (setup, data, lunches, isHoliday) => {
        lunches = parseInt(lunches);
        const {
            holidayWage,
            nightWage,
            nightStarts,
            nightEnds,
            lunchTime,
        } = setup;
        let { startDate, startHour, finishDate, finishHour } = data;
        startDate = moment(startDate).format("DD.MM.YYYY");
        startHour = moment(startHour).format("HH.mm");
        finishDate = moment(finishDate).format("DD.MM.YYYY");
        finishHour = moment(finishHour).format("HH.mm");
        let start = moment(startDate + " " + startHour, "DD.MM.YYYY HH.mm");
        let finish = moment(finishDate + " " + finishHour, "DD.MM.YYYY HH.mm");
        let nightStart = moment(startDate + ` ${nightStarts}`, "DD.MM.YYYY HH");
        let nightFinish = moment(finishDate + ` ${nightEnds}`, "DD.MM.YYYY HH");
        let dh = 0;
        let nh = 0;
        if (
            moment(startDate, "DD.MM.YYYY").date() ===
            moment(finishDate, "DD.MM.YYYY").date()
        ) {
            dh += nightStart.diff(start, "hours", true);
            nh += finish.diff(nightStart, "hours", true);
        } else {
            let midnight = moment(finishDate + " 00", "DD.MM.YYYY HH");
            dh += nightStart.diff(start, "hours", true);
            nh += midnight.diff(nightStart, "hours", true);
            nh += nightFinish.diff(midnight, "hours", true);
            dh += finish.diff(nightFinish, "hours", true);
        }
        dh = dh - lunches * (lunchTime / 60);
        nh *= nh > 0 ? nightWage : 1;
        let hours = dh + nh;
        hours *= isHoliday ? holidayWage : 1;
        return {
            startDate,
            startHour,
            finishHour,
            finishDate,
            hours,
            lunches,
            isHoliday,
            flagged: false,
        };
    };

    const backAction = (navigation) => {
        if (changesMade) {
            setShowModal(true);
        } else if (add_) {
            navigation.goBack();
        } else {
            navigation.navigate("Calendar");
        }
    };

    return (
        <View style={view(theme)}>
            <Portal.Host>
                <Header
                    title={add_ ? "Add Data" : "Edit Data"}
                    onBack={() => backAction(navigation)}
                    onSave={() => {
                        if (add_) {
                            addData(
                                compileData(setup, data, lunches, isHoliday)
                            );
                            navigation.goBack();
                        } else {
                            editData(
                                compileData(setup, data, lunches, isHoliday)
                            );
                            navigation.navigate("Calendar");
                        }
                    }}
                />
                <Card title="Date">
                    <Box>
                        <DateButton
                            onPress={() => {
                                showPicker("date", "start");
                                setChanges(true);
                            }}
                        >
                            <Paragraph>
                                {moment(data.startDate).format("ll")}
                            </Paragraph>
                        </DateButton>
                        <DateButton
                            onPress={() => {
                                showPicker("time", "start");
                                setChanges(true);
                            }}
                        >
                            <Paragraph>
                                {moment(data.startHour).format("LT")}
                            </Paragraph>
                        </DateButton>
                    </Box>
                    <Box>
                        <DateButton
                            onPress={() => {
                                showPicker("date", "finish");
                                setChanges(true);
                            }}
                        >
                            <Paragraph>
                                {moment(data.finishDate).format("ll")}
                            </Paragraph>
                        </DateButton>
                        <DateButton
                            onPress={() => {
                                showPicker("time", "finish");
                                setChanges(true);
                            }}
                        >
                            <Paragraph>
                                {moment(data.finishHour).format("LT")}
                            </Paragraph>
                        </DateButton>
                    </Box>
                    <Divider />
                    <Title>Options</Title>
                    <NumericInput
                        value={lunches.toString()}
                        onChangeText={(i) => setLunches(i)}
                        label="Lunches"
                    />
                    <Box>
                        <Paragraph>Holiday</Paragraph>
                        <Checkbox
                            status={isHoliday ? "checked" : "unchecked"}
                            onPress={() => {
                                setHoliday(!isHoliday);
                                setChanges(true);
                            }}
                        />
                    </Box>
                    {!add_ && (
                        <>
                            <Divider />
                            <Button
                                onPress={() => {
                                    navigation.navigate("Calendar");
                                    removeData(
                                        moment(data.startDate).format(
                                            "DD.MM.YYYY"
                                        )
                                    );
                                }}
                                color="red"
                                mode="outlined"
                            >
                                Delete this shift!
                            </Button>
                        </>
                    )}
                    {show && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={value}
                            mode={mode}
                            display="default"
                            onChange={onChange}
                        />
                    )}
                    <Portal>
                        <Dialog
                            visible={showModal}
                            onDismiss={() => setShowModal(false)}
                        >
                            <Dialog.Title>Alert</Dialog.Title>
                            <Dialog.Content>
                                <Paragraph>
                                    You are leaving without saving the changes
                                </Paragraph>
                            </Dialog.Content>
                            <Dialog.Actions>
                                <Button
                                    onPress={() =>
                                        add_
                                            ? navigation.goBack()
                                            : navigation.navigate("Calendar")
                                    }
                                >
                                    Leave
                                </Button>
                                <Button onPress={() => setShowModal(false)}>
                                    Cancel
                                </Button>
                            </Dialog.Actions>
                        </Dialog>
                    </Portal>
                </Card>
            </Portal.Host>
        </View>
    );
};
