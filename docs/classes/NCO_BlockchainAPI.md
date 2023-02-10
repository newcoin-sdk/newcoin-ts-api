[@newfound8ion/newcoin-sdk](../README.md) / [Exports](../modules.md) / NCO\_BlockchainAPI

# Class: NCO\_BlockchainAPI

The primary tool to interact with [https://newcoin.org](newcoin.org).

This is an early alpha.

See [https://docs.newcoin.org/](https://docs.newcoin.org/) for an overview of the newcoin ecosystem.

## Table of contents

### Constructors

- [constructor](NCO_BlockchainAPI.md#constructor)

### Properties

- [accounts](NCO_BlockchainAPI.md#accounts)
- [assets](NCO_BlockchainAPI.md#assets)
- [daos](NCO_BlockchainAPI.md#daos)
- [pools](NCO_BlockchainAPI.md#pools)
- [reader](NCO_BlockchainAPI.md#reader)
- [submitter](NCO_BlockchainAPI.md#submitter)
- [txer](NCO_BlockchainAPI.md#txer)
- [utils](NCO_BlockchainAPI.md#utils)
- [defaults](NCO_BlockchainAPI.md#defaults)
- [system\_names](NCO_BlockchainAPI.md#system_names)

### Methods

- [approveDaoProposal](NCO_BlockchainAPI.md#approvedaoproposal)
- [approveDaoStakeProposal](NCO_BlockchainAPI.md#approvedaostakeproposal)
- [approveDaoWhitelistProposal](NCO_BlockchainAPI.md#approvedaowhitelistproposal)
- [buyRam](NCO_BlockchainAPI.md#buyram)
- [changeFile](NCO_BlockchainAPI.md#changefile)
- [claimAuctionWinBid](NCO_BlockchainAPI.md#claimauctionwinbid)
- [claimNftsFromAuction](NCO_BlockchainAPI.md#claimnftsfromauction)
- [createAccount](NCO_BlockchainAPI.md#createaccount)
- [createAuction](NCO_BlockchainAPI.md#createauction)
- [createBadgeTemplate](NCO_BlockchainAPI.md#createbadgetemplate)
- [createCollection](NCO_BlockchainAPI.md#createcollection)
- [createDao](NCO_BlockchainAPI.md#createdao)
- [createDaoProposal](NCO_BlockchainAPI.md#createdaoproposal)
- [createDaoStakeProposal](NCO_BlockchainAPI.md#createdaostakeproposal)
- [createDaoUserWhitelistProposal](NCO_BlockchainAPI.md#createdaouserwhitelistproposal)
- [createFile](NCO_BlockchainAPI.md#createfile)
- [createKeyPair](NCO_BlockchainAPI.md#createkeypair)
- [createLikeTemplate](NCO_BlockchainAPI.md#createliketemplate)
- [createPermission](NCO_BlockchainAPI.md#createpermission)
- [createPool](NCO_BlockchainAPI.md#createpool)
- [createRootCollection](NCO_BlockchainAPI.md#createrootcollection)
- [createUser](NCO_BlockchainAPI.md#createuser)
- [dldUnstakeMainDAO](NCO_BlockchainAPI.md#dldunstakemaindao)
- [editAuction](NCO_BlockchainAPI.md#editauction)
- [eraseAuction](NCO_BlockchainAPI.md#eraseauction)
- [executeDaoProposal](NCO_BlockchainAPI.md#executedaoproposal)
- [executeDaoStakeProposal](NCO_BlockchainAPI.md#executedaostakeproposal)
- [executeDaoWhitelistProposal](NCO_BlockchainAPI.md#executedaowhitelistproposal)
- [getAccountBalance](NCO_BlockchainAPI.md#getaccountbalance)
- [getPoolInfo](NCO_BlockchainAPI.md#getpoolinfo)
- [instUnstakeMainDAO](NCO_BlockchainAPI.md#instunstakemaindao)
- [linkPermission](NCO_BlockchainAPI.md#linkpermission)
- [mintAsset](NCO_BlockchainAPI.md#mintasset)
- [mintBadge](NCO_BlockchainAPI.md#mintbadge)
- [mintLike](NCO_BlockchainAPI.md#mintlike)
- [mintNftToRoot](NCO_BlockchainAPI.md#mintnfttoroot)
- [mintProfile](NCO_BlockchainAPI.md#mintprofile)
- [modifyAsset](NCO_BlockchainAPI.md#modifyasset)
- [placeAuctionBid](NCO_BlockchainAPI.md#placeauctionbid)
- [stakeMainDAO](NCO_BlockchainAPI.md#stakemaindao)
- [stakePool](NCO_BlockchainAPI.md#stakepool)
- [submitTx](NCO_BlockchainAPI.md#submittx)
- [swapNcoToCreatorCoin](NCO_BlockchainAPI.md#swapncotocreatorcoin)
- [txGNCOBalance](NCO_BlockchainAPI.md#txgncobalance)
- [txNCOBalance](NCO_BlockchainAPI.md#txncobalance)
- [unstakePool](NCO_BlockchainAPI.md#unstakepool)
- [voteOnProposal](NCO_BlockchainAPI.md#voteonproposal)
- [withdrawVoteDeposit](NCO_BlockchainAPI.md#withdrawvotedeposit)

## Constructors

### constructor

• **new NCO_BlockchainAPI**(`n`)

Init the api

**`Name`**

newcoin-api

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | [`NCInit`](../modules/internal_.md#ncinit) |

#### Defined in

[index.ts:111](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/index.ts#L111)

## Properties

### accounts

• **accounts**: [`NCO_account_API`](internal_.NCO_account_API.md)

#### Defined in

[index.ts:96](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/index.ts#L96)

___

### assets

• **assets**: [`NCO_assets_API`](internal_.NCO_assets_API.md)

#### Defined in

[index.ts:97](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/index.ts#L97)

___

### daos

• **daos**: [`NCO_daos_API`](internal_.NCO_daos_API.md)

#### Defined in

[index.ts:93](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/index.ts#L93)

___

### pools

• **pools**: [`NCO_pools_API`](internal_.NCO_pools_API.md)

#### Defined in

[index.ts:94](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/index.ts#L94)

___

### reader

• **reader**: [`NCO_read_API`](internal_.NCO_read_API.md)

#### Defined in

[index.ts:98](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/index.ts#L98)

___

### submitter

• **submitter**: [`NCO_submit_API`](internal_.NCO_submit_API.md)

#### Defined in

[index.ts:99](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/index.ts#L99)

___

### txer

• **txer**: [`NCO_tx_API`](internal_.NCO_tx_API.md)

#### Defined in

[index.ts:100](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/index.ts#L100)

___

### utils

• **utils**: [`NCO_utils_API`](internal_.NCO_utils_API.md)

#### Defined in

[index.ts:95](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/index.ts#L95)

___

### defaults

▪ `Static` **defaults**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `devnet_services` | [`NCInitServices`](../modules/internal_.md#ncinitservices) |
| `devnet_urls` | [`NCInitUrls`](../modules/internal_.md#nciniturls) |
| `devnet_urls_prod` | [`NCInitUrls`](../modules/internal_.md#nciniturls) |

#### Defined in

[index.ts:84](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/index.ts#L84)

___

### system\_names

▪ `Static` **system\_names**: `Object` = `{}`

#### Defined in

[index.ts:90](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/index.ts#L90)

## Methods

### approveDaoProposal

▸ **approveDaoProposal**(`inpt`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCApproveDaoProposal`](../modules.md#ncapprovedaoproposal) |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Defined in

[index.ts:681](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/index.ts#L681)

___

### approveDaoStakeProposal

▸ **approveDaoStakeProposal**(`inpt`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCApproveDaoProposal`](../modules.md#ncapprovedaoproposal) |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Defined in

[index.ts:683](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/index.ts#L683)

___

### approveDaoWhitelistProposal

▸ **approveDaoWhitelistProposal**(`inpt`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCApproveDaoProposal`](../modules.md#ncapprovedaoproposal) |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Defined in

[index.ts:682](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/index.ts#L682)

___

### buyRam

▸ **buyRam**(`inpt`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCBuyRam`](../modules.md#ncbuyram) |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Defined in

[index.ts:659](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/index.ts#L659)

___

### changeFile

▸ **changeFile**(`inpt`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCChangeFile`](../modules.md#ncchangefile) |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Defined in

[index.ts:444](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/index.ts#L444)

___

### claimAuctionWinBid

▸ **claimAuctionWinBid**(`params`, `key`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

Claim the winning bid as the seller of an auction

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`NCClaimNftsParams`](../interfaces/internal_.NCClaimNftsParams.md) |
| `key` | `string` |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

claim transaction id

#### Defined in

[index.ts:632](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/index.ts#L632)

___

### claimNftsFromAuction

▸ **claimNftsFromAuction**(`params`, `key`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

Claim NFTs whenever you win an auction

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`NCClaimNftsParams`](../interfaces/internal_.NCClaimNftsParams.md) |
| `key` | `string` |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

claim transaction id

#### Defined in

[index.ts:623](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/index.ts#L623)

___

### createAccount

▸ **createAccount**(`inpt`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCCreateUser`](../modules.md#nccreateuser) |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Defined in

[index.ts:658](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/index.ts#L658)

___

### createAuction

▸ **createAuction**(`params`, `key`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

Create a new auction with the specified parameters

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`NCCreateAuctionParams`](../interfaces/internal_.NCCreateAuctionParams.md) |
| `key` | `string` |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

create auction transaction id

#### Defined in

[index.ts:605](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/index.ts#L605)

___

### createBadgeTemplate

▸ **createBadgeTemplate**(`name`, `key`, `col?`, `sch?`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `key` | `string` |
| `col?` | `string` |
| `sch?` | `string` |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Defined in

[index.ts:258](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/index.ts#L258)

___

### createCollection

▸ **createCollection**(`inpt`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCCreateCollection`](../modules.md#nccreatecollection) |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Defined in

[index.ts:663](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/index.ts#L663)

___

### createDao

▸ **createDao**(`inpt`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCCreateDao`](../modules.md#nccreatedao) |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Defined in

[index.ts:676](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/index.ts#L676)

___

### createDaoProposal

▸ **createDaoProposal**(`inpt`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCCreateDaoProposal`](../modules.md#nccreatedaoproposal) |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Defined in

[index.ts:677](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/index.ts#L677)

___

### createDaoStakeProposal

▸ **createDaoStakeProposal**(`inpt`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCCreateDaoStakeProposal`](../modules.md#nccreatedaostakeproposal) |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Defined in

[index.ts:679](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/index.ts#L679)

___

### createDaoUserWhitelistProposal

▸ **createDaoUserWhitelistProposal**(`inpt`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCCreateDaoUserWhitelistProposal`](../modules.md#nccreatedaouserwhitelistproposal) |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Defined in

[index.ts:678](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/index.ts#L678)

___

### createFile

▸ **createFile**(`inpt`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

Create File

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCMintFile`](../modules.md#ncmintfile) |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

Create file transaction id

#### Defined in

[index.ts:370](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/index.ts#L370)

___

### createKeyPair

▸ **createKeyPair**(): `Promise`<[`NCKeyPair`](../modules.md#nckeypair)\>

#### Returns

`Promise`<[`NCKeyPair`](../modules.md#nckeypair)\>

#### Defined in

[index.ts:657](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/index.ts#L657)

___

### createLikeTemplate

▸ **createLikeTemplate**(`name`, `key`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

Bind collection to root collection

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `key` | `string` |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

Create NFT in the root collection referring to

#### Defined in

[index.ts:208](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/index.ts#L208)

___

### createPermission

▸ **createPermission**(`inpt`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCCreatePermission`](../modules.md#nccreatepermission) |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Defined in

[index.ts:660](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/index.ts#L660)

___

### createPool

▸ **createPool**(`inpt`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCCreatePool`](../modules.md#nccreatepool) |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Defined in

[index.ts:672](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/index.ts#L672)

___

### createRootCollection

▸ **createRootCollection**(`name`, `key`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

Create default collection for the account and schemes

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `key` | `string` |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

Create Collection and template transactions' ids

#### Defined in

[index.ts:144](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/index.ts#L144)

___

### createUser

▸ **createUser**(`inpt`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCCreateUser`](../modules.md#nccreateuser) |

#### Returns

`Promise`<`void`\>

#### Defined in

[index.ts:133](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/index.ts#L133)

___

### dldUnstakeMainDAO

▸ **dldUnstakeMainDAO**(`inpt`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCStakeMainDao`](../modules.md#ncstakemaindao) |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Defined in

[index.ts:670](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/index.ts#L670)

___

### editAuction

▸ **editAuction**(`params`, `key`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

Edit an auction with the specified parameters, internally it erases the existing one
and creates a new one with the specified parameters.

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`NCEditAuctionParams`](../interfaces/internal_.NCEditAuctionParams.md) |
| `key` | `string` |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

transaction id

#### Defined in

[index.ts:651](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/index.ts#L651)

___

### eraseAuction

▸ **eraseAuction**(`params`, `key`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

Erase an auction as long as it has no bids

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`NCClaimNftsParams`](../interfaces/internal_.NCClaimNftsParams.md) |
| `key` | `string` |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

delete transaction id

#### Defined in

[index.ts:641](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/index.ts#L641)

___

### executeDaoProposal

▸ **executeDaoProposal**(`inpt`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCExecuteDaoProposal`](../modules.md#ncexecutedaoproposal) |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Defined in

[index.ts:685](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/index.ts#L685)

___

### executeDaoStakeProposal

▸ **executeDaoStakeProposal**(`inpt`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCExecuteDaoProposal`](../modules.md#ncexecutedaoproposal) |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Defined in

[index.ts:687](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/index.ts#L687)

___

### executeDaoWhitelistProposal

▸ **executeDaoWhitelistProposal**(`inpt`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCExecuteDaoProposal`](../modules.md#ncexecutedaoproposal) |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Defined in

[index.ts:686](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/index.ts#L686)

___

### getAccountBalance

▸ **getAccountBalance**(`inpt`): `Promise`<[`NCReturnInfo`](../modules.md#ncreturninfo)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCGetAccInfo`](../modules.md#ncgetaccinfo) |

#### Returns

`Promise`<[`NCReturnInfo`](../modules.md#ncreturninfo)\>

#### Defined in

[index.ts:696](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/index.ts#L696)

___

### getPoolInfo

▸ **getPoolInfo**(`payload`): `Promise`<[`NCPoolsInfo`](../modules.md#ncpoolsinfo)\>

Get pool info

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | [`NCGetPoolInfo`](../modules.md#ncgetpoolinfo) |

#### Returns

`Promise`<[`NCPoolsInfo`](../modules.md#ncpoolsinfo)\>

Tx data

#### Defined in

[index.ts:558](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/index.ts#L558)

___

### instUnstakeMainDAO

▸ **instUnstakeMainDAO**(`inpt`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCStakeMainDao`](../modules.md#ncstakemaindao) |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Defined in

[index.ts:669](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/index.ts#L669)

___

### linkPermission

▸ **linkPermission**(`inpt`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCLinkPerm`](../modules.md#nclinkperm) |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Defined in

[index.ts:661](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/index.ts#L661)

___

### mintAsset

▸ **mintAsset**(`inpt`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCMintAsset`](../modules.md#ncmintasset) |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Defined in

[index.ts:664](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/index.ts#L664)

___

### mintBadge

▸ **mintBadge**(`inpt`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCMintBadge`](../modules/internal_.md#ncmintbadge) |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Defined in

[index.ts:282](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/index.ts#L282)

___

### mintLike

▸ **mintLike**(`inpt`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCMintLike`](../modules/internal_.md#ncmintlike) |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Defined in

[index.ts:230](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/index.ts#L230)

___

### mintNftToRoot

▸ **mintNftToRoot**(`inpt`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCMintNftToRoot`](../modules/internal_.md#ncmintnfttoroot) |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Defined in

[index.ts:474](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/index.ts#L474)

___

### mintProfile

▸ **mintProfile**(`inpt`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCMintProfile`](../modules.md#ncmintprofile) |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Defined in

[index.ts:321](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/index.ts#L321)

___

### modifyAsset

▸ **modifyAsset**(`inpt`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCModifyAsset`](../modules.md#ncmodifyasset) |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Defined in

[index.ts:665](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/index.ts#L665)

___

### placeAuctionBid

▸ **placeAuctionBid**(`params`, `key`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

Place a new bid into an active auction

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`NCPlaceBidParams`](../interfaces/internal_.NCPlaceBidParams.md) |
| `key` | `string` |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

bid transaction id

#### Defined in

[index.ts:614](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/index.ts#L614)

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

[index.ts:668](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/index.ts#L668)

___

### stakePool

▸ **stakePool**(`inpt`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCStakePool`](../modules.md#ncstakepool) |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Defined in

[index.ts:673](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/index.ts#L673)

___

### submitTx

▸ **submitTx**(`actions`, `public_keys`, `private_keys`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `actions` | `any`[] |
| `public_keys` | `string`[] |
| `private_keys` | `string`[] |

#### Returns

`Promise`<`any`\>

#### Defined in

[index.ts:692](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/index.ts#L692)

___

### swapNcoToCreatorCoin

▸ **swapNcoToCreatorCoin**(`inpt`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCSwapNCOtoCC`](../modules/internal_.md#ncswapncotocc) |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Defined in

[index.ts:515](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/index.ts#L515)

___

### txGNCOBalance

▸ **txGNCOBalance**(`inpt`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCTxBal`](../modules.md#nctxbal) |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Defined in

[index.ts:695](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/index.ts#L695)

___

### txNCOBalance

▸ **txNCOBalance**(`inpt`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCTxBal`](../modules.md#nctxbal) |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Defined in

[index.ts:694](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/index.ts#L694)

___

### unstakePool

▸ **unstakePool**(`inpt`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCUnstakePool`](../modules.md#ncunstakepool) |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Defined in

[index.ts:674](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/index.ts#L674)

___

### voteOnProposal

▸ **voteOnProposal**(`inpt`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCDaoProposalVote`](../modules.md#ncdaoproposalvote) |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Defined in

[index.ts:689](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/index.ts#L689)

___

### withdrawVoteDeposit

▸ **withdrawVoteDeposit**(`inpt`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCDaoWithdrawVoteDeposit`](../modules.md#ncdaowithdrawvotedeposit) |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Defined in

[index.ts:690](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/index.ts#L690)
