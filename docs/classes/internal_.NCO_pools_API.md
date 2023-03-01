[@newfound8ion/newcoin-sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / NCO\_pools\_API

# Class: NCO\_pools\_API

[<internal>](../modules/internal_.md).NCO_pools_API

## Table of contents

### Constructors

- [constructor](internal_.NCO_pools_API.md#constructor)

### Methods

- [SubmitTx](internal_.NCO_pools_API.md#submittx)
- [createPool](internal_.NCO_pools_API.md#createpool)
- [dldUnstakeMainDAO](internal_.NCO_pools_API.md#dldunstakemaindao)
- [instUnstakeMainDAO](internal_.NCO_pools_API.md#instunstakemaindao)
- [stakeMainDAO](internal_.NCO_pools_API.md#stakemaindao)
- [stakePool](internal_.NCO_pools_API.md#stakepool)
- [unstakePool](internal_.NCO_pools_API.md#unstakepool)

## Constructors

### constructor

• **new NCO_pools_API**(`inpt`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCInit`](../modules/internal_.md#ncinit) |

#### Defined in

[L1/pools.ts:29](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/L1/pools.ts#L29)

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

[L1/pools.ts:41](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/L1/pools.ts#L41)

___

### createPool

▸ **createPool**(`inpt`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

Staking pools service, issuing social tokens

Create a staking pool for an account. 
Selection of ticker and inflation/deflation optionality

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCCreatePool`](../modules.md#nccreatepool) |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

Create Pool transaction id

#### Defined in

[L1/pools.ts:127](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/L1/pools.ts#L127)

___

### dldUnstakeMainDAO

▸ **dldUnstakeMainDAO**(`inpt`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

Delayed UnStake mainDAO delay without penalty

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCStakeMainDao`](../modules.md#ncstakemaindao) |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

NCReturnTxs

#### Defined in

[L1/pools.ts:101](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/L1/pools.ts#L101)

___

### instUnstakeMainDAO

▸ **instUnstakeMainDAO**(`inpt`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

Instant UnStake mainDAO with penalty

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCStakeMainDao`](../modules.md#ncstakemaindao) |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

NCReturnTxs

#### Defined in

[L1/pools.ts:78](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/L1/pools.ts#L78)

___

### stakeMainDAO

▸ **stakeMainDAO**(`inpt`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCStakeMainDao`](../modules.md#ncstakemaindao) |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Defined in

[L1/pools.ts:61](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/L1/pools.ts#L61)

___

### stakePool

▸ **stakePool**(`inpt`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

Stake to creator pool

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCStakePool`](../modules.md#ncstakepool) |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

Create Pool transaction id

#### Defined in

[L1/pools.ts:156](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/L1/pools.ts#L156)

___

### unstakePool

▸ **unstakePool**(`inpt`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

Unstake creator pool

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCUnstakePool`](../modules.md#ncunstakepool) |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

Create Pool transaction id

#### Defined in

[L1/pools.ts:192](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/L1/pools.ts#L192)
