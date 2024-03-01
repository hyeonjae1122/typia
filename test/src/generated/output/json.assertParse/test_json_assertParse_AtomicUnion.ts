import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../../internal/_test_json_assertParse";
import { AtomicUnion } from "../../../structures/AtomicUnion";

export const test_json_assertParse_AtomicUnion = _test_json_assertParse(
  TypeGuardError,
)("AtomicUnion")<AtomicUnion>(AtomicUnion)((input) =>
  ((
    input: string,
    errorFactory?: import("typia").TypeGuardError.IProps,
  ): typia.Primitive<AtomicUnion> => {
    const assert = (
      input: any,
      errorFactory?: import("typia").TypeGuardError.IProps,
    ): AtomicUnion => {
      const $guard = (typia.json.assertParse as any).guard(errorFactory);
      const __is = (input: any): input is AtomicUnion => {
        return (
          Array.isArray(input) &&
          input.every(
            (elem: any) =>
              null === elem ||
              "string" === typeof elem ||
              ("number" === typeof elem && Number.isFinite(elem)) ||
              "boolean" === typeof elem,
          )
        );
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is AtomicUnion => {
          return (
            ((Array.isArray(input) ||
              $guard(true, {
                path: _path + "",
                expected: "AtomicUnion",
                value: input,
              })) &&
              input.every(
                (elem: any, _index1: number) =>
                  null === elem ||
                  "string" === typeof elem ||
                  ("number" === typeof elem && Number.isFinite(elem)) ||
                  "boolean" === typeof elem ||
                  $guard(true, {
                    path: _path + "[" + _index1 + "]",
                    expected: "(boolean | null | number | string)",
                    value: elem,
                  }),
              )) ||
            $guard(true, {
              path: _path + "",
              expected: "AtomicUnion",
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
