import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_json_createAssertParse_ObjectSimple = _test_json_assertParse(
  TypeGuardError,
)("ObjectSimple")<ObjectSimple>(ObjectSimple)(
  typia.json.createAssertParse<ObjectSimple>(),
);
