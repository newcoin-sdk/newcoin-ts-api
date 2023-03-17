[newcoin-ts-api](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / NCO\_submit\_API

# Class: NCO\_submit\_API

[<internal>](../modules/internal_.md).NCO_submit_API

## Table of contents

### Constructors

- [constructor](internal_.NCO_submit_API.md#constructor)

### Methods

- [SubmitTx](internal_.NCO_submit_API.md#submittx)
- [SubmitTxNative](internal_.NCO_submit_API.md#submittxnative)
- [SubmitTxProxy](internal_.NCO_submit_API.md#submittxproxy)

## Constructors

### constructor

• **new NCO_submit_API**(`inpt`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCInit`](../modules/internal_.md#ncinit) |

#### Defined in

[L1/submit.ts:22](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/L1/submit.ts#L22)

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

[L1/submit.ts:30](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/L1/submit.ts#L30)

___

### SubmitTxNative

▸ **SubmitTxNative**(`actions`, `public_keys`, `private_keys`): `Promise`<`TransactResult` \| `ReadOnlyTransactResult`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `actions` | `any`[] |
| `public_keys` | `string`[] |
| `private_keys` | `string`[] |

#### Returns

`Promise`<`TransactResult` \| `ReadOnlyTransactResult`\>

#### Defined in

[L1/submit.ts:68](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/L1/submit.ts#L68)

___

### SubmitTxProxy

▸ **SubmitTxProxy**(`actions`, `public_keys`, `private_keys`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `actions` | `any`[] |
| `public_keys` | `string`[] |
| `private_keys` | `string`[] |

#### Returns

`Promise`<`any`\>

#### Defined in

[L1/submit.ts:41](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/L1/submit.ts#L41)
