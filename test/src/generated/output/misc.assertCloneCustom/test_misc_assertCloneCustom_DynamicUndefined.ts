import typia from "typia";

import { CustomGuardError } from "../../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../../internal/_test_misc_assertClone";
import { DynamicUndefined } from "../../../structures/DynamicUndefined";

export const test_misc_assertCloneCustom_DynamicUndefined =
  _test_misc_assertClone(CustomGuardError)(
    "DynamicUndefined",
  )<DynamicUndefined>(DynamicUndefined)((input) =>
    ((
      input: any,
      errorFactory?: import("typia").TypeGuardError.IProps,
    ): typia.Resolved<DynamicUndefined> => {
      const assert = (
        input: any,
        errorFactory?: import("typia").TypeGuardError.IProps,
      ): DynamicUndefined => {
        const $guard = (typia.misc.assertClone as any).guard(errorFactory);
        const __is = (input: any): input is DynamicUndefined => {
          const $io0 = (input: any): boolean =>
            Object.keys(input).every((key: any) => {
              const value = input[key];
              if (undefined === value) return true;
              return null !== value && undefined === value;
            });
          return (
            "object" === typeof input &&
            null !== input &&
            false === Array.isArray(input) &&
            $io0(input)
          );
        };
        if (false === __is(input))
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is DynamicUndefined => {
            const $join = (typia.misc.assertClone as any).join;
            const $ao0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              false === _exceptionable ||
              Object.keys(input).every((key: any) => {
                const value = input[key];
                if (undefined === value) return true;
                return (
                  (null !== value ||
                    $guard(_exceptionable, {
                      path: _path + $join(key),
                      expected: "undefined",
                      value: value,
                    })) &&
                  (undefined === value ||
                    $guard(_exceptionable, {
                      path: _path + $join(key),
                      expected: "undefined",
                      value: value,
                    }))
                );
              });
            return (
              ((("object" === typeof input &&
                null !== input &&
                false === Array.isArray(input)) ||
                $guard(true, {
                  path: _path + "",
                  expected: "DynamicUndefined",
                  value: input,
                })) &&
                $ao0(input, _path + "", true)) ||
              $guard(true, {
                path: _path + "",
                expected: "DynamicUndefined",
                value: input,
              })
            );
          })(input, "$input", true);
        return input;
      };
      const clone = (
        input: DynamicUndefined,
      ): typia.Resolved<DynamicUndefined> => {
        const $co0 = (input: any): any => {
          const output = {} as any;
          for (const [key, value] of Object.entries(input)) {
            if (RegExp(/(.*)/).test(key)) {
              output[key] = value as any;
              continue;
            }
          }
          return output;
        };
        return "object" === typeof input && null !== input
          ? $co0(input)
          : (input as any);
      };
      assert(input, errorFactory);
      const output = clone(input);
      return output;
    })(input, (p) => new CustomGuardError(p)),
  );
