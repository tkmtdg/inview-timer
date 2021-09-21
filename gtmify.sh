#!/usr/local/bin/bash
names=(
  "inview-timer.umd"
)
# declare -A globals_
# globals_=(
#   ["inview-timer.umd"]="InviewTimer"
# )
for name in "${names[@]}" ; do
  cat "./dist/"${name}".js" \
  | fold -w120 \
  | sed 's/\\/\\\\/g' \
  | sed "s/'/\\\'/g" \
  | sed "s/^/'/" \
  | sed "s/$/'+/" \
  | cat \
  | sed '1s/^/eval(/' \
  | sed '$s/.$/);/' \
  > "./dist/"${name}".gtm.js"
  # echo "if (global) { global.${globals_[${name}]} = ${globals_[${name}]}; }" >> "./dist/"${name}".gtm.js"
done
