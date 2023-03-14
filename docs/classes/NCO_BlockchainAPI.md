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
- [dev\_init\_arg](NCO_BlockchainAPI.md#dev_init_arg)

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
- [normmalizeUserName](NCO_BlockchainAPI.md#normmalizeusername)
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

[index.ts:117](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/index.ts#L117)

## Properties

### accounts

• **accounts**: [`NCO_account_API`](internal_.NCO_account_API.md)

#### Defined in

[index.ts:102](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/index.ts#L102)

___

### assets

• **assets**: [`NCO_assets_API`](internal_.NCO_assets_API.md)

#### Defined in

[index.ts:103](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/index.ts#L103)

___

### daos

• **daos**: [`NCO_daos_API`](internal_.NCO_daos_API.md)

#### Defined in

[index.ts:99](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/index.ts#L99)

___

### pools

• **pools**: [`NCO_pools_API`](internal_.NCO_pools_API.md)

#### Defined in

[index.ts:100](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/index.ts#L100)

___

### reader

• **reader**: [`NCO_read_API`](internal_.NCO_read_API.md)

#### Defined in

[index.ts:104](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/index.ts#L104)

___

### submitter

• **submitter**: [`NCO_submit_API`](internal_.NCO_submit_API.md)

#### Defined in

[index.ts:105](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/index.ts#L105)

___

### txer

• **txer**: [`NCO_tx_API`](internal_.NCO_tx_API.md)

#### Defined in

[index.ts:106](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/index.ts#L106)

___

### utils

• **utils**: [`NCO_utils_API`](internal_.NCO_utils_API.md)

#### Defined in

[index.ts:101](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/index.ts#L101)

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

[index.ts:86](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/index.ts#L86)

___

### dev\_init\_arg

▪ `Static` **dev\_init\_arg**: [`NCInit`](../modules/internal_.md#ncinit)

#### Defined in

[index.ts:92](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/index.ts#L92)

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

[index.ts:683](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/index.ts#L683)

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

[index.ts:685](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/index.ts#L685)

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

[index.ts:684](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/index.ts#L684)

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

[index.ts:661](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/index.ts#L661)

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

[index.ts:448](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/index.ts#L448)

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

[index.ts:634](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/index.ts#L634)

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

[index.ts:625](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/index.ts#L625)

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

[index.ts:660](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/index.ts#L660)

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

[index.ts:607](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/index.ts#L607)

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

[index.ts:262](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/index.ts#L262)

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

[index.ts:665](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/index.ts#L665)

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

[index.ts:678](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/index.ts#L678)

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

[index.ts:679](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/index.ts#L679)

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

[index.ts:681](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/index.ts#L681)

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

[index.ts:680](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/index.ts#L680)

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

[index.ts:374](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/index.ts#L374)

___

### createKeyPair

▸ **createKeyPair**(): `Promise`<[`NCKeyPair`](../modules.md#nckeypair)\>

#### Returns

`Promise`<[`NCKeyPair`](../modules.md#nckeypair)\>

#### Defined in

[index.ts:659](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/index.ts#L659)

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

[index.ts:214](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/index.ts#L214)

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

[index.ts:662](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/index.ts#L662)

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

[index.ts:674](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/index.ts#L674)

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

[index.ts:150](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/index.ts#L150)

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

[index.ts:139](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/index.ts#L139)

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

[index.ts:672](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/index.ts#L672)

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

[index.ts:653](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/index.ts#L653)

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

[index.ts:643](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/index.ts#L643)

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

[index.ts:687](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/index.ts#L687)

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

[index.ts:689](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/index.ts#L689)

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

[index.ts:688](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/index.ts#L688)

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

[index.ts:698](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/index.ts#L698)

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

[index.ts:560](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/index.ts#L560)

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

[index.ts:671](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/index.ts#L671)

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

[index.ts:663](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/index.ts#L663)

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

[index.ts:666](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/index.ts#L666)

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

[index.ts:286](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/index.ts#L286)

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

[index.ts:235](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/index.ts#L235)

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

[index.ts:478](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/index.ts#L478)

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

[index.ts:325](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/index.ts#L325)

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

[index.ts:667](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/index.ts#L667)

___

### normmalizeUserName

▸ **normmalizeUserName**(`name`, `r`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `r` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[index.ts:700](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/index.ts#L700)

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

[index.ts:616](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/index.ts#L616)

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

[index.ts:670](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/index.ts#L670)

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

[index.ts:675](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/index.ts#L675)

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

[index.ts:694](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/index.ts#L694)

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

[index.ts:518](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/index.ts#L518)

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

[index.ts:697](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/index.ts#L697)

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

[index.ts:696](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/index.ts#L696)

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

[index.ts:676](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/index.ts#L676)

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

[index.ts:691](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/index.ts#L691)

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

[index.ts:692](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/index.ts#L692)
