import { StyleSheet } from "react-native";

export default StyleSheet.create({
    generalStyle: {
        flex: 1,
        backgroundColor: "#F3F3F3",
        justifyContent: "center",
        alignItems: "center",
    },
    upperPartStyle: {
        flexDirection: "row",
        justifyContent: "space-between",
        position: "absolute",
        left: 15,
        right: 15,
        top: 40 
    },
    scoreAreaStyle:{
        flexDirection: "row",

    },
    scoreTextStyle:{
        textTransform: "capitalize",
        fontFamily: "Trebuchet MS",
        fontSize: 20,

    },
    scorePointsStyle:{

    },
    livesAreaStyle:{
        flexDirection: "row",

    },
    livesTextStyle:{
        textTransform: "capitalize",
        fontFamily: "Trebuchet MS",
        fontSize: 20,
    },
    livesPointsStyle:{

    },
    titleStyle: {
        color: "#1697B7",
        fontFamily: "Trebuchet MS",
        fontSize: 26,
        fontWeight: "bold"
      },
    emojiStyle: {
        fontSize: 48,
        margin: 20
    },
    inputStyle: {
        borderWidth: 1,
        backgroundColor: "#FDFDFD",
        borderColor: "#777",
        borderRadius: 20,
        fontFamily: "Trebuchet MS",
        padding: 8, 
        width: 200,
        margin: 10
    },
    buttonStyle: {
        height: 50,
        width: 200,
        marginTop: 10
    }
});