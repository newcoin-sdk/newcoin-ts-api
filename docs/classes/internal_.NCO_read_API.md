[@newfound8ion/newcoin-sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / NCO\_read\_API

# Class: NCO\_read\_API

[<internal>](../modules/internal_.md).NCO_read_API

## Table of contents

### Constructors

- [constructor](internal_.NCO_read_API.md#constructor)

### Methods

- [getActions](internal_.NCO_read_API.md#getactions)
- [getCollectionTemplateID](internal_.NCO_read_API.md#getcollectiontemplateid)
- [readAsset](internal_.NCO_read_API.md#readasset)
- [readTx](internal_.NCO_read_API.md#readtx)
- [txToAssetId](internal_.NCO_read_API.md#txtoassetid)
- [txToTemplateId](internal_.NCO_read_API.md#txtotemplateid)

## Constructors

### constructor

• **new NCO_read_API**(`inpt`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCInit`](../modules/internal_.md#ncinit) |

#### Defined in

[L1/reader.ts:12](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/L1/reader.ts#L12)

## Methods

### getActions

▸ **getActions**(`txData`, `filterActionNames`): [`Action`](../interfaces/internal_.Action.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `txData` | [`TxData`](../interfaces/internal_.TxData.md) |
| `filterActionNames` | `string`[] |

#### Returns

[`Action`](../interfaces/internal_.Action.md)[]

#### Defined in

[L1/reader.ts:32](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/L1/reader.ts#L32)

___

### getCollectionTemplateID

▸ **getCollectionTemplateID**(`colleciton`, `schema`, `tpl_type`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `colleciton` | `string` |
| `schema` | `string` |
| `tpl_type` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[L1/reader.ts:56](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/L1/reader.ts#L56)

___

### readAsset

▸ **readAsset**(`asset_id`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `asset_id` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[L1/reader.ts:26](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/L1/reader.ts#L26)

___

### readTx

▸ **readTx**(`txId`): `Promise`<[`TxData`](../interfaces/internal_.TxData.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `txId` | `string` |

#### Returns

`Promise`<[`TxData`](../interfaces/internal_.TxData.md)\>

#### Defined in

[L1/reader.ts:18](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/L1/reader.ts#L18)

___

### txToAssetId

▸ **txToAssetId**(`txId`): `Promise`<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `txId` | `string` |

#### Returns

`Promise`<`string`[]\>

#### Defined in

[L1/reader.ts:41](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/L1/reader.ts#L41)

___

### txToTemplateId

▸ **txToTemplateId**(`txId`): `Promise`<`number`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `txId` | `string` |

#### Returns

`Promise`<`number`[]\>

#### Defined in

[L1/reader.ts:49](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/L1/reader.ts#L49)
