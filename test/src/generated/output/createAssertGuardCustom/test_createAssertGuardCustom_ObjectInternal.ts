import typia from "typia";

import { CustomGuardError } from "../../../internal/CustomGuardError";
import { _test_assertGuard } from "../../../internal/_test_assertGuard";
import { ObjectInternal } from "../../../structures/ObjectInternal";

export const test_createAssertGuardCustom_ObjectInternal = _test_assertGuard(
  CustomGuardError,
)("ObjectInternal")<ObjectInternal>(ObjectInternal)(
  (
    input: any,
    errorFactory: import("typia").TypeGuardError.IProps = (p) =>
      new CustomGuardError(p),
  ): asserts input is ObjectInternal => {
    const $guard = (typia.createAssertGuard as any).guard(errorFactory);
    const __is = (input: any): input is ObjectInternal => {
      return (
        "object" === typeof input &&
        null !== input &&
        "string" === typeof (input as any).id &&
        "string" === typeof (input as any).name
      );
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is ObjectInternal => {
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ("string" === typeof input.id ||
            $guard(_exceptionable, {
              path: _path + ".id",
              expected: "string",
              value: input.id,
            })) &&
          ("string" === typeof input.name ||
            $guard(_exceptionable, {
              path: _path + ".name",
              expected: "string",
              value: input.name,
            }));
        return (
          ((("object" === typeof input && null !== input) ||
            $guard(true, {
              path: _path + "",
              expected: "ObjectInternal",
              value: input,
            })) &&
            $ao0(input, _path + "", true)) ||
          $guard(true, {
            path: _path + "",
            expected: "ObjectInternal",
            value: input,
          })
        );
      })(input, "$input", true);
  },
);
