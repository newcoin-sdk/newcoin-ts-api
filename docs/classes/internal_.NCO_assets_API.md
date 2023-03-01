[@newfound8ion/newcoin-sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / NCO\_assets\_API

# Class: NCO\_assets\_API

[<internal>](../modules/internal_.md).NCO_assets_API

## Table of contents

### Constructors

- [constructor](internal_.NCO_assets_API.md#constructor)

### Methods

- [SubmitTx](internal_.NCO_assets_API.md#submittx)
- [createCollection](internal_.NCO_assets_API.md#createcollection)
- [mintAsset](internal_.NCO_assets_API.md#mintasset)
- [modifyAsset](internal_.NCO_assets_API.md#modifyasset)

## Constructors

### constructor

• **new NCO_assets_API**(`inpt`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCInit`](../modules/internal_.md#ncinit) |

#### Defined in

[L1/assets.ts:22](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/L1/assets.ts#L22)

## Methods

### SubmitTx

▸ **SubmitTx**(`actions`, `public_keys`, `private_keys`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `actions` | `any`[] |
| `public_keys` | `string`[] |
| `private_keys` | `string`[] |

#### Returns

`Promise`<`any`\>

#### Defined in

[L1/assets.ts:33](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/L1/assets.ts#L33)

___

### createCollection

▸ **createCollection**(`inpt`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

Create default collection for the account

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCCreateCollection`](../modules.md#nccreatecollection) |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

Create Collection and template transactions' ids

#### Defined in

[L1/assets.ts:50](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/L1/assets.ts#L50)

___

### mintAsset

▸ **mintAsset**(`inpt`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

Mint an asset

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCMintAsset`](../modules.md#ncmintasset) |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

Create Pool transaction id

#### Defined in

[L1/assets.ts:108](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/L1/assets.ts#L108)

___

### modifyAsset

▸ **modifyAsset**(`inpt`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

Modify existing asset in an asset mutable data

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCModifyAsset`](../modules.md#ncmodifyasset) |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

asset id

#### Defined in

[L1/assets.ts:156](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/L1/assets.ts#L156)
