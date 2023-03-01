[@newfound8ion/newcoin-sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / NCO\_utils\_API

# Class: NCO\_utils\_API

[<internal>](../modules/internal_.md).NCO_utils_API

## Table of contents

### Constructors

- [constructor](internal_.NCO_utils_API.md#constructor)

### Methods

- [getFileCollectionFileSchemaName](internal_.NCO_utils_API.md#getfilecollectionfileschemaname)
- [getFileCollectionName](internal_.NCO_utils_API.md#getfilecollectionname)
- [getLinkSchemaBadgeTemplateID](internal_.NCO_utils_API.md#getlinkschemabadgetemplateid)
- [getLinkSchemaFollowTemplateID](internal_.NCO_utils_API.md#getlinkschemafollowtemplateid)
- [getLinkSchemaLikeTemplateID](internal_.NCO_utils_API.md#getlinkschemaliketemplateid)
- [getLinkSchemaNftMirrorTemplateID](internal_.NCO_utils_API.md#getlinkschemanftmirrortemplateid)
- [getLinkSchemaRepostTemplateID](internal_.NCO_utils_API.md#getlinkschemareposttemplateid)
- [getRootCollectionLinkSchemaName](internal_.NCO_utils_API.md#getrootcollectionlinkschemaname)
- [getRootCollectionName](internal_.NCO_utils_API.md#getrootcollectionname)
- [getRootCollectionNftSchemaName](internal_.NCO_utils_API.md#getrootcollectionnftschemaname)
- [getRootCollectionProfileSchemaName](internal_.NCO_utils_API.md#getrootcollectionprofileschemaname)
- [normalizeUsername](internal_.NCO_utils_API.md#normalizeusername)

## Constructors

### constructor

• **new NCO_utils_API**(`n`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | [`NCInit`](../modules/internal_.md#ncinit) |

#### Defined in

[utils.ts:11](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/utils.ts#L11)

## Methods

### getFileCollectionFileSchemaName

▸ **getFileCollectionFileSchemaName**(`username`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `username` | `string` |

#### Returns

`string`

#### Defined in

[utils.ts:43](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/utils.ts#L43)

___

### getFileCollectionName

▸ **getFileCollectionName**(`username`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `username` | `string` |

#### Returns

`string`

#### Defined in

[utils.ts:25](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/utils.ts#L25)

___

### getLinkSchemaBadgeTemplateID

▸ **getLinkSchemaBadgeTemplateID**(`username`, `_col?`, `_sch?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `username` | `string` |
| `_col?` | `string` |
| `_sch?` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[utils.ts:57](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/utils.ts#L57)

___

### getLinkSchemaFollowTemplateID

▸ **getLinkSchemaFollowTemplateID**(`username`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `username` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[utils.ts:63](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/utils.ts#L63)

___

### getLinkSchemaLikeTemplateID

▸ **getLinkSchemaLikeTemplateID**(`username`, `_col?`, `_sch?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `username` | `string` |
| `_col?` | `string` |
| `_sch?` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[utils.ts:51](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/utils.ts#L51)

___

### getLinkSchemaNftMirrorTemplateID

▸ **getLinkSchemaNftMirrorTemplateID**(`username`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `username` | `string` |

#### Returns

`string`

#### Defined in

[utils.ts:73](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/utils.ts#L73)

___

### getLinkSchemaRepostTemplateID

▸ **getLinkSchemaRepostTemplateID**(`username`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `username` | `string` |

#### Returns

`string`

#### Defined in

[utils.ts:69](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/utils.ts#L69)

___

### getRootCollectionLinkSchemaName

▸ **getRootCollectionLinkSchemaName**(`username`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `username` | `string` |

#### Returns

`string`

#### Defined in

[utils.ts:39](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/utils.ts#L39)

___

### getRootCollectionName

▸ **getRootCollectionName**(`username`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `username` | `string` |

#### Returns

`string`

#### Defined in

[utils.ts:21](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/utils.ts#L21)

___

### getRootCollectionNftSchemaName

▸ **getRootCollectionNftSchemaName**(`username`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `username` | `string` |

#### Returns

`string`

#### Defined in

[utils.ts:30](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/utils.ts#L30)

___

### getRootCollectionProfileSchemaName

▸ **getRootCollectionProfileSchemaName**(`username`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `username` | `string` |

#### Returns

`string`

#### Defined in

[utils.ts:34](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/utils.ts#L34)

___

### normalizeUsername

▸ **normalizeUsername**(`username`, `r`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `username` | `string` |
| `r` | `string` |

#### Returns

`string`

#### Defined in

[utils.ts:16](https://github.com/newfound8ion/newcoin-sdk/blob/2d95cfa/src/utils.ts#L16)
