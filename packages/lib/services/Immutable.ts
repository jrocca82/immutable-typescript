import { config, blockchainData, passport } from '@imtbl/sdk';

export const baseConfig: config.ImmutableConfiguration = {
    environment: config.Environment.SANDBOX,
    apiKey: "sk_imapik-test-H-KmUqoDonpzlozVyG9G_48b241",
    publishableKey: "pk_imapik-test-Dj@CZTe-gCM_3ZSceXIs",

}

export const immutableClient: blockchainData.BlockchainData = new blockchainData.BlockchainData({
    baseConfig
});


export const passportInstance: passport.Passport = new passport.Passport({
    baseConfig,
    clientId: "SsBp72eBg8TitZmJwc7OZe5A6XiY4eJj",
    redirectUri: 'http://localhost:3000/redirect',
    logoutRedirectUri: 'http://localhost:3000/logout',
    audience: 'platform_api',
    scope: 'openid offline_access email transact',
});