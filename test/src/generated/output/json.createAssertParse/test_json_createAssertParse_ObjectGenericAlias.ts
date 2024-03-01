import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../../internal/_test_json_assertParse";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";

export const test_json_createAssertParse_ObjectGenericAlias =
  _test_json_assertParse(TypeGuardError)(
    "ObjectGenericAlias",
  )<ObjectGenericAlias>(ObjectGenericAlias)(
    (
      input: string,
      errorFactory?: import("typia").TypeGuardError.IProps,
    ): typia.Primitive<ObjectGenericAlias> => {
      const assert = (
        input: any,
        errorFactory?: import("typia").TypeGuardError.IProps,
      ): ObjectGenericAlias => {
        const $guard = (typia.json.createAssertParse as any).guard(
          errorFactory,
        );
        const __is = (input: any): input is ObjectGenericAlias => {
          return (
            "object" === typeof input &&
            null !== input &&
            "string" === typeof (input as any).value
          );
        };
        if (false === __is(input))
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is ObjectGenericAlias => {
            const $ao0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              "string" === typeof input.value ||
              $guard(_exceptionable, {
                path: _path + ".value",
                expected: "string",
                value: input.value,
              });
            return (
              ((("object" === typeof input && null !== input) ||
                $guard(true, {
                  path: _path + "",
                  expected: "ObjectGenericAlias.Alias",
                  value: input,
                })) &&
                $ao0(input, _path + "", true)) ||
              $guard(true, {
                path: _path + "",
                expected: "ObjectGenericAlias.Alias",
                value: input,
              })
            );
          })(input, "$input", true);
        return input;
      };
      input = JSON.parse(input);
      return assert(input, errorFactory) as any;
    },
  );
