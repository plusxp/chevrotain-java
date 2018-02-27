"use strict";
const Parser = require("../src/index");

describe("classBody", () => {
  it("empty", () => {
    expect(Parser.parse("{}", parser => parser.classBody())).toEqual({
      type: "CLASS_BODY",
      declarations: []
    });
  });

  it("one declaration", () => {
    expect(
      Parser.parse("{ void a() {} }", parser => parser.classBody())
    ).toEqual({
      type: "CLASS_BODY",
      declarations: [
        {
          type: "CLASS_BODY_MEMBER_DECLARATION",
          modifiers: [],
          declaration: {
            type: "METHOD_DECLARATION",
            typeType: {
              type: "VOID"
            },
            name: {
              type: "IDENTIFIER",
              value: "a"
            },
            parameters: {
              type: "FORMAL_PARAMETERS",
              parameters: []
            },
            dimensions: [],
            throws: undefined,
            body: {
              type: "BLOCK",
              statements: []
            }
          },
          followedEmptyLine: false
        }
      ]
    });
  });

  it("multiple declarations", () => {
    expect(
      Parser.parse("{ void a() {} {} }", parser => parser.classBody())
    ).toEqual({
      type: "CLASS_BODY",
      declarations: [
        {
          type: "CLASS_BODY_MEMBER_DECLARATION",
          modifiers: [],
          declaration: {
            type: "METHOD_DECLARATION",
            typeType: {
              type: "VOID"
            },
            name: {
              type: "IDENTIFIER",
              value: "a"
            },
            parameters: {
              type: "FORMAL_PARAMETERS",
              parameters: []
            },
            dimensions: [],
            throws: undefined,
            body: {
              type: "BLOCK",
              statements: []
            }
          },
          followedEmptyLine: false
        },
        {
          type: "CLASS_BODY_BLOCK",
          static: false,
          block: {
            type: "BLOCK",
            statements: []
          }
        }
      ]
    });
  });
});
