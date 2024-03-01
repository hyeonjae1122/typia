import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../../internal/_test_assertGuard";
import { ObjectHttpAtomic } from "../../../structures/ObjectHttpAtomic";

export const test_createAssertGuard_ObjectHttpAtomic = _test_assertGuard(
  TypeGuardError,
)("ObjectHttpAtomic")<ObjectHttpAtomic>(ObjectHttpAtomic)(
  (
    input: any,
    errorFactory?: import("typia").TypeGuardError.IProps,
  ): asserts input is ObjectHttpAtomic => {
    const $guard = (typia.createAssertGuard as any).guard(errorFactory);
    const __is = (input: any): input is ObjectHttpAtomic => {
      return (
        "object" === typeof input &&
        null !== input &&
        "boolean" === typeof (input as any).boolean &&
        "bigint" === typeof (input as any).bigint &&
        "number" === typeof (input as any).number &&
        Number.isFinite((input as any).number) &&
        "string" === typeof (input as any).string
      );
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is ObjectHttpAtomic => {
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ("boolean" === typeof input.boolean ||
            $guard(_exceptionable, {
              path: _path + ".boolean",
              expected: "boolean",
              value: input.boolean,
            })) &&
          ("bigint" === typeof input.bigint ||
            $guard(_exceptionable, {
              path: _path + ".bigint",
              expected: "bigint",
              value: input.bigint,
            })) &&
          (("number" === typeof input.number &&
            Number.isFinite(input.number)) ||
            $guard(_exceptionable, {
              path: _path + ".number",
              expected: "number",
              value: input.number,
            })) &&
          ("string" === typeof input.string ||
            $guard(_exceptionable, {
              path: _path + ".string",
              expected: "string",
              value: input.string,
            }));
        return (
          ((("object" === typeof input && null !== input) ||
            $guard(true, {
              path: _path + "",
              expected: "ObjectHttpAtomic",
              value: input,
            })) &&
            $ao0(input, _path + "", true)) ||
          $guard(true, {
            path: _path + "",
            expected: "ObjectHttpAtomic",
            value: input,
          })
        );
      })(input, "$input", true);
  },
);
