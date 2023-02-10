[@newfound8ion/newcoin-sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / NCO\_daos\_API

# Class: NCO\_daos\_API

[<internal>](../modules/internal_.md).NCO_daos_API

## Table of contents

### Constructors

- [constructor](internal_.NCO_daos_API.md#constructor)

### Methods

- [SubmitTx](internal_.NCO_daos_API.md#submittx)
- [approveDaoProposal](internal_.NCO_daos_API.md#approvedaoproposal)
- [approveDaoStakeProposal](internal_.NCO_daos_API.md#approvedaostakeproposal)
- [approveDaoWhitelistProposal](internal_.NCO_daos_API.md#approvedaowhitelistproposal)
- [createDao](internal_.NCO_daos_API.md#createdao)
- [createDaoProposal](internal_.NCO_daos_API.md#createdaoproposal)
- [createDaoStakeProposal](internal_.NCO_daos_API.md#createdaostakeproposal)
- [createDaoUserWhitelistProposal](internal_.NCO_daos_API.md#createdaouserwhitelistproposal)
- [executeDaoProposal](internal_.NCO_daos_API.md#executedaoproposal)
- [executeDaoStakeProposal](internal_.NCO_daos_API.md#executedaostakeproposal)
- [executeDaoWhitelistProposal](internal_.NCO_daos_API.md#executedaowhitelistproposal)
- [getDaoIdByOwner](internal_.NCO_daos_API.md#getdaoidbyowner)
- [getDaoProposals](internal_.NCO_daos_API.md#getdaoproposals)
- [getDaoStakeProposals](internal_.NCO_daos_API.md#getdaostakeproposals)
- [getDaoWhitelist](internal_.NCO_daos_API.md#getdaowhitelist)
- [getDaoWhitelistProposals](internal_.NCO_daos_API.md#getdaowhitelistproposals)
- [getVotes](internal_.NCO_daos_API.md#getvotes)
- [voteOnProposal](internal_.NCO_daos_API.md#voteonproposal)
- [withdrawVoteDeposit](internal_.NCO_daos_API.md#withdrawvotedeposit)

## Constructors

### constructor

• **new NCO_daos_API**(`inpt`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCInit`](../modules/internal_.md#ncinit) |

#### Defined in

[L1/daos.ts:28](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/L1/daos.ts#L28)

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

[L1/daos.ts:38](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/L1/daos.ts#L38)

___

### approveDaoProposal

▸ **approveDaoProposal**(`inpt`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inpt` | [`NCApproveDaoProposal`](../modules.md#ncapprovedaoproposal) | : NCApproveDaoProposal |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

NCReturnTxs.TxID_approveDaoProposal

#### Defined in

[L1/daos.ts:169](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/L1/daos.ts#L169)

___

### approveDaoStakeProposal

▸ **approveDaoStakeProposal**(`inpt`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inpt` | [`NCApproveDaoProposal`](../modules.md#ncapprovedaoproposal) | : NCApproveDaoProposal |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

NCReturnTxs.TxID_approveDaoProposal

#### Defined in

[L1/daos.ts:231](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/L1/daos.ts#L231)

___

### approveDaoWhitelistProposal

▸ **approveDaoWhitelistProposal**(`inpt`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inpt` | [`NCApproveDaoProposal`](../modules.md#ncapprovedaoproposal) | : NCApproveDaoProposal |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

NCReturnTxs.TxID_approveDaoProposal

#### Defined in

[L1/daos.ts:207](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/L1/daos.ts#L207)

___

### createDao

▸ **createDao**(`inpt`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

DAO creation. One per account.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inpt` | [`NCCreateDao`](../modules.md#nccreatedao) | : NCCreateDao |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

NCReturnTxs.TxID_createDao, NCReturnTxs.dao_id

#### Defined in

[L1/daos.ts:55](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/L1/daos.ts#L55)

___

### createDaoProposal

▸ **createDaoProposal**(`inpt`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inpt` | [`NCCreateDaoProposal`](../modules.md#nccreatedaoproposal) | : NCCreateDaoProposal |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

NCReturnTxs.TxID_createDaoProposal, NCReturnTxs.proposal_id

#### Defined in

[L1/daos.ts:84](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/L1/daos.ts#L84)

___

### createDaoStakeProposal

▸ **createDaoStakeProposal**(`inpt`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inpt` | [`NCCreateDaoStakeProposal`](../modules.md#nccreatedaostakeproposal) | : NCCreateDaoUserWhitelistProposal |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

NCReturnTxs.TxID_createDaoProposal, NCReturnTxs.proposal_id

#### Defined in

[L1/daos.ts:140](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/L1/daos.ts#L140)

___

### createDaoUserWhitelistProposal

▸ **createDaoUserWhitelistProposal**(`inpt`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inpt` | [`NCCreateDaoUserWhitelistProposal`](../modules.md#nccreatedaouserwhitelistproposal) | : NCCreateDaoUserWhitelistProposal |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

NCReturnTxs.TxID_createDaoProposal, NCReturnTxs.proposal_id

#### Defined in

[L1/daos.ts:112](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/L1/daos.ts#L112)

___

### executeDaoProposal

▸ **executeDaoProposal**(`inpt`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inpt` | [`NCExecuteDaoProposal`](../modules.md#ncexecutedaoproposal) | : NCExecuteDaoProposal |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

NCReturnTxs.TxID_executeDaoProposal

#### Defined in

[L1/daos.ts:255](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/L1/daos.ts#L255)

___

### executeDaoStakeProposal

▸ **executeDaoStakeProposal**(`inpt`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inpt` | [`NCExecuteDaoProposal`](../modules.md#ncexecutedaoproposal) | : NCExecuteDaoProposal |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

NCReturnTxs.TxID_executeDaoProposal

#### Defined in

[L1/daos.ts:297](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/L1/daos.ts#L297)

___

### executeDaoWhitelistProposal

▸ **executeDaoWhitelistProposal**(`inpt`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inpt` | [`NCExecuteDaoProposal`](../modules.md#ncexecutedaoproposal) | : NCExecuteDaoProposal |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

NCReturnTxs.TxID_executeDaoProposal

#### Defined in

[L1/daos.ts:277](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/L1/daos.ts#L277)

___

### getDaoIdByOwner

▸ **getDaoIdByOwner**(`owner?`, `noFail?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `owner?` | `string` |
| `noFail?` | `boolean` |

#### Returns

`Promise`<`string`\>

NCReturnTxs.TxID_createDao, NCReturnTxs.dao_id

#### Defined in

[L1/daos.ts:363](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/L1/daos.ts#L363)

___

### getDaoProposals

▸ **getDaoProposals**(`inpt`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCGetDaoProposals`](../modules.md#ncgetdaoproposals) |

#### Returns

`Promise`<`any`\>

#### Defined in

[L1/daos.ts:383](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/L1/daos.ts#L383)

___

### getDaoStakeProposals

▸ **getDaoStakeProposals**(`inpt`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCGetDaoProposals`](../modules.md#ncgetdaoproposals) |

#### Returns

`Promise`<`any`\>

#### Defined in

[L1/daos.ts:449](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/L1/daos.ts#L449)

___

### getDaoWhitelist

▸ **getDaoWhitelist**(`inpt`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCGetDaoWhiteList`](../modules.md#ncgetdaowhitelist) |

#### Returns

`Promise`<`any`\>

#### Defined in

[L1/daos.ts:485](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/L1/daos.ts#L485)

___

### getDaoWhitelistProposals

▸ **getDaoWhitelistProposals**(`inpt`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCGetDaoProposals`](../modules.md#ncgetdaoproposals) |

#### Returns

`Promise`<`any`\>

#### Defined in

[L1/daos.ts:416](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/L1/daos.ts#L416)

___

### getVotes

▸ **getVotes**(`inpt`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCGetVotes`](../modules.md#ncgetvotes) |

#### Returns

`Promise`<`any`\>

#### Defined in

[L1/daos.ts:506](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/L1/daos.ts#L506)

___

### voteOnProposal

▸ **voteOnProposal**(`inpt`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inpt` | [`NCDaoProposalVote`](../modules.md#ncdaoproposalvote) | : NCDaoProposalVote |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

NCReturnTxs.TxID_voteDaoProposal

#### Defined in

[L1/daos.ts:317](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/L1/daos.ts#L317)

___

### withdrawVoteDeposit

▸ **withdrawVoteDeposit**(`inpt`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inpt` | [`NCDaoWithdrawVoteDeposit`](../modules.md#ncdaowithdrawvotedeposit) | : NCDaoWithdrawVoteDeposit |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

NCReturnTxs.TxID_voteDaoProposal

#### Defined in

[L1/daos.ts:339](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/L1/daos.ts#L339)
