import typia from "typia";

import { CustomGuardError } from "../../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../../internal/_test_json_assertStringify";
import { ObjectDescription } from "../../../structures/ObjectDescription";

export const test_json_createAssertStringifyCustom_ObjectDescription =
  _test_json_assertStringify(CustomGuardError)(
    "ObjectDescription",
  )<ObjectDescription>(ObjectDescription)(
    (
      input: any,
      errorFactory: import("typia").TypeGuardError.IProps = (p) =>
        new CustomGuardError(p),
    ): string => {
      const assert = (
        input: any,
        errorFactory?: import("typia").TypeGuardError.IProps,
      ): ObjectDescription => {
        const $guard = (typia.json.createAssertStringify as any).guard(
          errorFactory,
        );
        const __is = (input: any): input is ObjectDescription => {
          const $io0 = (input: any): boolean =>
            "string" === typeof input.id &&
            /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
              input.id,
            ) &&
            "boolean" === typeof input.deprecated &&
            "string" === typeof input.title &&
            Array.isArray(input.descriptions) &&
            input.descriptions.every((elem: any) => "string" === typeof elem) &&
            "number" === typeof input.newLine &&
            Number.isFinite(input.newLine);
          return "object" === typeof input && null !== input && $io0(input);
        };
        if (false === __is(input))
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is ObjectDescription => {
            const $ao0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              (("string" === typeof input.id &&
                (/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
                  input.id,
                ) ||
                  $guard(_exceptionable, {
                    path: _path + ".id",
                    expected: 'string & Format<"uuid">',
                    value: input.id,
                  }))) ||
                $guard(_exceptionable, {
                  path: _path + ".id",
                  expected: '(string & Format<"uuid">)',
                  value: input.id,
                })) &&
              ("boolean" === typeof input.deprecated ||
                $guard(_exceptionable, {
                  path: _path + ".deprecated",
                  expected: "boolean",
                  value: input.deprecated,
                })) &&
              ("string" === typeof input.title ||
                $guard(_exceptionable, {
                  path: _path + ".title",
                  expected: "string",
                  value: input.title,
                })) &&
              (((Array.isArray(input.descriptions) ||
                $guard(_exceptionable, {
                  path: _path + ".descriptions",
                  expected: "Array<string>",
                  value: input.descriptions,
                })) &&
                input.descriptions.every(
                  (elem: any, _index1: number) =>
                    "string" === typeof elem ||
                    $guard(_exceptionable, {
                      path: _path + ".descriptions[" + _index1 + "]",
                      expected: "string",
                      value: elem,
                    }),
                )) ||
                $guard(_exceptionable, {
                  path: _path + ".descriptions",
                  expected: "Array<string>",
                  value: input.descriptions,
                })) &&
              (("number" === typeof input.newLine &&
                Number.isFinite(input.newLine)) ||
                $guard(_exceptionable, {
                  path: _path + ".newLine",
                  expected: "number",
                  value: input.newLine,
                }));
            return (
              ((("object" === typeof input && null !== input) ||
                $guard(true, {
                  path: _path + "",
                  expected: "ObjectDescription",
                  value: input,
                })) &&
                $ao0(input, _path + "", true)) ||
              $guard(true, {
                path: _path + "",
                expected: "ObjectDescription",
                value: input,
              })
            );
          })(input, "$input", true);
        return input;
      };
      const stringify = (input: ObjectDescription): string => {
        const $string = (typia.json.createAssertStringify as any).string;
        const $number = (typia.json.createAssertStringify as any).number;
        const $so0 = (input: any): any =>
          `{"id":${$string(input.id)},"deprecated":${
            input.deprecated
          },"title":${$string(
            input.title,
          )},"descriptions":${`[${input.descriptions
            .map((elem: any) => $string(elem))
            .join(",")}]`},"newLine":${$number(input.newLine)}}`;
        return $so0(input);
      };
      return stringify(assert(input, errorFactory));
    },
  );
