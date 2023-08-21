const { AssetsTransferApi, constructApiPromise } = require('@substrate/asset-transfer-api');

const main = async () => {
    const { api, specName, safeXcmVersion } = await constructApiPromise('wss://kusama-rpc.polkadot.io');

    const assetsApi = new AssetsTransferApi(api, specName, safeXcmVersion);

    try {
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

        console.log(a)
    } catch(e) {
        console.log(e)
    }
}

main().finally(process.exit)
