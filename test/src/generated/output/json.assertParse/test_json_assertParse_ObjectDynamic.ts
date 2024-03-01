import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../../internal/_test_json_assertParse";
import { ObjectDynamic } from "../../../structures/ObjectDynamic";

export const test_json_assertParse_ObjectDynamic = _test_json_assertParse(
  TypeGuardError,
)("ObjectDynamic")<ObjectDynamic>(ObjectDynamic)((input) =>
  ((
    input: string,
    errorFactory?: import("typia").TypeGuardError.IProps,
  ): typia.Primitive<ObjectDynamic> => {
    const assert = (
      input: any,
      errorFactory?: import("typia").TypeGuardError.IProps,
    ): ObjectDynamic => {
      const $guard = (typia.json.assertParse as any).guard(errorFactory);
      const __is = (input: any): input is ObjectDynamic => {
        const $io0 = (input: any): boolean =>
          Object.keys(input).every((key: any) => {
            const value = input[key];
            if (undefined === value) return true;
            return (
              "string" === typeof value ||
              ("number" === typeof value && Number.isFinite(value)) ||
              "boolean" === typeof value
            );
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
        ): input is ObjectDynamic => {
          const $join = (typia.json.assertParse as any).join;
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
                "string" === typeof value ||
                ("number" === typeof value && Number.isFinite(value)) ||
                "boolean" === typeof value ||
                $guard(_exceptionable, {
                  path: _path + $join(key),
                  expected: "(boolean | number | string)",
                  value: value,
                })
              );
            });
          return (
            ((("object" === typeof input &&
              null !== input &&
              false === Array.isArray(input)) ||
              $guard(true, {
                path: _path + "",
                expected: "ObjectDynamic",
                value: input,
              })) &&
              $ao0(input, _path + "", true)) ||
            $guard(true, {
              path: _path + "",
              expected: "ObjectDynamic",
              value: input,
            })
          );
        })(input, "$input", true);
      return input;
    };
    input = JSON.parse(input);
    return assert(input, errorFactory) as any;
  })(input),
);
