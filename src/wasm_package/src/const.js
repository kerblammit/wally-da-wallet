// AUTOGENERATED by update_wasm_package.sh
export const AES_BLOCK_LEN = 16; /** Length of AES encrypted blocks */
export const AES_FLAG_DECRYPT = 2; /** Decrypt */
export const AES_FLAG_ENCRYPT = 1; /** Encrypt */
export const AES_KEY_LEN_128 = 16; /** AES-128 Key length, 128 bits */
export const AES_KEY_LEN_192 = 24; /** AES-192 Key length, 192 bits */
export const AES_KEY_LEN_256 = 32; /** AES-256 Key length, 256 bits */
export const ASSET_COMMITMENT_LEN = 33; /** Length of an Asset Value Commitment */
export const ASSET_EXPLICIT_RANGEPROOF_MAX_LEN = 73; /** Maximum length of an Explicit Asset Value Range Proof */
export const ASSET_EXPLICIT_SURJECTIONPROOF_LEN = 67; /** Length of an Explicit Asset Surjection Proof */
export const ASSET_GENERATOR_LEN = 33; /** Length of an Asset Generator */
export const ASSET_RANGEPROOF_MAX_LEN = 5134; /** Maximum length of an Asset Value Range Proof */
export const ASSET_SURJECTIONPROOF_MAX_LEN = 162; /** Maximum length of a wally-produced Asset Surjection Proof */
export const ASSET_TAG_LEN = 32; /** Length of an Asset Tag */
export const BASE58_CHECKSUM_LEN = 4;
export const BASE58_FLAG_CHECKSUM = 0x1;
export const BIP32_ENTROPY_LEN_128 = 16; /** 128 bits */
export const BIP32_ENTROPY_LEN_256 = 32; /** 256 bits */
export const BIP32_ENTROPY_LEN_512 = 64; /** 512 bits */
export const BIP32_FLAG_ALLOW_UPPER = 0x20;
export const BIP32_FLAG_KEY_PRIVATE = 0x0;
export const BIP32_FLAG_KEY_PUBLIC = 0x1;
export const BIP32_FLAG_KEY_TWEAK_SUM = 0x4;
export const BIP32_FLAG_SKIP_HASH = 0x2;
export const BIP32_FLAG_STR_BARE = 0x10;
export const BIP32_FLAG_STR_WILDCARD = 0x8;
export const BIP32_INITIAL_HARDENED_CHILD = 0x80000000;
export const BIP32_KEY_FINGERPRINT_LEN = 4;
export const BIP32_PATH_MAX_LEN = 255;
export const BIP32_SERIALIZED_LEN = 78;
export const BIP32_VER_MAIN_PRIVATE = 0x0488ADE4; /** Mainnet, private key */
export const BIP32_VER_MAIN_PUBLIC = 0x0488B21E; /** Mainnet, public key */
export const BIP32_VER_TEST_PRIVATE = 0x04358394; /** Testnet, private key */
export const BIP32_VER_TEST_PUBLIC = 0x043587CF; /** Testnet, public key */
export const BIP38_KEY_COMPRESSED = 256; /** Public key is compressed */
export const BIP38_KEY_EC_MULT = 512; /** EC-Multiplied key (FIXME: Not implemented) */
export const BIP38_KEY_MAINNET = 0 ; /** Address is for main network */
export const BIP38_KEY_NETWORK_MASK = 0xff ; /** Mask for the bottom 8 bitflags which hold the network */
export const BIP38_KEY_QUICK_CHECK = 1024; /** Check structure only (no password required) */
export const BIP38_KEY_RAW_MODE = 2048; /** Treat bytes in as raw data */
export const BIP38_KEY_SWAP_ORDER = 4096; /** Hash comes after encrypted key */
export const BIP38_KEY_TESTNET = 111; /** Address is for test network */
export const BIP38_SERIALIZED_LEN = 39; /** Length of a raw BIP38 key in bytes */
export const BIP39_ENTROPY_LEN_128 = 16;
export const BIP39_ENTROPY_LEN_160 = 20;
export const BIP39_ENTROPY_LEN_192 = 24;
export const BIP39_ENTROPY_LEN_224 = 28;
export const BIP39_ENTROPY_LEN_256 = 32;
export const BIP39_ENTROPY_LEN_288 = 36;
export const BIP39_ENTROPY_LEN_320 = 40;
export const BIP39_ENTROPY_MAX_LEN = 42;
export const BIP39_SEED_LEN_512 = 64;
export const BIP39_WORDLIST_LEN = 2048;
export const BITCOIN_MESSAGE_FLAG_HASH = 1;
export const BITCOIN_MESSAGE_MAX_LEN = (64 * 1024 - 64);
export const BLINDING_FACTOR_LEN = 32; /** Length of a Blinding Factor (or blinder) */
export const EC_FLAGS_ALL = (0x1 | 0x2 | 0x4 | 0x8);
export const EC_FLAG_ECDSA = 0x1;
export const EC_FLAG_ELEMENTS = 0x10;
export const EC_FLAG_GRIND_R = 0x4;
export const EC_FLAG_RECOVERABLE = 0x8;
export const EC_FLAG_SCHNORR = 0x2;
export const EC_MESSAGE_HASH_LEN = 32;
export const EC_PRIVATE_KEY_LEN = 32;
export const EC_PUBLIC_KEY_LEN = 33;
export const EC_PUBLIC_KEY_UNCOMPRESSED_LEN = 65;
export const EC_SCALAR_LEN = 32;
export const EC_SIGNATURE_DER_MAX_LEN = 72;
export const EC_SIGNATURE_DER_MAX_LOW_R_LEN = 71;
export const EC_SIGNATURE_LEN = 64;
export const EC_SIGNATURE_RECOVERABLE_LEN = 65;
export const EC_XONLY_PUBLIC_KEY_LEN = 32;
export const HASH160_LEN = 20;
export const HMAC_SHA256_LEN = 32;
export const HMAC_SHA512_LEN = 64;
export const LIBWALLY_CORE_PSBT_MEMBERS_H = 1;
export const PBKDF2_HMAC_SHA256_LEN = 32;
export const PBKDF2_HMAC_SHA512_LEN = 64;
export const RIPEMD160_LEN = 20;
export const SHA256_LEN = 32;
export const SHA512_LEN = 64;
export const WALLY_ADDRESS_PUBKEY_MAX_LEN = 25;
export const WALLY_ADDRESS_TYPE_P2PKH = 0x01      ; /** P2PKH address ("1...") */
export const WALLY_ADDRESS_TYPE_P2SH_P2WPKH = 0x02; /** P2SH-P2WPKH wrapped SegWit address ("3...") */
export const WALLY_ADDRESS_TYPE_P2WPKH = 0x04     ; /** P2WPKH native SegWit address ("bc1...)" */
export const WALLY_ADDRESS_VERSION_P2PKH_LIQUID = 0x39; /** P2PKH address on liquid v1 */
export const WALLY_ADDRESS_VERSION_P2PKH_LIQUID_REGTEST = 0xEB; /** P2PKH address on liquid v1 regtest */
export const WALLY_ADDRESS_VERSION_P2PKH_LIQUID_TESTNET = 0x24; /** P2PKH address on liquid v1 testnet */
export const WALLY_ADDRESS_VERSION_P2PKH_MAINNET = 0x00; /** P2PKH address on mainnet */
export const WALLY_ADDRESS_VERSION_P2PKH_TESTNET = 0x6F; /** P2PKH address on testnet */
export const WALLY_ADDRESS_VERSION_P2SH_LIQUID = 0x27; /** P2SH address on liquid v1 */
export const WALLY_ADDRESS_VERSION_P2SH_LIQUID_REGTEST = 0x4B; /** P2SH address on liquid v1 regtest */
export const WALLY_ADDRESS_VERSION_P2SH_LIQUID_TESTNET = 0x13; /** P2SH address on liquid v1 testnet */
export const WALLY_ADDRESS_VERSION_P2SH_MAINNET = 0x05; /** P2SH address on mainnet */
export const WALLY_ADDRESS_VERSION_P2SH_TESTNET = 0xC4; /** P2SH address on testnet */
export const WALLY_ADDRESS_VERSION_WIF_MAINNET = 0x80; /** Wallet Import Format on mainnet */
export const WALLY_ADDRESS_VERSION_WIF_TESTNET = 0xEF; /** Wallet Import Format on testnet */
export const WALLY_BIP32_CHAIN_CODE_LEN = 32;
export const WALLY_BIP32_TWEAK_SUM_LEN = 32;
export const WALLY_BTC_MAX = 21000000;
export const WALLY_CA_PREFIX_LIQUID = 0x0c; /** Liquid v1 confidential address prefix */
export const WALLY_CA_PREFIX_LIQUID_REGTEST = 0x04; /** Liquid v1 confidential address prefix for regtest */
export const WALLY_CA_PREFIX_LIQUID_TESTNET = 0x17; /** Liquid v1 confidential address prefix for testnet */
export const WALLY_EINVAL = -2; /** Invalid argument */
export const WALLY_ENOMEM = -3; /** malloc() failed */
export const WALLY_ERROR = -1; /** General error */
export const WALLY_HOST_COMMITMENT_LEN = 32;
export const WALLY_MAX_OP_RETURN_LEN = 80; /* Maximum length of OP_RETURN data push */
export const WALLY_MINISCRIPT_ONLY = 0x02; /** Only allow miniscript (not descriptor) expressions */
export const WALLY_MINISCRIPT_REQUIRE_CHECKSUM = 0x04; /** Require a checksum to be present */
export const WALLY_MINISCRIPT_TAPSCRIPT = 0x01; /** Tapscript, use x-only pubkeys */
export const WALLY_MS_CANONICAL_NO_CHECKSUM = 0x01; /** Do not include a checksum */
export const WALLY_MS_IS_DESCRIPTOR = 0x08; /** Contains only descriptor expressions (no miniscript) */
export const WALLY_MS_IS_MULTIPATH = 0x02; /** Allows multiple paths via ``<a;b;c>`` */
export const WALLY_MS_IS_PRIVATE = 0x04; /** Contains at least one private key */
export const WALLY_MS_IS_RANGED = 0x01; /** Allows key ranges via ``*`` */
export const WALLY_NETWORK_BITCOIN_MAINNET = 0x01; /** Bitcoin mainnet */
export const WALLY_NETWORK_BITCOIN_REGTEST = 0xff ; /** Bitcoin regtest: Behaves as testnet except for segwit */
export const WALLY_NETWORK_BITCOIN_TESTNET = 0x02; /** Bitcoin testnet */
export const WALLY_NETWORK_LIQUID = 0x03; /** Liquid v1 */
export const WALLY_NETWORK_LIQUID_REGTEST = 0x04; /** Liquid v1 regtest */
export const WALLY_NETWORK_LIQUID_TESTNET = 0x05; /** Liquid v1 testnet */
export const WALLY_NETWORK_NONE = 0x00; /** Used for miniscript parsing only */
export const WALLY_NO_CODESEPARATOR = 0xffffffff; /* No BIP342 code separator position */
export const WALLY_OK = 0; /** Success */
export const WALLY_PSBT_EXTRACT_NON_FINAL = 0x1; /* Extract without final scriptsig and witness */
export const WALLY_PSBT_FLAG_NON_FINAL = 0x1;
export const WALLY_PSBT_HIGHEST_VERSION = 0x2;
export const WALLY_PSBT_ID_AS_V2 = 0x1; /* Compute PSBT v0 IDs like v2 by setting inputs sequence to 0 */
export const WALLY_PSBT_ID_BIP370 = 0x0; /* BIP370 compatible */
export const WALLY_PSBT_ID_USE_LOCKTIME = 0x2; /* Do not set locktime to 0 before calculating id */
export const WALLY_PSBT_INIT_PSET = 0x1;
export const WALLY_PSBT_PARSE_FLAG_STRICT = 0x1; /* Parse strictly according to the PSBT/PSET spec */
export const WALLY_PSBT_PROPRIETARY_TYPE = 0xFC;
export const WALLY_PSBT_TXMOD_INPUTS = 0x1; /* Inputs can be modified */
export const WALLY_PSBT_TXMOD_OUTPUTS = 0x2; /* Outputs can be modified */
export const WALLY_PSBT_TXMOD_SINGLE = 0x4; /* SIGHASH_SINGLE signature is present */
export const WALLY_PSBT_VERSION_0 = 0x0;
export const WALLY_PSBT_VERSION_2 = 0x2;
export const WALLY_PSET_BLINDED_FULL = 0x4; /* Blinding key present with full blinding data */
export const WALLY_PSET_BLINDED_NONE = 0x0; /* Unblinded */
export const WALLY_PSET_BLINDED_PARTIAL = 0x2; /* Blinding key present with partial blinding data */
export const WALLY_PSET_BLINDED_REQUIRED = 0x1; /* Blinding key present with no other blinding data */
export const WALLY_PSET_BLIND_ALL = 0xffffffff; /* Blind all outputs in wally_psbt_blind */
export const WALLY_PSET_TXMOD_RESERVED = 0x1; /* Elements: Reserved: not used and ignored if set */
export const WALLY_S2C_DATA_LEN = 32;
export const WALLY_S2C_OPENING_LEN = 33;
export const WALLY_SATOSHI_PER_BTC = 100000000;
export const WALLY_SCALAR_OFFSET_LEN = 32; /* Length of a PSET scalar offset */
export const WALLY_SCRIPTPUBKEY_OP_RETURN_MAX_LEN = 83; /** OP_RETURN [80 bytes of data] */
export const WALLY_SCRIPTPUBKEY_P2PKH_LEN = 25; /** OP_DUP OP_HASH160 [HASH160] OP_EQUALVERIFY OP_CHECKSIG */
export const WALLY_SCRIPTPUBKEY_P2SH_LEN = 23; /** OP_HASH160 [HASH160] OP_EQUAL */
export const WALLY_SCRIPTPUBKEY_P2TR_LEN = 34; /** OP_1 [X-ONLY-PUBKEY] */
export const WALLY_SCRIPTPUBKEY_P2WPKH_LEN = 22; /** OP_0 [HASH160] */
export const WALLY_SCRIPTPUBKEY_P2WSH_LEN = 34; /** OP_0 [SHA256] */
export const WALLY_SCRIPTSIG_MAX_LEN = 520; /** MAX_SCRIPT_ELEMENT_SIZE from core */
export const WALLY_SCRIPTSIG_P2PKH_MAX_LEN = 140; /** [SIG+SIGHASH] [PUBKEY] */
export const WALLY_SCRIPT_AS_PUSH = 0x4; /** Return a push of the generated script */
export const WALLY_SCRIPT_HASH160 = 0x1; /** hash160 input bytes before using them */
export const WALLY_SCRIPT_MULTISIG_SORTED = 0x8; /** Sort public keys (BIP67) */
export const WALLY_SCRIPT_SHA256 = 0x2; /** sha256 input bytes before using them */
export const WALLY_SCRIPT_TYPE_MULTISIG = 0x20;
export const WALLY_SCRIPT_TYPE_OP_RETURN = 0x1;
export const WALLY_SCRIPT_TYPE_P2PKH = 0x2;
export const WALLY_SCRIPT_TYPE_P2SH = 0x4;
export const WALLY_SCRIPT_TYPE_P2TR = 0x40;
export const WALLY_SCRIPT_TYPE_P2WPKH = 0x8;
export const WALLY_SCRIPT_TYPE_P2WSH = 0x10;
export const WALLY_SCRIPT_TYPE_UNKNOWN = 0x0;
export const WALLY_SCRIPT_VARINT_MAX_SIZE = 9;
export const WALLY_SECP_RANDOMIZE_LEN = 32;
export const WALLY_SEGWIT_ADDRESS_PUBKEY_MAX_LEN = 42; /** OP_[0-16] OP_PUSH_N [up-to-40-bytes witprog] */
export const WALLY_SEGWIT_V0_ADDRESS_PUBKEY_MAX_LEN = 34; /** OP_0 OP_PUSH_{20,32} [20 bytes for wpkh, 32 for wsh] */
export const WALLY_SEGWIT_V1_ADDRESS_PUBKEY_LEN = 34; /** OP_1 OP_PUSH_32 [32-bytes x-only pubkey] */
export const WALLY_SIGHASH_ALL = 0x01;
export const WALLY_SIGHASH_ANYONECANPAY = 0x80;
export const WALLY_SIGHASH_ANYPREVOUT = 0x40; /* BIP118 only */
export const WALLY_SIGHASH_ANYPREVOUTANYSCRIPT = 0xc0; /* BIP118 only */
export const WALLY_SIGHASH_DEFAULT = 0x00;
export const WALLY_SIGHASH_FORKID = 0x40;
export const WALLY_SIGHASH_MASK = 0x1f; /* Mask for determining ALL/NONE/SINGLE */
export const WALLY_SIGHASH_NONE = 0x02;
export const WALLY_SIGHASH_RANGEPROOF = 0x40 ; /* Liquid/Elements only */
export const WALLY_SIGHASH_SINGLE = 0x03;
export const WALLY_SIGHASH_TR_IN_MASK = 0xc0; /* Taproot mask for determining input hash type */
export const WALLY_TXHASH_LEN = 32; /** Size of a transaction hash in bytes */
export const WALLY_TX_ASSET_CT_ASSET_LEN = 33; /* version byte + 32 bytes */
export const WALLY_TX_ASSET_CT_ASSET_PREFIX_A = 0x0a;
export const WALLY_TX_ASSET_CT_ASSET_PREFIX_B = 0x0b;
export const WALLY_TX_ASSET_CT_EMPTY_PREFIX = 0x00;
export const WALLY_TX_ASSET_CT_EXPLICIT_PREFIX = 0x01;
export const WALLY_TX_ASSET_CT_LEN = 33      ; /* version byte + 32 bytes */
export const WALLY_TX_ASSET_CT_NONCE_LEN = 33; /* version byte + 32 bytes */
export const WALLY_TX_ASSET_CT_NONCE_PREFIX_A = 0x02;
export const WALLY_TX_ASSET_CT_NONCE_PREFIX_B = 0x03;
export const WALLY_TX_ASSET_CT_VALUE_LEN = 33; /* version byte + 32 bytes */
export const WALLY_TX_ASSET_CT_VALUE_PREFIX_A = 0x08;
export const WALLY_TX_ASSET_CT_VALUE_PREFIX_B = 0x09;
export const WALLY_TX_ASSET_CT_VALUE_UNBLIND_LEN = 9; /* version byte + 8 bytes */
export const WALLY_TX_ASSET_TAG_LEN = 32;
export const WALLY_TX_DUMMY_NULL = 0x1; /* An empty witness item */
export const WALLY_TX_DUMMY_SIG = 0x2; /* A dummy signature */
export const WALLY_TX_DUMMY_SIG_LOW_R = 0x4; /* A dummy signature created with EC_FLAG_GRIND_R */
export const WALLY_TX_FLAG_ALLOW_PARTIAL = 0x4; /* Allow partially complete transactions */
export const WALLY_TX_FLAG_BLINDED_INITIAL_ISSUANCE = 0x1;
export const WALLY_TX_FLAG_PRE_BIP144 = 0x8; /* Encode/Decode using pre-BIP 144 serialisation */
export const WALLY_TX_FLAG_USE_ELEMENTS = 0x2; /* Encode/Decode as an elements transaction */
export const WALLY_TX_FLAG_USE_WITNESS = 0x1; /* Encode witness data if present */
export const WALLY_TX_INDEX_MASK = 0x3fffffff;
export const WALLY_TX_ISSUANCE_FLAG = (1 << 31);
export const WALLY_TX_IS_COINBASE = 8;
export const WALLY_TX_IS_ELEMENTS = 1;
export const WALLY_TX_IS_ISSUANCE = 2;
export const WALLY_TX_IS_PEGIN = 4;
export const WALLY_TX_PEGIN_FLAG = (1 << 30);
export const WALLY_TX_SEQUENCE_FINAL = 0xffffffff;
export const WALLY_TX_VERSION_1 = 1;
export const WALLY_TX_VERSION_2 = 2;
export const WALLY_WIF_FLAG_COMPRESSED = 0x0  ; /** Corresponding public key compressed */
export const WALLY_WIF_FLAG_UNCOMPRESSED = 0x1; /** Corresponding public key uncompressed */
export const WALLY_WITNESSSCRIPT_MAX_LEN = 42; /** (PUSH OF)0 [Up to 40 bytes of data] */
