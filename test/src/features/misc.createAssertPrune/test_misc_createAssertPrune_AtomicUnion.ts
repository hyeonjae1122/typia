import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_misc_createAssertPrune_AtomicUnion = _test_misc_assertPrune(
  TypeGuardError,
)("AtomicUnion")<AtomicUnion>(AtomicUnion)(
  typia.misc.createAssertPrune<AtomicUnion>(),
);
