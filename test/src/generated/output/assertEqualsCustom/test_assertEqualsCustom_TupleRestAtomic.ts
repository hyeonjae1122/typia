import typia from "typia";

import { CustomGuardError } from "../../../internal/CustomGuardError";
import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { TupleRestAtomic } from "../../../structures/TupleRestAtomic";

export const test_assertEqualsCustom_TupleRestAtomic = _test_assertEquals(
  CustomGuardError,
)("TupleRestAtomic")<TupleRestAtomic>(TupleRestAtomic)((input) =>
  ((
    input: any,
    errorFactory?: import("typia").TypeGuardError.IProps,
  ): TupleRestAtomic => {
    const $guard = (typia.assertEquals as any).guard(errorFactory);
    const __is = (
      input: any,
      _exceptionable: boolean = true,
    ): input is TupleRestAtomic => {
      return (
        Array.isArray(input) &&
        "boolean" === typeof input[0] &&
        "number" === typeof input[1] &&
        Number.isFinite(input[1]) &&
        Array.isArray(input.slice(2)) &&
        input
          .slice(2)
          .every((elem: any, _index1: number) => "string" === typeof elem)
      );
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is TupleRestAtomic => {
        return (
          ((Array.isArray(input) ||
            $guard(true, {
              path: _path + "",
              expected: "TupleRestAtomic",
              value: input,
            })) &&
            ("boolean" === typeof input[0] ||
              $guard(true, {
                path: _path + "[0]",
                expected: "boolean",
                value: input[0],
              })) &&
            (("number" === typeof input[1] && Number.isFinite(input[1])) ||
              $guard(true, {
                path: _path + "[1]",
                expected: "number",
                value: input[1],
              })) &&
            (((Array.isArray(input.slice(2)) ||
              $guard(true, {
                path: _path + "",
                expected: "...string",
                value: input.slice(2),
              })) &&
              input.slice(2).every(
                (elem: any, _index1: number) =>
                  "string" === typeof elem ||
                  $guard(true, {
                    path: _path + "[" + (2 + _index1) + "]",
                    expected: "string",
                    value: elem,
                  }),
              )) ||
              $guard(true, {
                path: _path + "",
                expected: "...string",
                value: input.slice(2),
              }))) ||
          $guard(true, {
            path: _path + "",
            expected: "TupleRestAtomic",
            value: input,
          })
        );
      })(input, "$input", true);
    return input;
  })(input, (p) => new CustomGuardError(p)),
);
