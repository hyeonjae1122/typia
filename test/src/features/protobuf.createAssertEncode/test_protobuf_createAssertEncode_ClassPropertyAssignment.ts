import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_protobuf_createAssertEncode_ClassPropertyAssignment =
  _test_protobuf_assertEncode(TypeGuardError)(
    "ClassPropertyAssignment",
  )<ClassPropertyAssignment>(ClassPropertyAssignment)({
    encode: typia.protobuf.createAssertEncode<ClassPropertyAssignment>(),
    decode: typia.protobuf.createDecode<ClassPropertyAssignment>(),
    message: typia.protobuf.message<ClassPropertyAssignment>(),
  });
