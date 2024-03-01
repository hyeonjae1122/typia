import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertClone } from "../../../internal/_test_misc_assertClone";
import { AtomicClass } from "../../../structures/AtomicClass";

export const test_misc_createAssertClone_AtomicClass = _test_misc_assertClone(
  TypeGuardError,
)("AtomicClass")<AtomicClass>(AtomicClass)(
  (
    input: any,
    errorFactory?: import("typia").TypeGuardError.IProps,
  ): typia.Resolved<AtomicClass> => {
    const assert = (
      input: any,
      errorFactory?: import("typia").TypeGuardError.IProps,
    ): AtomicClass => {
      const $guard = (typia.misc.createAssertClone as any).guard(errorFactory);
      const __is = (input: any): input is AtomicClass => {
        return (
          Array.isArray(input) &&
          input.length === 9 &&
          ("boolean" === typeof input[0] || input[0] instanceof Boolean) &&
          null !== input[1] &&
          undefined !== input[1] &&
          ("boolean" === typeof input[1] || input[1] instanceof Boolean) &&
          null !== input[2] &&
          undefined !== input[2] &&
          ("boolean" === typeof input[2] || input[2] instanceof Boolean) &&
          ("number" === typeof input[3] || input[3] instanceof Number) &&
          null !== input[4] &&
          undefined !== input[4] &&
          ("number" === typeof input[4] || input[4] instanceof Number) &&
          null !== input[5] &&
          undefined !== input[5] &&
          ("number" === typeof input[5] || input[5] instanceof Number) &&
          ("string" === typeof input[6] || input[6] instanceof String) &&
          null !== input[7] &&
          undefined !== input[7] &&
          ("string" === typeof input[7] || input[7] instanceof String) &&
          null !== input[8] &&
          undefined !== input[8] &&
          ("string" === typeof input[8] || input[8] instanceof String)
        );
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is AtomicClass => {
          return (
            ((Array.isArray(input) ||
              $guard(true, {
                path: _path + "",
                expected: "AtomicClass",
                value: input,
              })) &&
              (input.length === 9 ||
                $guard(true, {
                  path: _path + "",
                  expected:
                    '[Boolean, (Boolean | false), (Boolean | boolean), Number, (1 | Number), (Number | number), String, ("characters" | String), (String | string)]',
                  value: input,
                })) &&
              ("boolean" === typeof input[0] ||
                input[0] instanceof Boolean ||
                $guard(true, {
                  path: _path + "[0]",
                  expected: "Boolean",
                  value: input[0],
                })) &&
              (null !== input[1] ||
                $guard(true, {
                  path: _path + "[1]",
                  expected: "(Boolean | false)",
                  value: input[1],
                })) &&
              (undefined !== input[1] ||
                $guard(true, {
                  path: _path + "[1]",
                  expected: "(Boolean | false)",
                  value: input[1],
                })) &&
              ("boolean" === typeof input[1] ||
                input[1] instanceof Boolean ||
                $guard(true, {
                  path: _path + "[1]",
                  expected: "(Boolean | false)",
                  value: input[1],
                })) &&
              (null !== input[2] ||
                $guard(true, {
                  path: _path + "[2]",
                  expected: "(Boolean | boolean)",
                  value: input[2],
                })) &&
              (undefined !== input[2] ||
                $guard(true, {
                  path: _path + "[2]",
                  expected: "(Boolean | boolean)",
                  value: input[2],
                })) &&
              ("boolean" === typeof input[2] ||
                input[2] instanceof Boolean ||
                $guard(true, {
                  path: _path + "[2]",
                  expected: "(Boolean | boolean)",
                  value: input[2],
                })) &&
              ("number" === typeof input[3] ||
                input[3] instanceof Number ||
                $guard(true, {
                  path: _path + "[3]",
                  expected: "Number",
                  value: input[3],
                })) &&
              (null !== input[4] ||
                $guard(true, {
                  path: _path + "[4]",
                  expected: "(1 | Number)",
                  value: input[4],
                })) &&
              (undefined !== input[4] ||
                $guard(true, {
                  path: _path + "[4]",
                  expected: "(1 | Number)",
                  value: input[4],
                })) &&
              ("number" === typeof input[4] ||
                input[4] instanceof Number ||
                $guard(true, {
                  path: _path + "[4]",
                  expected: "(1 | Number)",
                  value: input[4],
                })) &&
              (null !== input[5] ||
                $guard(true, {
                  path: _path + "[5]",
                  expected: "(Number | number)",
                  value: input[5],
                })) &&
              (undefined !== input[5] ||
                $guard(true, {
                  path: _path + "[5]",
                  expected: "(Number | number)",
                  value: input[5],
                })) &&
              ("number" === typeof input[5] ||
                input[5] instanceof Number ||
                $guard(true, {
                  path: _path + "[5]",
                  expected: "(Number | number)",
                  value: input[5],
                })) &&
              ("string" === typeof input[6] ||
                input[6] instanceof String ||
                $guard(true, {
                  path: _path + "[6]",
                  expected: "String",
                  value: input[6],
                })) &&
              (null !== input[7] ||
                $guard(true, {
                  path: _path + "[7]",
                  expected: '("characters" | String)',
                  value: input[7],
                })) &&
              (undefined !== input[7] ||
                $guard(true, {
                  path: _path + "[7]",
                  expected: '("characters" | String)',
                  value: input[7],
                })) &&
              ("string" === typeof input[7] ||
                input[7] instanceof String ||
                $guard(true, {
                  path: _path + "[7]",
                  expected: '("characters" | String)',
                  value: input[7],
                })) &&
              (null !== input[8] ||
                $guard(true, {
                  path: _path + "[8]",
                  expected: "(String | string)",
                  value: input[8],
                })) &&
              (undefined !== input[8] ||
                $guard(true, {
                  path: _path + "[8]",
                  expected: "(String | string)",
                  value: input[8],
                })) &&
              ("string" === typeof input[8] ||
                input[8] instanceof String ||
                $guard(true, {
                  path: _path + "[8]",
                  expected: "(String | string)",
                  value: input[8],
                }))) ||
            $guard(true, {
              path: _path + "",
              expected: "AtomicClass",
              value: input,
            })
          );
        })(input, "$input", true);
      return input;
    };
    const clone = (input: AtomicClass): typia.Resolved<AtomicClass> => {
      return Array.isArray(input) &&
        input.length === 9 &&
        ("boolean" === typeof input[0] || input[0] instanceof Boolean) &&
        null !== input[1] &&
        undefined !== input[1] &&
        ("boolean" === typeof input[1] || input[1] instanceof Boolean) &&
        null !== input[2] &&
        undefined !== input[2] &&
        ("boolean" === typeof input[2] || input[2] instanceof Boolean) &&
        ("number" === typeof input[3] || input[3] instanceof Number) &&
        null !== input[4] &&
        undefined !== input[4] &&
        ("number" === typeof input[4] || input[4] instanceof Number) &&
        null !== input[5] &&
        undefined !== input[5] &&
        ("number" === typeof input[5] || input[5] instanceof Number) &&
        ("string" === typeof input[6] || input[6] instanceof String) &&
        null !== input[7] &&
        undefined !== input[7] &&
        ("string" === typeof input[7] || input[7] instanceof String) &&
        null !== input[8] &&
        undefined !== input[8] &&
        ("string" === typeof input[8] || input[8] instanceof String)
        ? ([
            input[0] instanceof Boolean
              ? input[0].valueOf()
              : (input[0] as any),
            input[1] instanceof Boolean
              ? input[1].valueOf()
              : (input[1] as any),
            input[2] instanceof Boolean
              ? input[2].valueOf()
              : (input[2] as any),
            input[3] instanceof Number ? input[3].valueOf() : (input[3] as any),
            input[4] instanceof Number ? input[4].valueOf() : (input[4] as any),
            input[5] instanceof Number ? input[5].valueOf() : (input[5] as any),
            input[6] instanceof String ? input[6].valueOf() : (input[6] as any),
            input[7] instanceof String ? input[7].valueOf() : (input[7] as any),
            input[8] instanceof String ? input[8].valueOf() : (input[8] as any),
          ] as any)
        : (input as any);
    };
    assert(input, errorFactory);
    const output = clone(input);
    return output;
  },
);
