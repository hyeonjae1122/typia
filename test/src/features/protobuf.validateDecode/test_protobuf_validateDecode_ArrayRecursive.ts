import typia from "typia";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_protobuf_validateDecode_ArrayRecursive =
  _test_protobuf_validateDecode("ArrayRecursive")<ArrayRecursive>(
    ArrayRecursive,
  )({
    decode: (input) => typia.protobuf.validateDecode<ArrayRecursive>(input),
    encode: typia.protobuf.createEncode<ArrayRecursive>(),
  });
