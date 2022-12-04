#! /usr/bin/env bash

# Extract WALLY_ constants into const.js
(echo '// AUTOGENERATED by update_wasm_package.sh' \
  && egrep -r '#define [^ (]* ' include/*.h \
     | grep -v '#define OP_' \
     | sed -r 's~.*#define ([^ ]*) *~export const \1 = ~; s~( /\*)| *$~;\1~' \
     | sort \
) > src/wasm_package/src/const.js


# Update version number to match libwally's
current_version=$(grep -oP 'AC_INIT\(\[libwallycore\],\[\K[^\]]+' configure.ac)
(cd src/wasm_package && npm version --no-git-tag-version --allow-same-version "$current_version")


# Calling build_wrappers.py is also necessary to update the wasm functions.js file.
# This is handled by update_generated.sh and by the wasm package build script.
