/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "plasticcreditledger.onestring";

export interface Thestring {
  valueofthestring: string;
  creator: string;
}

const baseThestring: object = { valueofthestring: "", creator: "" };

export const Thestring = {
  encode(message: Thestring, writer: Writer = Writer.create()): Writer {
    if (message.valueofthestring !== "") {
      writer.uint32(10).string(message.valueofthestring);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Thestring {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseThestring } as Thestring;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.valueofthestring = reader.string();
          break;
        case 2:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Thestring {
    const message = { ...baseThestring } as Thestring;
    if (
      object.valueofthestring !== undefined &&
      object.valueofthestring !== null
    ) {
      message.valueofthestring = String(object.valueofthestring);
    } else {
      message.valueofthestring = "";
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: Thestring): unknown {
    const obj: any = {};
    message.valueofthestring !== undefined &&
      (obj.valueofthestring = message.valueofthestring);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<Thestring>): Thestring {
    const message = { ...baseThestring } as Thestring;
    if (
      object.valueofthestring !== undefined &&
      object.valueofthestring !== null
    ) {
      message.valueofthestring = object.valueofthestring;
    } else {
      message.valueofthestring = "";
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
