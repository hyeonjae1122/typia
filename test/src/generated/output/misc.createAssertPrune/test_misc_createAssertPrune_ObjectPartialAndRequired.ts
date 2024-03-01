import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertPrune } from "../../../internal/_test_misc_assertPrune";
import { ObjectPartialAndRequired } from "../../../structures/ObjectPartialAndRequired";

export const test_misc_createAssertPrune_ObjectPartialAndRequired =
  _test_misc_assertPrune(TypeGuardError)(
    "ObjectPartialAndRequired",
  )<ObjectPartialAndRequired>(ObjectPartialAndRequired)(
    (
      input: any,
      errorFactory?: import("typia").TypeGuardError.IProps,
    ): ObjectPartialAndRequired => {
      const assert = (
        input: any,
        errorFactory?: import("typia").TypeGuardError.IProps,
      ): ObjectPartialAndRequired => {
        const $guard = (typia.misc.createAssertPrune as any).guard(
          errorFactory,
        );
        const __is = (input: any): input is ObjectPartialAndRequired => {
          const $io0 = (input: any): boolean =>
            (undefined === input.string || "string" === typeof input.string) &&
            (undefined === input.number ||
              ("number" === typeof input.number &&
                Number.isFinite(input.number))) &&
            (undefined === input.boolean ||
              "boolean" === typeof input.boolean) &&
            (null === input.object ||
              ("object" === typeof input.object &&
                null !== input.object &&
                $io0(input.object))) &&
            Array.isArray(input.array) &&
            input.array.every(
              (elem: any) => "number" === typeof elem && Number.isFinite(elem),
            );
          return "object" === typeof input && null !== input && $io0(input);
        };
        if (false === __is(input))
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is ObjectPartialAndRequired => {
            const $ao0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              (undefined === input.string ||
                "string" === typeof input.string ||
                $guard(_exceptionable, {
                  path: _path + ".string",
                  expected: "(string | undefined)",
                  value: input.string,
                })) &&
              (undefined === input.number ||
                ("number" === typeof input.number &&
                  Number.isFinite(input.number)) ||
                $guard(_exceptionable, {
                  path: _path + ".number",
                  expected: "(number | undefined)",
                  value: input.number,
                })) &&
              (undefined === input.boolean ||
                "boolean" === typeof input.boolean ||
                $guard(_exceptionable, {
                  path: _path + ".boolean",
                  expected: "(boolean | undefined)",
                  value: input.boolean,
                })) &&
              (null === input.object ||
                ((("object" === typeof input.object && null !== input.object) ||
                  $guard(_exceptionable, {
                    path: _path + ".object",
                    expected: "(ObjectPartialAndRequired | null)",
                    value: input.object,
                  })) &&
                  $ao0(
                    input.object,
                    _path + ".object",
                    true && _exceptionable,
                  )) ||
                $guard(_exceptionable, {
                  path: _path + ".object",
                  expected: "(ObjectPartialAndRequired | null)",
                  value: input.object,
                })) &&
              (((Array.isArray(input.array) ||
                $guard(_exceptionable, {
                  path: _path + ".array",
                  expected: "Array<number>",
                  value: input.array,
                })) &&
                input.array.every(
                  (elem: any, _index1: number) =>
                    ("number" === typeof elem && Number.isFinite(elem)) ||
                    $guard(_exceptionable, {
                      path: _path + ".array[" + _index1 + "]",
                      expected: "number",
                      value: elem,
                    }),
                )) ||
                $guard(_exceptionable, {
                  path: _path + ".array",
                  expected: "Array<number>",
                  value: input.array,
                }));
            return (
              ((("object" === typeof input && null !== input) ||
                $guard(true, {
                  path: _path + "",
                  expected: "ObjectPartialAndRequired",
                  value: input,
                })) &&
                $ao0(input, _path + "", true)) ||
              $guard(true, {
                path: _path + "",
                expected: "ObjectPartialAndRequired",
                value: input,
              })
            );
          })(input, "$input", true);
        return input;
      };
      const prune = (input: ObjectPartialAndRequired): void => {
        const $io0 = (input: any): boolean =>
          (undefined === input.string || "string" === typeof input.string) &&
          (undefined === input.number || "number" === typeof input.number) &&
          (undefined === input.boolean || "boolean" === typeof input.boolean) &&
          (null === input.object ||
            ("object" === typeof input.object &&
              null !== input.object &&
              $io0(input.object))) &&
          Array.isArray(input.array) &&
          input.array.every((elem: any) => "number" === typeof elem);
        const $po0 = (input: any): any => {
          if ("object" === typeof input.object && null !== input.object)
            $po0(input.object);
          for (const key of Object.keys(input)) {
            if (
              "string" === key ||
              "number" === key ||
              "boolean" === key ||
              "object" === key ||
              "array" === key
            )
              continue;
            delete input[key];
          }
        };
        if ("object" === typeof input && null !== input) $po0(input);
      };
      assert(input, errorFactory);
      prune(input);
      return input;
    },
  );
