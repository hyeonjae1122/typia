import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_misc_createAssertPrune_ArrayMatrix = _test_misc_assertPrune(
  TypeGuardError,
)("ArrayMatrix")<ArrayMatrix>(ArrayMatrix)(
  typia.misc.createAssertPrune<ArrayMatrix>(),
);
