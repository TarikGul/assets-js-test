const { AssetsTransferApi, constructApiPromise } = require('@substrate/asset-transfer-api');
const { Keyring } = require('@polkadot/keyring');

const main = async () => {
    const { api, specName, safeXcmVersion } = await constructApiPromise('wss://kusama-rpc.polkadot.io');

    const assetsApi = new AssetsTransferApi(api, specName, safeXcmVersion);
    const mneumonic = '';
    try {
        const keyring = new Keyring();
        keyring.addFromMnemonic(mneumonic);

        const a = await assetsApi.createTransferTransaction(
            '1000',
            'D3R6bYhvjhSfuQs68QvV3JUmFQf6DWgHqQVCFx4JXD253bk',
            ['8'],
            ['5000000'],
            {
                format: 'submittable',
                isLimited: true,
                xcmVersion: 3
            }
        );

        a.tx.signAndSend(keyring);
    } catch(e) {
        console.log(e)
    }
}

main().finally(process.exit)
