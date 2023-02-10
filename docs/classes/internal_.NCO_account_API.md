[@newfound8ion/newcoin-sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / NCO\_account\_API

# Class: NCO\_account\_API

[<internal>](../modules/internal_.md).NCO_account_API

## Table of contents

### Constructors

- [constructor](internal_.NCO_account_API.md#constructor)

### Methods

- [SubmitTx](internal_.NCO_account_API.md#submittx)
- [buyRam](internal_.NCO_account_API.md#buyram)
- [createAccount](internal_.NCO_account_API.md#createaccount)
- [createKeyPair](internal_.NCO_account_API.md#createkeypair)
- [createPermission](internal_.NCO_account_API.md#createpermission)
- [linkPermission](internal_.NCO_account_API.md#linkpermission)

## Constructors

### constructor

• **new NCO_account_API**(`inpt`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCInit`](../modules/internal_.md#ncinit) |

#### Defined in

[L1/accounts.ts:20](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/L1/accounts.ts#L20)

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

[L1/accounts.ts:29](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/L1/accounts.ts#L29)

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

[L1/accounts.ts:94](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/L1/accounts.ts#L94)

___

### createAccount

▸ **createAccount**(`inpt`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

Create a user - multistage operation creating new user account, 
defailt collection, schema and template for the account

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCCreateUser`](../modules.md#nccreateuser) |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

NCReturnTxs

#### Defined in

[L1/accounts.ts:61](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/L1/accounts.ts#L61)

___

### createKeyPair

▸ **createKeyPair**(): `Promise`<[`NCKeyPair`](../modules.md#nckeypair)\>

Create a key pair assuming a secure environment (not frontend)

**`Params`**

none

#### Returns

`Promise`<[`NCKeyPair`](../modules.md#nckeypair)\>

An EOS key pair

#### Defined in

[L1/accounts.ts:47](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/L1/accounts.ts#L47)

___

### createPermission

▸ **createPermission**(`inpt`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

Create a new permission subordinate to the Active permission. 
(future optional: allow under owner, TBD)

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCCreatePermission`](../modules.md#nccreatepermission) |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

Create permission transaction id

#### Defined in

[L1/accounts.ts:111](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/L1/accounts.ts#L111)

___

### linkPermission

▸ **linkPermission**(`inpt`): `Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

Link a permission to a specific action of a specific contract.

#### Parameters

| Name | Type |
| :------ | :------ |
| `inpt` | [`NCLinkPerm`](../modules.md#nclinkperm) |

#### Returns

`Promise`<[`NCReturnTxs`](../modules.md#ncreturntxs)\>

Link permission transaction id

#### Defined in

[L1/accounts.ts:128](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/L1/accounts.ts#L128)
