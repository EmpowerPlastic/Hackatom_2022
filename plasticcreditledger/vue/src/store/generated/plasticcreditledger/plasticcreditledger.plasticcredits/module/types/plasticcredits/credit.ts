/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "plasticcreditledger.plasticcredits";

export interface Credit {
  index: string;
  owner: string;
  material: string;
  description: string;
  image: string;
}

const baseCredit: object = {
  index: "",
  owner: "",
  material: "",
  description: "",
  image: "",
};

export const Credit = {
  encode(message: Credit, writer: Writer = Writer.create()): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.material !== "") {
      writer.uint32(26).string(message.material);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.image !== "") {
      writer.uint32(42).string(message.image);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Credit {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCredit } as Credit;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.material = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.image = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Credit {
    const message = { ...baseCredit } as Credit;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    if (object.material !== undefined && object.material !== null) {
      message.material = String(object.material);
    } else {
      message.material = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.image !== undefined && object.image !== null) {
      message.image = String(object.image);
    } else {
      message.image = "";
    }
    return message;
  },

  toJSON(message: Credit): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.owner !== undefined && (obj.owner = message.owner);
    message.material !== undefined && (obj.material = message.material);
    message.description !== undefined &&
      (obj.description = message.description);
    message.image !== undefined && (obj.image = message.image);
    return obj;
  },

  fromPartial(object: DeepPartial<Credit>): Credit {
    const message = { ...baseCredit } as Credit;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
    }
    if (object.material !== undefined && object.material !== null) {
      message.material = object.material;
    } else {
      message.material = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.image !== undefined && object.image !== null) {
      message.image = object.image;
    } else {
      message.image = "";
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
