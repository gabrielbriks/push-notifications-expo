import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Notifications } from "expo";
import * as Permissions from "expo-permissions";

export default function App() {
  useEffect(() => {
    this.getPushNotificationPermissions();
  }, []);

  getPushNotificationPermissions = async () => {
    const { status: existingStatus } = await Permissions.getAsync(
      Permissions.NOTIFICATIONS
    );

    let finalStatus = existingStatus;

    /* Só perguntar se as permissões ainda não foram determinadas, porque
    o iOS não necessariamente solicitará ao usuário uma segunda vez.
    */
    if (existingStatus !== "granted") {
      // ?Concedito
      /*
       Permissões de notificação remota do Android são concedidas durante a instalação do aplicativo,
       então isso só vai pedir no iOS.
      */
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }

    // Pare aqui se o usuário não concedeu permissões
    if (finalStatus !== "granted") {
      return;
    }
    console.log(finalStatus);

    // Obtenha o token que identifica este dispositivo exclusivamente
    console.log(
      "Notification Token: ",
      await Notifications.getExpoPushTokenAsync()
    );
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
