# push-notifications-expo
Testando o envio de notificações push utilizando React Native e Expo.

## Criando Projeto Expo
    - Como já possuo o Expo cli instalado, basta executar o comando abaixo:
```
    expo init app-notificationPush
```

## Instalando módulo de permissões
    - Quando se trata de adicionar funcionalidades que podem acessar informações potencialmente sensíveis no dispositivo de um usuário, como sua localização, ou possivelmente enviar-lhes notificações push indesejadas, você precisará pedir ao usuário sua permissão primeiro. Para isso, precisamos adicionar módulo permissões em nosso aplicativo.
    - Para a instalação basta executar o comando abaixo:
```
    expo install expo-permissions
```

- Após realizar essas configurações iniciais, será necessário criar uma solicitação de 
  permissão para o usuário, que por consequência iremos conseguir gerar o token de identificação do aparelho do usuário, utilizamos esse token para os envios de notificações. Poderá ver melhor essa parte acessando o arquivo App.js

  ## Envio da notificação para o dispositivo do usuário
    - Para isso estaremos utilizando uma ferramenta do próprio expo e o token gerado anteriormente, acesse com o link abaixo: 
        [Push notifications tool](https://expo.io/notifications)

    
    