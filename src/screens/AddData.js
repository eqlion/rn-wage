import React, { useState } from "react";
import moment from "moment";
import {
    Paragraph,
    Title,
    Divider,
    Checkbox,
    Dialog,
    Button,
    Portal
} from "react-native-paper";
import { Dropdown } from "react-native-material-dropdown";
import DateTimePicker from "@react-native-community/datetimepicker";

import { Card, Box, Header, DateButton } from "../components";

export default AddData = ({ navigation, setup, addData }) => {
    const [isHoliday, setHoliday] = useState(false);
    const [lunches, setLunches] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [changesMade, setChanges] = useState(false);

    const [show, setShow] = useState(false);
    const [mode, setMode] = useState("date");
    const [order, setOrder] = useState("start");
    const [data, setData] = useState({
        startHour: moment("10:00", "hh:mm").valueOf(),
        startDate: moment().valueOf(),
        finishHour: moment("15:00", "hh:mm").valueOf(),
        finishDate: moment().valueOf()
    });
    const [value, setValue] = useState(moment().valueOf());

    const onChange = (event, selected) => {
        setShow(false);

        // Handle pressing the "Cancel" button
        if (!selected) {
            return;
        }
        switch (mode + order) {
            case "datestart":
                setData({
                    ...data,
                    startDate: selected.valueOf(),
                    finishDate: selected.valueOf()
                });
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
        const {
            holidayWage,
            nightWage,
            nightStarts,
            nightEnds,
            lunchTime
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
            hours
        };
    };

    const backAction = navigation => {
        if (changesMade) {
            setShowModal(true);
        } else {
            navigation.goBack();
        }
    };

    return (
        <>
            <Portal.Host>
                <Header
                    title="Add Data"
                    onBack={() => backAction(navigation)}
                    onSave={() => {
                        addData(compileData(setup, data, lunches, isHoliday));
                        navigation.goBack();
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
                    <Dropdown
                        label="Launches"
                        data={[{ value: 0 }, { value: 1 }, { value: 2 }]}
                        defaultValue="0"
                        onChangeText={value => {
                            setLunches(value);
                            setChanges(true);
                        }}
                    />
                    <Box style={{ marginTop: 5 }}>
                        <Paragraph>Holiday</Paragraph>
                        <Checkbox
                            status={isHoliday ? "checked" : "unchecked"}
                            onPress={() => {
                                setHoliday(!isHoliday);
                                setChanges(true);
                            }}
                        />
                    </Box>
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
                                <Button onPress={() => navigation.goBack()}>
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
        </>
    );
};
