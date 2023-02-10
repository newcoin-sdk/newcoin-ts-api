[@newfound8ion/newcoin-sdk](../README.md) / [Exports](../modules.md) / <internal\>

# Namespace: <internal\>

## Table of contents

### Enumerations

- [AuctionType](../enums/internal_.AuctionType.md)

### Classes

- [ActionGenerator](../classes/internal_.ActionGenerator.md)
- [NCO\_account\_API](../classes/internal_.NCO_account_API.md)
- [NCO\_assets\_API](../classes/internal_.NCO_assets_API.md)
- [NCO\_daos\_API](../classes/internal_.NCO_daos_API.md)
- [NCO\_pools\_API](../classes/internal_.NCO_pools_API.md)
- [NCO\_read\_API](../classes/internal_.NCO_read_API.md)
- [NCO\_submit\_API](../classes/internal_.NCO_submit_API.md)
- [NCO\_tx\_API](../classes/internal_.NCO_tx_API.md)
- [NCO\_utils\_API](../classes/internal_.NCO_utils_API.md)

### Interfaces

- [AccountRamDelta](../interfaces/internal_.AccountRamDelta.md)
- [Act](../interfaces/internal_.Act.md)
- [Action](../interfaces/internal_.Action.md)
- [AuthSequence](../interfaces/internal_.AuthSequence.md)
- [Authorization](../interfaces/internal_.Authorization.md)
- [Data](../interfaces/internal_.Data.md)
- [ImmutableData](../interfaces/internal_.ImmutableData.md)
- [NCClaimNftsParams](../interfaces/internal_.NCClaimNftsParams.md)
- [NCCreateAuctionParams](../interfaces/internal_.NCCreateAuctionParams.md)
- [NCEditAuctionParams](../interfaces/internal_.NCEditAuctionParams.md)
- [NCPlaceBidParams](../interfaces/internal_.NCPlaceBidParams.md)
- [NeftyMarketParamsBase](../interfaces/internal_.NeftyMarketParamsBase.md)
- [Receipt](../interfaces/internal_.Receipt.md)
- [TxData](../interfaces/internal_.TxData.md)

### Type Aliases

- [EosioActionObject](internal_.md#eosioactionobject)
- [EosioAuthorizationObject](internal_.md#eosioauthorizationobject)
- [NCInit](internal_.md#ncinit)
- [NCInitServices](internal_.md#ncinitservices)
- [NCInitUrls](internal_.md#nciniturls)
- [NCMintBadge](internal_.md#ncmintbadge)
- [NCMintLike](internal_.md#ncmintlike)
- [NCMintNftToRoot](internal_.md#ncmintnfttoroot)
- [NCPoolInfo](internal_.md#ncpoolinfo)
- [NCSwapNCOtoCC](internal_.md#ncswapncotocc)

## Type Aliases

### EosioActionObject

Ƭ **EosioActionObject**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `account` | `string` |
| `authorization` | [`EosioAuthorizationObject`](internal_.md#eosioauthorizationobject)[] |
| `data` | `any` |
| `name` | `string` |

#### Defined in

[L1/actions.ts:5](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/L1/actions.ts#L5)

___

### EosioAuthorizationObject

Ƭ **EosioAuthorizationObject**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `actor` | `string` |
| `permission` | `string` |

#### Defined in

[L1/actions.ts:3](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/L1/actions.ts#L3)

___

### NCInit

Ƭ **NCInit**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `debug` | `boolean` |
| `is_proxy` | `boolean` |
| `services` | [`NCInitServices`](internal_.md#ncinitservices) |
| `urls` | [`NCInitUrls`](internal_.md#nciniturls) |

#### Defined in

[system.ts:2](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/system.ts#L2)

___

### NCInitServices

Ƭ **NCInitServices**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `atomicassets_contract` | `string` |
| `daos_contract` | `string` |
| `eosio_contract` | `string` |
| `maindao_contract` | `string` |
| `neftymarket_contract` | `string` |
| `staking_contract` | `string` |
| `token_contract` | `string` |

#### Defined in

[system.ts:16](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/system.ts#L16)

___

### NCInitUrls

Ƭ **NCInitUrls**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `atomicassets_url` | `string` |
| `hyperion_url` | `string` |
| `nodeos_proxy_url` | `string` |
| `nodeos_url` | `string` |

#### Defined in

[system.ts:9](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/system.ts#L9)

___

### NCMintBadge

Ƭ **NCMintBadge**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `badge_name` | `string` |
| `col_name?` | `string` |
| `issuer` | `string` |
| `payer` | `string` |
| `payer_prv_key` | `string` |
| `subj_name` | `string` |
| `weight` | `string` |

#### Defined in

[types.ts:308](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/types.ts#L308)

___

### NCMintLike

Ƭ **NCMintLike**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `col_name?` | `string` |
| `issuer` | `string` |
| `payer?` | `string` |
| `payer_prv_key` | `string` |
| `subj_name` | `string` |
| `subj_type` | `string` |
| `value?` | `string` |

#### Defined in

[types.ts:296](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/types.ts#L296)

___

### NCMintNftToRoot

Ƭ **NCMintNftToRoot**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `creator` | `string` |
| `immutable_data` | [`NCKeyValPair`](../modules.md#nckeyvalpair)[] |
| `mutable_data` | [`NCKeyValPair`](../modules.md#nckeyvalpair)[] |
| `payer` | `string` |
| `payer_prv_key` | `string` |

#### Defined in

[types.ts:277](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/types.ts#L277)

___

### NCPoolInfo

Ƭ **NCPoolInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `code` | `string` |
| `creation_date` | `string` |
| `description` | `string` |
| `id` | `string` |
| `last_update_date` | `string` |
| `owner` | `string` |
| `total` | { `contract`: `string` ; `quantity`: `string`  } |
| `total.contract` | `string` |
| `total.quantity` | `string` |

#### Defined in

[types.ts:110](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/types.ts#L110)

___

### NCSwapNCOtoCC

Ƭ **NCSwapNCOtoCC**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `amt` | `string` |
| `creator_to` | `string` |
| `payer` | `string` |
| `payer_prv_key` | `string` |

#### Defined in

[types.ts:130](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/types.ts#L130)
