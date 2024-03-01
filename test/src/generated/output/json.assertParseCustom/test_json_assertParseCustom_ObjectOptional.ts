import typia from "typia";

import { CustomGuardError } from "../../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../../internal/_test_json_assertParse";
import { ObjectOptional } from "../../../structures/ObjectOptional";

export const test_json_assertParseCustom_ObjectOptional =
  _test_json_assertParse(CustomGuardError)("ObjectOptional")<ObjectOptional>(
    ObjectOptional,
  )((input) =>
    ((
      input: string,
      errorFactory?: import("typia").TypeGuardError.IProps,
    ): typia.Primitive<ObjectOptional> => {
      const assert = (
        input: any,
        errorFactory?: import("typia").TypeGuardError.IProps,
      ): ObjectOptional => {
        const $guard = (typia.json.assertParse as any).guard(errorFactory);
        const __is = (input: any): input is ObjectOptional => {
          const $io0 = (input: any): boolean =>
            (undefined === input.id || "string" === typeof input.id) &&
            (undefined === input.name || "string" === typeof input.name) &&
            (undefined === input.email || "string" === typeof input.email) &&
            (undefined === input.sequence ||
              ("number" === typeof input.sequence &&
                Number.isFinite(input.sequence)));
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
          ): input is ObjectOptional => {
            const $ao0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              (undefined === input.id ||
                "string" === typeof input.id ||
                $guard(_exceptionable, {
                  path: _path + ".id",
                  expected: "(string | undefined)",
                  value: input.id,
                })) &&
              (undefined === input.name ||
                "string" === typeof input.name ||
                $guard(_exceptionable, {
                  path: _path + ".name",
                  expected: "(string | undefined)",
                  value: input.name,
                })) &&
              (undefined === input.email ||
                "string" === typeof input.email ||
                $guard(_exceptionable, {
                  path: _path + ".email",
                  expected: "(string | undefined)",
                  value: input.email,
                })) &&
              (undefined === input.sequence ||
                ("number" === typeof input.sequence &&
                  Number.isFinite(input.sequence)) ||
                $guard(_exceptionable, {
                  path: _path + ".sequence",
                  expected: "(number | undefined)",
                  value: input.sequence,
                }));
            return (
              ((("object" === typeof input &&
                null !== input &&
                false === Array.isArray(input)) ||
                $guard(true, {
                  path: _path + "",
                  expected: "ObjectOptional",
                  value: input,
                })) &&
                $ao0(input, _path + "", true)) ||
              $guard(true, {
                path: _path + "",
                expected: "ObjectOptional",
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
