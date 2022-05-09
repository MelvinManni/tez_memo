echo "Starting deployment"

echo "Initializing environment variables for deployment"

echo "**"
echo "**"
echo "**"
echo "********"
echo "********     ******"
echo "**           ******"
echo "**               **"
echo "**              ** "
echo "**             **  "
echo " **          **    "
echo "  ******     ******"
echo "  ******     ******"


CONTRACT_NAME=Tez-memo

echo ""
echo ""

echo "CONTRACT NAME:"
echo $CONTRACT_NAME

AMOUNT_TEZ=5

echo ""
echo ""

echo "AMOUNT TEZ:"
echo $AMOUNT_TEZ

FROM_USER=tz1c6sLApE1na8ZEEuDwAwHJF9iB8cMMPQ9A

echo ""
echo ""

echo "FROM USER:"
echo $FROM_USER

MICHELSON_FILE=./src/contract/michealson/tez_memo.tz

echo ""
echo ""

echo "MICHELSON FILE:"
echo $MICHELSON_FILE

GAZ_FEE=2.281

echo ""
echo ""

echo "GAZ FEE:"
echo $GAZ_FEE


tezos-client originate contract $CONTRACT_NAME transferring $AMOUNT_TEZ from $FROM_USER running $MICHELSON_FILE --init '(Pair (Pair {} 1) {})' --burn-cap $GAZ_FEE

exit 0