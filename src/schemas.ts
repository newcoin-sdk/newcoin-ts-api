// https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md

export const ERC721_schema = [
    { name: 'name',        type: "string" },
    { name: 'description', type: "string" },
    { name: 'image',       type: 'string' },
  ];
  
export const default_nft_schema = [
    { name: 'name',         type: "string" },
    { name: 'description',  type: "string" },
    { name: 'image',        type: 'string' },
    { name: 'external_url', type: 'string' },
    { name: 'content_type', type: 'string' },
    { name: 'content',      type: 'string' },
    { name: 'license',      type: 'string' }
  ];
  
  export const file_schema = [
    { name: 'name',       type: 'string' }, 
    { name: 'path',       type: "string" }, 
    { name: 'image',      type: "string" },  // optional icon
    { name: 'content',    type: 'string' }
  ];

  // Social ID 
  export const soc_id_schema = [
    { name: "name",     type: 'string' },
    { name: 'service',  type: 'string' },
    { name: 'remoteId', type: 'string' },
    { name: 'handler',  type: 'string' },
    { name: 'score',    type: 'string' },
    { name: 'scopes',   type: 'string' },
    { name: 'src',      type: 'string' }
    // verifiedSocialIds?: string[];
  ];

  export const profile_schema = [
      // this is for proto accounts
      { name: "name", type: "string"}, // Must be in schema
      { name: "status", type: "string"},
      { name: "offer", type: "string"},

      { name: "displayName",type: "string"},
      { name: "fullName",   type: "string"},
      { name: "firstName",  type: "string"},
      { name: "lastName",   type: "string"},
      { name: "username",   type: "string"},
      { name: "email",      type: "string"},
      { name: "phone",      type: "string"},
      { name: "bio",        type: "string"},
      // avatar 
      { name: "content_type", type: "string"},
      { name: "external_url", type: "string"},
      { name: "image",        type: "string"},
      { name: "blurHash",     type: "string"},
      { name: "aspectRatio",  type: "string"},
      // SOCIALS
      { name: "instagram",  type: "string"},
      { name: "tiktok",     type: "string"},
      { name: "youtube",    type: "string"},
      { name: "twitter",    type: "string"},
      { name: "spotify",    type: "string"},
      { name: "pinterest",  type: "string"},
      { name: "snapchat",   type: "string"},
      { name: "reddit",     type: "string"},
      { name: "discord",    type: "string"},
      { name: "tumblr",     type: "string"},
      { name: "soundcloud", type: "string"},
      { name: "apple",      type: "string"},
      { name: "telegram",   type: "string"},
      { name: "signal",     type: "string"},
      { name: "medium",     type: "string"},
      { name: "facebook",   type: "string"},
      { name: "facebookId", type: "string"},
      { name: "youtubeId",  type: "string"}
  
     //{ name: "verifiedSocialIds", type: "string[]" }, // verified ids no meaning to store here
     //{ name: "powering", type: "number"},
     //{ name: "powered", type: "number"},
     //{ name: "stripeUid", type: "string"},
     //{ name: "subscriptionStatus", type: "string"},
     //{ name: "subscriptionRecord", type: "string"},
     //{ name: "subscriptionExpiry", type: "string"},
     //{ name: "consentEmail", type: "string"}, 
     //{ name: "consentTestgroup", type: "string"},
     //{ name: "consentPrivacyPolicy", type: "string"},
  ];

  // link can represent a like, deeplike, repost, also off chain resource like file
  export const link_schema = [
    { name: 'name',        type: 'string'},  // this field has to be in the schema -- some links can use it. 
    { name: 'link_type',   type: 'string'},  // is it a like, repost, NFT link, file link
    { name: 'subj_type',   type: 'string'}, // linked subject type (account, profile, collection, post)
    { name: 'subj_name',     type: 'string'},      // subject ID
    { name: 'context_type',type: 'string'}, 
    { name: 'context',     type: 'string'},  //
    { name: 'prop_type',   type: 'string'},  // property: weight, hashtag
    { name: 'prop_val',    type: 'string'},  // property value
    { name: 'weight',      type: 'string'},  // any desired ordering number
    { name: 'expiry',      type: 'string'},  // until when the link is valid
    { name: 'image',       type: "string"},  // optional icon
    { name: 'description', type: 'string'},
    { name: 'version',     type: 'string'}

  ];

  export const like_link_template = [
    {'key': 'name',        'value': ['string', ""],},
    {'key': 'link_type',   'value': ['string', "like"] },
//  {'key': 'subj_type',   'value': ['string', "account"]},
//  {'key': 'subj_name',     'value': ['string', ""]},
    {'key': 'context_type','value': ['string', '']},
    {'key': 'context',     'value': ['string', '']},
    {'key': 'prop_type',   'value': ['string', "weight"] },
//  {'key': 'prop_val',    'value': ['string', "100"] },
    {'key': 'weight',      'value': ['string', ""] },
    {'key': 'expiry',      'value': ['string', ""] },
    {'key': 'image',       'value': ["string", ""] },  // optional icon
    {'key': 'description', 'value': ['string', ""] },
    {'key': 'version',     'value': ['string', '1.0']}
  ];

  export const badge_link_template = [
    { 'key': 'name',     'value':['string', ""]},  // this field has to be in the schema - choose some name. 
    { 'key': 'link_type','value':['string', "badge"]},  // is it a like, repost, NFT link, file link
    { 'key': 'subj_type', 'value':['string', "account"]},  // linked object type (account, profile, collection, post)
  //{ 'key': 'subj_name',   'value':['string', ""]},  // object ID
    { 'key': 'prop_type','value':['string', "string"]},  // property: weight, hashtag
  //{ 'key': 'prop_val', 'value':['string', ""]},  // badge name
    { 'key': 'weight', 'value':['string', ""]},  // any desired ordering number
  //{ 'key': 'expiry',   'value':['string', ""]},  // until when the link is valid
    { 'key': 'image',    'value':['string', ""]},  // optional icon
    { 'key': 'description', 'value':['string', ""]},
    { 'key': 'version',  'value': ['string', ""]}

  ];

  export const file_link_template = [
    { 'key': 'name',     'value':['string', ""]},  // this field has to be in the schema - choose some name. 
    { 'key': 'link_type','value':['string', "badge"]},  // is it a like, repost, NFT link, file link
    { 'key': 'subj_type', 'value':['string', "account"]},  // linked object type (account, profile, collection, post)
  //{ 'key': 'subj_name',   'value':['string', ""]},  // object ID
    { 'key': 'prop_type','value':['string', "string"]},  // property: weight, hashtag
  //{ 'key': 'prop_val', 'value':['string', ""]},  // badge name
    { 'key': 'weignt', 'value':['string', ""]},  // any desired ordering number
  //{ 'key': 'expiry',   'value':['string', ""]},  // until when the link is valid
    { 'key': 'image',    'value':['string', ""]},  // optional icon
    { 'key': 'description', 'value':['string', ""]},
    { 'key': 'version',  'value': ['string', ""]}
  ];

 /* export const SBT_social_schema = [
    { name: 'name', type: "string" },
    { name: 'description', type: "string" },
    { name: 'image', type: 'string' },
    { name: 'type', type: 'string' },
    { name: 'issuer', type: 'string' },
    { name: 'recipient', type: 'string' },
    { name: 'quantifiers', type: 'string' },
    { name: 'signed_by', type: 'string' },
    { name: 'signature', type: 'string' },
    { name: 'content', type: 'string' },
    { name: 'version', type: 'string' }
  ];*/
  