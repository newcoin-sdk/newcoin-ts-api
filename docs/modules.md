[@newfound8ion/newcoin-sdk](README.md) / Exports

# @newfound8ion/newcoin-sdk

## Table of contents

### Namespaces

- [&lt;internal\&gt;](modules/internal_.md)

### Classes

- [NCO\_BlockchainAPI](classes/NCO_BlockchainAPI.md)

### Type Aliases

- [NCApproveDaoProposal](modules.md#ncapprovedaoproposal)
- [NCBuyRam](modules.md#ncbuyram)
- [NCChangeFile](modules.md#ncchangefile)
- [NCCreateCollection](modules.md#nccreatecollection)
- [NCCreateDao](modules.md#nccreatedao)
- [NCCreateDaoProposal](modules.md#nccreatedaoproposal)
- [NCCreateDaoStakeProposal](modules.md#nccreatedaostakeproposal)
- [NCCreateDaoUserWhitelistProposal](modules.md#nccreatedaouserwhitelistproposal)
- [NCCreatePermission](modules.md#nccreatepermission)
- [NCCreatePool](modules.md#nccreatepool)
- [NCCreateUser](modules.md#nccreateuser)
- [NCDaoProposalVote](modules.md#ncdaoproposalvote)
- [NCDaoWithdrawVoteDeposit](modules.md#ncdaowithdrawvotedeposit)
- [NCExecuteDaoProposal](modules.md#ncexecutedaoproposal)
- [NCGetAccInfo](modules.md#ncgetaccinfo)
- [NCGetDaoProposals](modules.md#ncgetdaoproposals)
- [NCGetDaoWhiteList](modules.md#ncgetdaowhitelist)
- [NCGetPoolInfo](modules.md#ncgetpoolinfo)
- [NCGetVotes](modules.md#ncgetvotes)
- [NCKeyPair](modules.md#nckeypair)
- [NCKeyValPair](modules.md#nckeyvalpair)
- [NCLinkPerm](modules.md#nclinkperm)
- [NCMintAsset](modules.md#ncmintasset)
- [NCMintFile](modules.md#ncmintfile)
- [NCMintLink](modules.md#ncmintlink)
- [NCMintProfile](modules.md#ncmintprofile)
- [NCModifyAsset](modules.md#ncmodifyasset)
- [NCNameType](modules.md#ncnametype)
- [NCPoolsInfo](modules.md#ncpoolsinfo)
- [NCReturnInfo](modules.md#ncreturninfo)
- [NCReturnTxs](modules.md#ncreturntxs)
- [NCStakeMainDao](modules.md#ncstakemaindao)
- [NCStakePool](modules.md#ncstakepool)
- [NCTxBal](modules.md#nctxbal)
- [NCTxNcoBal](modules.md#nctxncobal)
- [NCUnstakePool](modules.md#ncunstakepool)

### Variables

- [default\_nft\_schema](modules.md#default_nft_schema)
- [devnet\_services](modules.md#devnet_services)
- [devnet\_urls](modules.md#devnet_urls)
- [file\_schema](modules.md#file_schema)
- [link\_schema](modules.md#link_schema)
- [profile\_schema](modules.md#profile_schema)

## Type Aliases

### NCApproveDaoProposal

Ƭ **NCApproveDaoProposal**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `approver` | `string` |
| `approver_prv_key` | `string` |
| `dao_id?` | `number` |
| `dao_owner?` | `string` |
| `proposal_author?` | `string` |
| `proposal_id?` | `number` |

#### Defined in

[types.ts:185](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/types.ts#L185)

___

### NCBuyRam

Ƭ **NCBuyRam**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `payer` | `string` |
| `payer_prv_key` | `string` |
| `ram_amt` | `number` |
| `user` | `string` |

#### Defined in

[types.ts:16](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/types.ts#L16)

___

### NCChangeFile

Ƭ **NCChangeFile**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `asset_id` | `string` |
| `editor` | `string` |
| `new_content?` | `string` |
| `new_image?` | `string` |
| `new_name?` | `string` |
| `new_path?` | `string` |
| `owner` | `string` |
| `payer?` | `string` |
| `payer_prv_key` | `string` |

#### Defined in

[types.ts:380](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/types.ts#L380)

___

### NCCreateCollection

Ƭ **NCCreateCollection**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `allow_notify?` | `boolean` |
| `burnable?` | `boolean` |
| `collection_name?` | `string` |
| `max_supply?` | `number` |
| `mkt_fee?` | `number` |
| `schema_fields?` | [`NCNameType`](modules.md#ncnametype)[] |
| `schema_name?` | `string` |
| `template_fields?` | [`NCNameType`](modules.md#ncnametype)[] |
| `template_name?` | `string` |
| `user` | `string` |
| `user_prv_active_key` | `string` |
| `xferable?` | `boolean` |

#### Defined in

[types.ts:35](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/types.ts#L35)

___

### NCCreateDao

Ƭ **NCCreateDao**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `author` | `string` |
| `author_prv_key` | `string` |
| `descr` | `string` |
| `token?` | `string` |

#### Defined in

[types.ts:138](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/types.ts#L138)

___

### NCCreateDaoProposal

Ƭ **NCCreateDaoProposal**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `dao_id?` | `string` |
| `dao_owner` | `string` |
| `pass_rate` | `number` |
| `proposer` | `string` |
| `proposer_prv_key` | `string` |
| `summary` | `string` |
| `title` | `string` |
| `url` | `string` |
| `vote_end` | `string` |
| `vote_start` | `string` |

#### Defined in

[types.ts:145](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/types.ts#L145)

___

### NCCreateDaoStakeProposal

Ƭ **NCCreateDaoStakeProposal**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `dao_id?` | `string` |
| `dao_owner` | `string` |
| `pass_rate` | `number` |
| `proposer` | `string` |
| `proposer_prv_key` | `string` |
| `quantity` | { `contract`: `string` ; `quantity`: `string`  } |
| `quantity.contract` | `string` |
| `quantity.quantity` | `string` |
| `to` | `string` |
| `vote_end` | `string` |
| `vote_start` | `string` |

#### Defined in

[types.ts:170](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/types.ts#L170)

___

### NCCreateDaoUserWhitelistProposal

Ƭ **NCCreateDaoUserWhitelistProposal**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `dao_id?` | `string` |
| `dao_owner` | `string` |
| `pass_rate` | `number` |
| `proposer` | `string` |
| `proposer_prv_key` | `string` |
| `type` | `string` |
| `user` | `string` |
| `vote_end` | `string` |
| `vote_start` | `string` |

#### Defined in

[types.ts:158](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/types.ts#L158)

___

### NCCreatePermission

Ƭ **NCCreatePermission**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `author` | `string` |
| `author_prv_active_key` | `string` |
| `perm_name` | `string` |
| `perm_pub_key` | `string` |

#### Defined in

[types.ts:50](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/types.ts#L50)

___

### NCCreatePool

Ƭ **NCCreatePool**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `is_deflatable?` | `boolean` |
| `is_inflatable?` | `boolean` |
| `is_treasury?` | `boolean` |
| `owner` | `string` |
| `owner_prv_active_key` | `string` |
| `ticker?` | `string` |

#### Defined in

[types.ts:65](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/types.ts#L65)

___

### NCCreateUser

Ƭ **NCCreateUser**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cpu_amount?` | `string` |
| `net_amount?` | `string` |
| `newUser` | `string` |
| `newacc_pub_active_key` | `string` |
| `newacc_pub_owner_key` | `string` |
| `payer` | `string` |
| `payer_prv_key` | `string` |
| `ram_amt?` | `number` |
| `xfer?` | `boolean` |

#### Defined in

[types.ts:23](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/types.ts#L23)

___

### NCDaoProposalVote

Ƭ **NCDaoProposalVote**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `dao_id?` | `string` |
| `dao_owner?` | `string` |
| `option` | `string` |
| `proposal_id` | `string` |
| `proposal_type?` | `string` |
| `quantity` | `string` |
| `voter` | `string` |
| `voter_prv_key` | `string` |

#### Defined in

[types.ts:217](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/types.ts#L217)

___

### NCDaoWithdrawVoteDeposit

Ƭ **NCDaoWithdrawVoteDeposit**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `vote_id` | `string` |
| `voter` | `string` |
| `voter_prv_key` | `string` |

#### Defined in

[types.ts:228](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/types.ts#L228)

___

### NCExecuteDaoProposal

Ƭ **NCExecuteDaoProposal**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `dao_id?` | `number` |
| `dao_owner?` | `string` |
| `exec` | `string` |
| `exec_prv_key` | `string` |
| `proposal_author?` | `string` |
| `proposal_id?` | `number` |

#### Defined in

[types.ts:194](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/types.ts#L194)

___

### NCGetAccInfo

Ƭ **NCGetAccInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `contract?` | `string` |
| `owner` | `string` |
| `token_name?` | `string` |

#### Defined in

[types.ts:392](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/types.ts#L392)

___

### NCGetDaoProposals

Ƭ **NCGetDaoProposals**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `dao_id?` | `string` |
| `dao_owner?` | `string` |
| `limit?` | `number` |
| `lower_bound?` | `string` |
| `proposal_author?` | `string` |
| `proposal_id?` | `string` |
| `reverse?` | `boolean` |
| `upper_bound?` | `string` |

#### Defined in

[types.ts:204](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/types.ts#L204)

___

### NCGetDaoWhiteList

Ƭ **NCGetDaoWhiteList**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `dao_id?` | `string` |
| `dao_owner?` | `string` |
| `limit?` | `string` |
| `lower_bound?` | `string` |
| `reverse?` | `boolean` |
| `upper_bound?` | `string` |

#### Defined in

[types.ts:242](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/types.ts#L242)

___

### NCGetPoolInfo

Ƭ **NCGetPoolInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `code?` | `string` |
| `owner?` | `string` |

#### Defined in

[types.ts:398](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/types.ts#L398)

___

### NCGetVotes

Ƭ **NCGetVotes**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `limit?` | `string` |
| `lower_bound?` | `string` |
| `reverse?` | `boolean` |
| `upper_bound?` | `string` |
| `voter` | `string` |

#### Defined in

[types.ts:234](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/types.ts#L234)

___

### NCKeyPair

Ƭ **NCKeyPair**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `prv_key` | `string` |
| `pub_key` | `string` |

#### Defined in

[types.ts:6](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/types.ts#L6)

___

### NCKeyValPair

Ƭ **NCKeyValPair**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `string`[] |

#### Defined in

[types.ts:251](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/types.ts#L251)

___

### NCLinkPerm

Ƭ **NCLinkPerm**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `action_owner` | `string` |
| `action_to_link` | `string` |
| `author` | `string` |
| `author_prv_active_key` | `string` |
| `perm_to_link` | `string` |

#### Defined in

[types.ts:57](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/types.ts#L57)

___

### NCMintAsset

Ƭ **NCMintAsset**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `col_name?` | `string` |
| `creator` | `string` |
| `immutable_data` | [`NCKeyValPair`](modules.md#nckeyvalpair)[] |
| `mutable_data` | [`NCKeyValPair`](modules.md#nckeyvalpair)[] |
| `payer?` | `string` |
| `payer_prv_key?` | `string` |
| `sch_name?` | `string` |
| `tmpl_id?` | `number` |
| `user_prv_active_key?` | `string` |

#### Defined in

[types.ts:256](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/types.ts#L256)

___

### NCMintFile

Ƭ **NCMintFile**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `content` | `string` |
| `creator` | `string` |
| `image` | `string` |
| `name` | `string` |
| `path` | `string` |
| `payer` | `string` |
| `payer_prv_key` | `string` |
| `user_prv_active_key` | `string` |

#### Defined in

[types.ts:369](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/types.ts#L369)

___

### NCMintLink

Ƭ **NCMintLink**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `col_name` | `string` |
| `creator` | `string` |
| `description?` | `string` |
| `image?` | `string` |
| `payer` | `string` |
| `payer_prv_key` | `string` |
| `subj_name` | `string` |
| `subj_type` | `string` |

#### Defined in

[types.ts:285](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/types.ts#L285)

___

### NCMintProfile

Ƭ **NCMintProfile**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `apple` | `string` |
| `aspectRatio` | `string` |
| `authority` | `string` |
| `bio` | `string` |
| `blurHash` | `string` |
| `content` | `string` |
| `contentType` | `string` |
| `contentUrl` | `string` |
| `coverContentUrl` | `string` |
| `creator` | `string` |
| `discord` | `string` |
| `displayName` | `string` |
| `email` | `string` |
| `facebook` | `string` |
| `facebookId` | `string` |
| `firstName` | `string` |
| `fullName` | `string` |
| `instagram` | `string` |
| `lastName` | `string` |
| `medium` | `string` |
| `offer` | `string` |
| `payer` | `string` |
| `payer_prv_key` | `string` |
| `phone` | `string` |
| `pinterest` | `string` |
| `reddit` | `string` |
| `signal` | `string` |
| `signature` | `string` |
| `snapchat` | `string` |
| `soundcloud` | `string` |
| `source` | `string` |
| `spotify` | `string` |
| `status` | `string` |
| `telegram` | `string` |
| `tiktok` | `string` |
| `tumblr` | `string` |
| `twitter` | `string` |
| `user_prv_active_key` | `string` |
| `username` | `string` |
| `youtube` | `string` |
| `youtubeId` | `string` |

#### Defined in

[types.ts:318](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/types.ts#L318)

___

### NCModifyAsset

Ƭ **NCModifyAsset**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `asset_id` | `string` |
| `editor` | `string` |
| `new_data` | [`NCKeyValPair`](modules.md#nckeyvalpair)[] |
| `owner` | `string` |
| `payer` | `string` |
| `payer_prv_key` | `string` |

#### Defined in

[types.ts:268](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/types.ts#L268)

___

### NCNameType

Ƭ **NCNameType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `type` | `string` |

#### Defined in

[types.ts:11](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/types.ts#L11)

___

### NCPoolsInfo

Ƭ **NCPoolsInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `more` | `boolean` |
| `next_key` | `string` |
| `rows` | [`NCPoolInfo`](modules/internal_.md#ncpoolinfo)[] |

#### Defined in

[types.ts:124](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/types.ts#L124)

___

### NCReturnInfo

Ƭ **NCReturnInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `acc_balances?` | `string`[] |

#### Defined in

[types.ts:442](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/types.ts#L442)

___

### NCReturnTxs

Ƭ **NCReturnTxs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `TxID?` | `string` |
| `TxID_WithdrawVoteDeposit?` | `string` |
| `TxID_addToWhiteList?` | `string` |
| `TxID_approveDaoProposal?` | `string` |
| `TxID_changeFile?` | `string` |
| `TxID_createAcc?` | `string` |
| `TxID_createCol?` | `string` |
| `TxID_createDao?` | `string` |
| `TxID_createDaoProposal?` | `string` |
| `TxID_createPerm?` | `string` |
| `TxID_createPool?` | `string` |
| `TxID_createSch?` | `string` |
| `TxID_createTpl?` | `string` |
| `TxID_executeDaoProposal?` | `string` |
| `TxID_linkPerm?` | `string` |
| `TxID_mintAsset?` | `string` |
| `TxID_mintFile?` | `string` |
| `TxID_mintNft?` | `string` |
| `TxID_mintProfile?` | `string` |
| `TxID_modifyAsset?` | `string` |
| `TxID_removeFromWhiteList?` | `string` |
| `TxID_stakeMainDAO?` | `string` |
| `TxID_stakePool?` | `string` |
| `TxID_txNcoBalance?` | `string` |
| `TxID_unstakeMainDAO?` | `string` |
| `TxID_unstakePool?` | `string` |
| `TxID_voteDaoProposal?` | `string` |
| `TxID_withdrawFromPool?` | `string` |
| `asset_id?` | `string` |
| `dao_id?` | `string` |
| `pool_code?` | `string` |
| `pool_id?` | `string` |
| `proposal_id?` | `number` |
| `template_id?` | `string` |
| `tx?` | `TransactResult` |

#### Defined in

[types.ts:403](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/types.ts#L403)

___

### NCStakeMainDao

Ƭ **NCStakeMainDao**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `amt` | `string` |
| `payer` | `string` |
| `payer_prv_key` | `string` |

#### Defined in

[types.ts:74](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/types.ts#L74)

___

### NCStakePool

Ƭ **NCStakePool**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `amt` | `string` |
| `owner` | `string` |
| `payer` | `string` |
| `payer_prv_key` | `string` |

#### Defined in

[types.ts:80](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/types.ts#L80)

___

### NCTxBal

Ƭ **NCTxBal**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `amt` | `string` |
| `memo?` | `string` |
| `payer` | `string` |
| `payer_prv_key` | `string` |
| `to` | `string` |

#### Defined in

[types.ts:102](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/types.ts#L102)

___

### NCTxNcoBal

Ƭ **NCTxNcoBal**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `amt` | `string` |
| `memo` | `string` |
| `payer` | `string` |
| `payer_prv_key` | `string` |
| `to` | `string` |

#### Defined in

[types.ts:94](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/types.ts#L94)

___

### NCUnstakePool

Ƭ **NCUnstakePool**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `amt` | `string` |
| `payer` | `string` |
| `payer_prv_key` | `string` |

#### Defined in

[types.ts:87](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/types.ts#L87)

## Variables

### default\_nft\_schema

• `Const` **default\_nft\_schema**: { `name`: `string` = 'name'; `type`: `string` = "string" }[]

#### Defined in

[schemas.ts:9](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/schemas.ts#L9)

___

### devnet\_services

• `Const` **devnet\_services**: [`NCInitServices`](modules/internal_.md#ncinitservices)

#### Defined in

[system.ts:43](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/system.ts#L43)

___

### devnet\_urls

• `Const` **devnet\_urls**: [`NCInitUrls`](modules/internal_.md#nciniturls)

#### Defined in

[system.ts:26](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/system.ts#L26)

___

### file\_schema

• `Const` **file\_schema**: { `name`: `string` = 'name'; `type`: `string` = 'string' }[]

#### Defined in

[schemas.ts:19](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/schemas.ts#L19)

___

### link\_schema

• `Const` **link\_schema**: { `name`: `string` = 'name'; `type`: `string` = 'string' }[]

#### Defined in

[schemas.ts:91](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/schemas.ts#L91)

___

### profile\_schema

• `Const` **profile\_schema**: { `name`: `string` = "name"; `type`: `string` = "string" }[]

#### Defined in

[schemas.ts:38](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/schemas.ts#L38)
