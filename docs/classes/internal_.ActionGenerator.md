[@newfound8ion/newcoin-sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / ActionGenerator

# Class: ActionGenerator

[<internal>](../modules/internal_.md).ActionGenerator

## Table of contents

### Constructors

- [constructor](internal_.ActionGenerator.md#constructor)

### Properties

- [contract](internal_.ActionGenerator.md#contract)
- [token\_contract](internal_.ActionGenerator.md#token_contract)

### Methods

- [buyrambytes](internal_.ActionGenerator.md#buyrambytes)
- [createCollection](internal_.ActionGenerator.md#createcollection)
- [createPermission](internal_.ActionGenerator.md#createpermission)
- [createPool](internal_.ActionGenerator.md#createpool)
- [createSchema](internal_.ActionGenerator.md#createschema)
- [createTemplate](internal_.ActionGenerator.md#createtemplate)
- [delegateBw](internal_.ActionGenerator.md#delegatebw)
- [mintAsset](internal_.ActionGenerator.md#mintasset)
- [modifyAsset](internal_.ActionGenerator.md#modifyasset)
- [newaccount](internal_.ActionGenerator.md#newaccount)
- [txBalance](internal_.ActionGenerator.md#txbalance)
- [txNcoBalance](internal_.ActionGenerator.md#txncobalance)

## Constructors

### constructor

• **new ActionGenerator**(`contract`, `token_contract`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `contract` | `string` |
| `token_contract` | `string` |

#### Defined in

[L1/actions.ts:13](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/L1/actions.ts#L13)

## Properties

### contract

• `Readonly` **contract**: `string`

#### Defined in

[L1/actions.ts:13](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/L1/actions.ts#L13)

___

### token\_contract

• `Readonly` **token\_contract**: `string`

#### Defined in

[L1/actions.ts:13](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/L1/actions.ts#L13)

## Methods

### buyrambytes

▸ **buyrambytes**(`receiver`, `payer?`, `amt?`): `Object`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `receiver` | `string` | `undefined` |
| `payer` | `string` | `'io'` |
| `amt` | `number` | `8192` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `account` | `string` |
| `authorization` | { `actor`: `string` = payer; `permission`: `string` = 'active' }[] |
| `data` | { `bytes`: `number` = amt; `payer`: `string` = payer; `receiver`: `string` = receiver } |
| `data.bytes` | `number` |
| `data.payer` | `string` |
| `data.receiver` | `string` |
| `name` | `string` |

#### Defined in

[L1/actions.ts:52](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/L1/actions.ts#L52)

___

### createCollection

▸ **createCollection**(`author`, `collection_name`, `authorized_accounts`, `notify_accounts?`, `market_fee`, `allow_notify`): `any`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `author` | `string` | `undefined` |
| `collection_name` | `string` | `undefined` |
| `authorized_accounts` | `string`[] | `undefined` |
| `notify_accounts` | `string`[] | `[]` |
| `market_fee` | `number` | `undefined` |
| `allow_notify` | `boolean` | `undefined` |

#### Returns

`any`

#### Defined in

[L1/actions.ts:117](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/L1/actions.ts#L117)

___

### createPermission

▸ **createPermission**(`author`, `perm_name`, `perm_key`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `author` | `string` |
| `perm_name` | `string` |
| `perm_key` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `account` | `string` |
| `authorization` | { `actor`: `string` = author; `permission`: `string` = 'active' }[] |
| `data` | { `account`: `string` = author; `auth`: { `accounts`: { `permission`: { `actor`: `string` = author; `permission`: `string` = 'active' } ; `weight`: `number` = 1 }[] ; `keys`: { `key`: `string` = perm\_key; `weight`: `number` = 1 }[] ; `threshold`: `number` = 1; `waits`: `never`[] = [] } = authorization\_object; `parent`: `string` = 'active'; `permission`: `string` = perm\_name } |
| `data.account` | `string` |
| `data.auth` | { `accounts`: { `permission`: { `actor`: `string` = author; `permission`: `string` = 'active' } ; `weight`: `number` = 1 }[] ; `keys`: { `key`: `string` = perm\_key; `weight`: `number` = 1 }[] ; `threshold`: `number` = 1; `waits`: `never`[] = [] } |
| `data.auth.accounts` | { `permission`: { `actor`: `string` = author; `permission`: `string` = 'active' } ; `weight`: `number` = 1 }[] |
| `data.auth.keys` | { `key`: `string` = perm\_key; `weight`: `number` = 1 }[] |
| `data.auth.threshold` | `number` |
| `data.auth.waits` | `never`[] |
| `data.parent` | `string` |
| `data.permission` | `string` |
| `name` | `string` |

#### Defined in

[L1/actions.ts:210](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/L1/actions.ts#L210)

___

### createPool

▸ **createPool**(`creator`, `ticker`, `is_inflatable`, `is_deflatable`, `is_treasury`, `descr`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `creator` | `string` |
| `ticker` | `string` |
| `is_inflatable` | `boolean` |
| `is_deflatable` | `boolean` |
| `is_treasury` | `boolean` |
| `descr` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `account` | `string` |
| `authorization` | { `actor`: `string` = creator; `permission`: `string` = 'active' }[] |
| `data` | { `description`: `string` = descr; `is_deflatable`: `boolean` = is\_deflatable; `is_inflatable`: `boolean` = is\_inflatable; `is_treasury`: `boolean` = is\_treasury; `owner`: `string` = creator; `ticker`: `string` = ticker } |
| `data.description` | `string` |
| `data.is_deflatable` | `boolean` |
| `data.is_inflatable` | `boolean` |
| `data.is_treasury` | `boolean` |
| `data.owner` | `string` |
| `data.ticker` | `string` |
| `name` | `string` |

#### Defined in

[L1/actions.ts:295](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/L1/actions.ts#L295)

___

### createSchema

▸ **createSchema**(`author`, `collection_name`, `schema_name`, `sch`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `author` | `string` |
| `collection_name` | `string` |
| `schema_name` | `string` |
| `sch` | [`NCNameType`](../modules.md#ncnametype)[] |

#### Returns

`any`

#### Defined in

[L1/actions.ts:161](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/L1/actions.ts#L161)

___

### createTemplate

▸ **createTemplate**(`author`, `collection_name`, `schema_name`, `xferable`, `burnable`, `template_fields`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `author` | `string` |
| `collection_name` | `string` |
| `schema_name` | `string` |
| `xferable` | `boolean` |
| `burnable` | `boolean` |
| `template_fields` | `any`[] |

#### Returns

`any`

#### Defined in

[L1/actions.ts:183](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/L1/actions.ts#L183)

___

### delegateBw

▸ **delegateBw**(`receiver`, `payer?`, `net_amount?`, `cpu_amount?`, `trfer?`): `Object`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `receiver` | `string` | `undefined` |
| `payer` | `string` | `'io'` |
| `net_amount` | `string` | `'100.0000 NCO'` |
| `cpu_amount` | `string` | `'100.0000 NCO'` |
| `trfer` | `boolean` | `true` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `account` | `string` |
| `authorization` | { `actor`: `string` = payer; `permission`: `string` = 'active' }[] |
| `data` | { `from`: `string` = payer; `receiver`: `string` = receiver; `stake_cpu_quantity`: `string` = cpu\_amount; `stake_net_quantity`: `string` = net\_amount; `transfer`: `boolean` = trfer } |
| `data.from` | `string` |
| `data.receiver` | `string` |
| `data.stake_cpu_quantity` | `string` |
| `data.stake_net_quantity` | `string` |
| `data.transfer` | `boolean` |
| `name` | `string` |

#### Defined in

[L1/actions.ts:67](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/L1/actions.ts#L67)

___

### mintAsset

▸ **mintAsset**(`owner`, `col_name`, `sch_name`, `tmpl_id`, `immutable_data`, `mutable_data`, `author?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `owner` | `string` |
| `col_name` | `string` |
| `sch_name` | `string` |
| `tmpl_id` | `number` |
| `immutable_data` | `any`[] |
| `mutable_data` | `any`[] |
| `author?` | `string` |

#### Returns

`any`

#### Defined in

[L1/actions.ts:243](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/L1/actions.ts#L243)

___

### modifyAsset

▸ **modifyAsset**(`editor`, `owner`, `asset_id`, `new_mutable_data`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `editor` | `string` |
| `owner` | `string` |
| `asset_id` | `string` |
| `new_mutable_data` | `any`[] |

#### Returns

`any`

#### Defined in

[L1/actions.ts:273](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/L1/actions.ts#L273)

___

### newaccount

▸ **newaccount**(`new_name`, `payer`, `newacc_public_active_key`, `newacc_public_owner_key`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `new_name` | `string` |
| `payer` | `string` |
| `newacc_public_active_key` | `string` |
| `newacc_public_owner_key` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `account` | `string` |
| `authorization` | { `actor`: `string` = payer; `permission`: `string` = 'active' }[] |
| `data` | { `active`: { `accounts`: `never`[] = []; `keys`: { `key`: `string` = newacc\_public\_active\_key; `weight`: `number` = 1 }[] ; `threshold`: `number` = 1; `waits`: `never`[] = [] } ; `creator`: `string` = payer; `name`: `string` = new\_name; `owner`: { `accounts`: `never`[] = []; `keys`: { `key`: `string` = newacc\_public\_owner\_key; `weight`: `number` = 1 }[] ; `threshold`: `number` = 1; `waits`: `never`[] = [] }  } |
| `data.active` | { `accounts`: `never`[] = []; `keys`: { `key`: `string` = newacc\_public\_active\_key; `weight`: `number` = 1 }[] ; `threshold`: `number` = 1; `waits`: `never`[] = [] } |
| `data.active.accounts` | `never`[] |
| `data.active.keys` | { `key`: `string` = newacc\_public\_active\_key; `weight`: `number` = 1 }[] |
| `data.active.threshold` | `number` |
| `data.active.waits` | `never`[] |
| `data.creator` | `string` |
| `data.name` | `string` |
| `data.owner` | { `accounts`: `never`[] = []; `keys`: { `key`: `string` = newacc\_public\_owner\_key; `weight`: `number` = 1 }[] ; `threshold`: `number` = 1; `waits`: `never`[] = [] } |
| `data.owner.accounts` | `never`[] |
| `data.owner.keys` | { `key`: `string` = newacc\_public\_owner\_key; `weight`: `number` = 1 }[] |
| `data.owner.threshold` | `number` |
| `data.owner.waits` | `never`[] |
| `name` | `string` |

#### Defined in

[L1/actions.ts:15](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/L1/actions.ts#L15)

___

### txBalance

▸ **txBalance**(`contract`, `from`, `to`, `amt`, `memo`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `contract` | `string` |
| `from` | `string` |
| `to` | `string` |
| `amt` | `string` |
| `memo` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `account` | `string` |
| `authorization` | { `actor`: `string` = from; `permission`: `string` = 'active' }[] |
| `data` | { `from`: `string` = from; `memo`: `string` = memo; `quantity`: `string` = amt; `to`: `string` = to } |
| `data.from` | `string` |
| `data.memo` | `string` |
| `data.quantity` | `string` |
| `data.to` | `string` |
| `name` | `string` |

#### Defined in

[L1/actions.ts:344](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/L1/actions.ts#L344)

___

### txNcoBalance

▸ **txNcoBalance**(`from`, `to`, `amt`, `memo`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `string` |
| `to` | `string` |
| `amt` | `string` |
| `memo` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `account` | `string` |
| `authorization` | { `actor`: `string` = from; `permission`: `string` = 'active' }[] |
| `data` | { `from`: `string` = from; `memo`: `string` = memo; `quantity`: `string` = amt; `to`: `string` = to } |
| `data.from` | `string` |
| `data.memo` | `string` |
| `data.quantity` | `string` |
| `data.to` | `string` |
| `name` | `string` |

#### Defined in

[L1/actions.ts:323](https://github.com/newfound8ion/newcoin-sdk/blob/86b014f/src/L1/actions.ts#L323)
