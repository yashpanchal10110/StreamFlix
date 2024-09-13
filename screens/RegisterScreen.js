// import react from "react";
// import { View,Text } from "react-native";

// const RegisterScreen = () => {
//     return (
// <View> 
//     <Text>
//         RegisterScreen
//     </Text>
// </View>
//     )
// }
// export default RegisterScreen



import {
    StyleSheet,
    Text,
    View,
    Pressable,
    Image,
    SafeAreaView,
    KeyboardAvoidingView,
    TextInput,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";


const RegisterScreen = () => {
    const [input, setInput] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();
    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: "black",
                padding: 10,
                alignItems: "center",
            }}
        >
            <KeyboardAvoidingView>
                <View style={{ alignItems: "center", justifyContent: "space-between" }}>
                    <Image
                        style={{ height: 50, width: 120, marginTop: 20 }}
                        source={{
                            uri: "https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png",
                        }}
                    />
                </View>

                <View style={{ width: 320, marginTop: 45 }}>
                    <TextInput
                        value={input}
                        onChangeText={(text) => setInput(text)}

                        placeholder="Email"
                        placeholderTextColor={"white"}
                        style={{
                            width: 330,
                            padding: 15,
                            borderRadius: 5,
                            color: "white",
                            backgroundColor: "gray",
                        }}
                    />

                    <TextInput
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry={true}
                        placeholder="Password"
                        placeholderTextColor={"white"}
                        style={{
                            width: 330,
                            padding: 15,
                            borderRadius: 5,
                            color: "white",
                            backgroundColor: "gray",
                        }}
                    />
                </View>

                <Pressable
                    disabled={!input && !password}
                    onPress={() =>
                        navigation.navigate("Plan", {
                            email: input,
                            password: password,
                        })
                    }
                    style={
                        password.length > 4
                            ? {
                                width: 300,
                                backgroundColor: "red",
                                marginLeft: "auto",
                                marginRight: "auto",
                                justifyContent: "center",
                                alignItems: "center",
                                padding: 14,
                            }
                            : {
                                width: 300,
                                marginLeft: "auto",
                                marginRight: "auto",
                                justifyContent: "center",
                                alignItems: "center",
                                borderColor: "white",
                                borderWidth: 2,
                                padding: 14,
                            }
                    }
                >
                    <Text
                        style={{
                            textAlign: "center",
                            fontSize: 19,
                            fontWeight: "700",
                            color: "white",
                        }}
                    >
                        Register
                    </Text>
                </Pressable>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
