import typia from "typia";

import { CustomGuardError } from "../../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../../internal/_test_json_assertParse";
import { AtomicIntersection } from "../../../structures/AtomicIntersection";

export const test_json_assertParseCustom_AtomicIntersection =
  _test_json_assertParse(CustomGuardError)(
    "AtomicIntersection",
  )<AtomicIntersection>(AtomicIntersection)((input) =>
    ((
      input: string,
      errorFactory?: import("typia").TypeGuardError.IProps,
    ): typia.Primitive<AtomicIntersection> => {
      const assert = (
        input: any,
        errorFactory?: import("typia").TypeGuardError.IProps,
      ): AtomicIntersection => {
        const $guard = (typia.json.assertParse as any).guard(errorFactory);
        const __is = (input: any): input is AtomicIntersection => {
          return (
            Array.isArray(input) &&
            input.length === 3 &&
            "boolean" === typeof input[0] &&
            "number" === typeof input[1] &&
            Number.isFinite(input[1]) &&
            "string" === typeof input[2]
          );
        };
        if (false === __is(input))
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is AtomicIntersection => {
            return (
              ((Array.isArray(input) ||
                $guard(true, {
                  path: _path + "",
                  expected: "AtomicIntersection",
                  value: input,
                })) &&
                (input.length === 3 ||
                  $guard(true, {
                    path: _path + "",
                    expected: "[boolean, number, string]",
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
                ("string" === typeof input[2] ||
                  $guard(true, {
                    path: _path + "[2]",
                    expected: "string",
                    value: input[2],
                  }))) ||
              $guard(true, {
                path: _path + "",
                expected: "AtomicIntersection",
                value: input,
              })
            );
          })(input, "$input", true);
        return input;
      };
      input = JSON.parse(input);
      return assert(input, errorFactory) as any;
    })(input, (p) => new CustomGuardError(p)),
  );
