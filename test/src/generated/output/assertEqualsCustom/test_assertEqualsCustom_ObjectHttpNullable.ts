import typia from "typia";

import { CustomGuardError } from "../../../internal/CustomGuardError";
import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { ObjectHttpNullable } from "../../../structures/ObjectHttpNullable";

export const test_assertEqualsCustom_ObjectHttpNullable = _test_assertEquals(
  CustomGuardError,
)("ObjectHttpNullable")<ObjectHttpNullable>(ObjectHttpNullable)((input) =>
  ((
    input: any,
    errorFactory?: import("typia").TypeGuardError.IProps,
  ): ObjectHttpNullable => {
    const $guard = (typia.assertEquals as any).guard(errorFactory);
    const __is = (
      input: any,
      _exceptionable: boolean = true,
    ): input is ObjectHttpNullable => {
      const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
        (null === input.boolean || "boolean" === typeof input.boolean) &&
        (null === input.bigint || "bigint" === typeof input.bigint) &&
        (null === input.number ||
          ("number" === typeof input.number &&
            Number.isFinite(input.number) &&
            1 <= input.number)) &&
        (null === input.string || "string" === typeof input.string) &&
        (null === input.constantBoolean || true === input.constantBoolean) &&
        (null === input.constantBigint ||
          BigInt(1) === input.constantBigint ||
          BigInt(2) === input.constantBigint ||
          BigInt(3) === input.constantBigint) &&
        (null === input.constantNumber ||
          3 === input.constantNumber ||
          2 === input.constantNumber ||
          1 === input.constantNumber) &&
        (null === input.constantString ||
          "three" === input.constantString ||
          "two" === input.constantString ||
          "one" === input.constantString) &&
        (null === input.nullableArray ||
          (Array.isArray(input.nullableArray) &&
            input.nullableArray.every(
              (elem: any, _index1: number) =>
                "number" === typeof elem && Number.isFinite(elem),
            ))) &&
        (9 === Object.keys(input).length ||
          Object.keys(input).every((key: any) => {
            if (
              [
                "boolean",
                "bigint",
                "number",
                "string",
                "constantBoolean",
                "constantBigint",
                "constantNumber",
                "constantString",
                "nullableArray",
              ].some((prop: any) => key === prop)
            )
              return true;
            const value = input[key];
            if (undefined === value) return true;
            return false;
          }));
      return "object" === typeof input && null !== input && $io0(input, true);
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is ObjectHttpNullable => {
        const $join = (typia.assertEquals as any).join;
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (null === input.boolean ||
            "boolean" === typeof input.boolean ||
            $guard(_exceptionable, {
              path: _path + ".boolean",
              expected: "(boolean | null)",
              value: input.boolean,
            })) &&
          (null === input.bigint ||
            "bigint" === typeof input.bigint ||
            $guard(_exceptionable, {
              path: _path + ".bigint",
              expected: "(bigint | null)",
              value: input.bigint,
            })) &&
          (null === input.number ||
            ("number" === typeof input.number &&
              (Number.isFinite(input.number) ||
                $guard(_exceptionable, {
                  path: _path + ".number",
                  expected: "number",
                  value: input.number,
                })) &&
              (1 <= input.number ||
                $guard(_exceptionable, {
                  path: _path + ".number",
                  expected: "number & Minimum<1>",
                  value: input.number,
                }))) ||
            $guard(_exceptionable, {
              path: _path + ".number",
              expected: "((number & Minimum<1>) | null)",
              value: input.number,
            })) &&
          (null === input.string ||
            "string" === typeof input.string ||
            $guard(_exceptionable, {
              path: _path + ".string",
              expected: "(null | string)",
              value: input.string,
            })) &&
          (null === input.constantBoolean ||
            true === input.constantBoolean ||
            $guard(_exceptionable, {
              path: _path + ".constantBoolean",
              expected: "(null | true)",
              value: input.constantBoolean,
            })) &&
          (null === input.constantBigint ||
            BigInt(1) === input.constantBigint ||
            BigInt(2) === input.constantBigint ||
            BigInt(3) === input.constantBigint ||
            $guard(_exceptionable, {
              path: _path + ".constantBigint",
              expected: "(1 | 2 | 3 | null)",
              value: input.constantBigint,
            })) &&
          (null === input.constantNumber ||
            3 === input.constantNumber ||
            2 === input.constantNumber ||
            1 === input.constantNumber ||
            $guard(_exceptionable, {
              path: _path + ".constantNumber",
              expected: "(1 | 2 | 3 | null)",
              value: input.constantNumber,
            })) &&
          (null === input.constantString ||
            "three" === input.constantString ||
            "two" === input.constantString ||
            "one" === input.constantString ||
            $guard(_exceptionable, {
              path: _path + ".constantString",
              expected: '("one" | "three" | "two" | null)',
              value: input.constantString,
            })) &&
          (null === input.nullableArray ||
            ((Array.isArray(input.nullableArray) ||
              $guard(_exceptionable, {
                path: _path + ".nullableArray",
                expected: "(Array<number> | null)",
                value: input.nullableArray,
              })) &&
              input.nullableArray.every(
                (elem: any, _index1: number) =>
                  ("number" === typeof elem && Number.isFinite(elem)) ||
                  $guard(_exceptionable, {
                    path: _path + ".nullableArray[" + _index1 + "]",
                    expected: "number",
                    value: elem,
                  }),
              )) ||
            $guard(_exceptionable, {
              path: _path + ".nullableArray",
              expected: "(Array<number> | null)",
              value: input.nullableArray,
            })) &&
          (9 === Object.keys(input).length ||
            false === _exceptionable ||
            Object.keys(input).every((key: any) => {
              if (
                [
                  "boolean",
                  "bigint",
                  "number",
                  "string",
                  "constantBoolean",
                  "constantBigint",
                  "constantNumber",
                  "constantString",
                  "nullableArray",
                ].some((prop: any) => key === prop)
              )
                return true;
              const value = input[key];
              if (undefined === value) return true;
              return $guard(_exceptionable, {
                path: _path + $join(key),
                expected: "undefined",
                value: value,
              });
            }));
        return (
          ((("object" === typeof input && null !== input) ||
            $guard(true, {
              path: _path + "",
              expected: "ObjectHttpNullable",
              value: input,
            })) &&
            $ao0(input, _path + "", true)) ||
          $guard(true, {
            path: _path + "",
            expected: "ObjectHttpNullable",
            value: input,
          })
        );
      })(input, "$input", true);
    return input;
  })(input, (p) => new CustomGuardError(p)),
);
