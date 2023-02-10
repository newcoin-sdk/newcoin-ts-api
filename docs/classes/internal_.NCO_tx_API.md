[@newfound8ion/newcoin-sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / NCO\_tx\_API

# Class: NCO\_tx\_API

[<internal>](../modules/internal_.md).NCO_tx_API

## Table of contents

### Constructors

- [constructor](internal_.NCO_tx_API.md#constructor)

### Methods

- [\_txBalance](internal_.NCO_tx_API.md#_txbalance)
- [getAccountBalance](internal_.NCO_tx_API.md#getaccountbalance)
- [txDAOTokenBalance](internal_.NCO_tx_API.md#txdaotokenbalance)
- [txGNCOBalance](internal_.NCO_tx_API.md#txgncobalance)
- [txNCOBalance](internal_.NCO_tx_API.md#txncobalance)

## Constructors

### constructor

• **new NCO_tx_API**(`inpt`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCInit`](../modules/internal_.md#ncinit) |

#### Defined in

[L1/transfers.ts:17](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/L1/transfers.ts#L17)

## Methods

### \_txBalance

▸ **_txBalance**(`contract`, `inpt`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

Transfer NCO between accounts

#### Parameters

| Name | Type |
| :------ | :------ |
| `contract` | `string` |
| `inpt` | [`NCTxBal`](../modules.md#nctxbal) |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

Transfer transaction id

#### Defined in

[L1/transfers.ts:70](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/L1/transfers.ts#L70)

___

### getAccountBalance

▸ **getAccountBalance**(`acc`): `Promise`<[`NCReturnInfo`](../modules.md#ncreturninfo)\>

Get account balance

#### Parameters

| Name | Type |
| :------ | :------ |
| `acc` | [`NCGetAccInfo`](../modules.md#ncgetaccinfo) |

#### Returns

`Promise`<[`NCReturnInfo`](../modules.md#ncreturninfo)\>

Tx data

#### Defined in

[L1/transfers.ts:33](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/L1/transfers.ts#L33)

___

### txDAOTokenBalance

▸ **txDAOTokenBalance**(`inpt`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

Transfer creator tokens between accounts

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCTxBal`](../modules.md#nctxbal) |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

Transfer transaction id

#### Defined in

[L1/transfers.ts:108](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/L1/transfers.ts#L108)

___

### txGNCOBalance

▸ **txGNCOBalance**(`inpt`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

Transfer GNCO between accounts

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCTxBal`](../modules.md#nctxbal) |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

Transfer transaction id

#### Defined in

[L1/transfers.ts:97](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/L1/transfers.ts#L97)

___

### txNCOBalance

▸ **txNCOBalance**(`inpt`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

Transfer NCO between accounts

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCTxBal`](../modules.md#nctxbal) |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

Transfer transaction id

#### Defined in

[L1/transfers.ts:86](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/L1/transfers.ts#L86)
