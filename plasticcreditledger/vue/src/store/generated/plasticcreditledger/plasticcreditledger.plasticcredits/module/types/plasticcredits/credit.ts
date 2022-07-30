/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "plasticcreditledger.plasticcredits";

export interface Credit {
  index: string;
  issuer: string;
  collector: string;
  owner: string;
  material: string;
  description: string;
  image: string;
  lat: number;
  lng: number;
}

const baseCredit: object = {
  index: "",
  issuer: "",
  collector: "",
  owner: "",
  material: "",
  description: "",
  image: "",
  lat: 0,
  lng: 0,
};

export const Credit = {
  encode(message: Credit, writer: Writer = Writer.create()): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.issuer !== "") {
      writer.uint32(18).string(message.issuer);
    }
    if (message.collector !== "") {
      writer.uint32(26).string(message.collector);
    }
    if (message.owner !== "") {
      writer.uint32(34).string(message.owner);
    }
    if (message.material !== "") {
      writer.uint32(42).string(message.material);
    }
    if (message.description !== "") {
      writer.uint32(50).string(message.description);
    }
    if (message.image !== "") {
      writer.uint32(58).string(message.image);
    }
    if (message.lat !== 0) {
      writer.uint32(65).double(message.lat);
    }
    if (message.lng !== 0) {
      writer.uint32(73).double(message.lng);
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
          message.issuer = reader.string();
          break;
        case 3:
          message.collector = reader.string();
          break;
        case 4:
          message.owner = reader.string();
          break;
        case 5:
          message.material = reader.string();
          break;
        case 6:
          message.description = reader.string();
          break;
        case 7:
          message.image = reader.string();
          break;
        case 8:
          message.lat = reader.double();
          break;
        case 9:
          message.lng = reader.double();
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
    if (object.issuer !== undefined && object.issuer !== null) {
      message.issuer = String(object.issuer);
    } else {
      message.issuer = "";
    }
    if (object.collector !== undefined && object.collector !== null) {
      message.collector = String(object.collector);
    } else {
      message.collector = "";
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
    if (object.lat !== undefined && object.lat !== null) {
      message.lat = Number(object.lat);
    } else {
      message.lat = 0;
    }
    if (object.lng !== undefined && object.lng !== null) {
      message.lng = Number(object.lng);
    } else {
      message.lng = 0;
    }
    return message;
  },

  toJSON(message: Credit): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.issuer !== undefined && (obj.issuer = message.issuer);
    message.collector !== undefined && (obj.collector = message.collector);
    message.owner !== undefined && (obj.owner = message.owner);
    message.material !== undefined && (obj.material = message.material);
    message.description !== undefined &&
      (obj.description = message.description);
    message.image !== undefined && (obj.image = message.image);
    message.lat !== undefined && (obj.lat = message.lat);
    message.lng !== undefined && (obj.lng = message.lng);
    return obj;
  },

  fromPartial(object: DeepPartial<Credit>): Credit {
    const message = { ...baseCredit } as Credit;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    if (object.issuer !== undefined && object.issuer !== null) {
      message.issuer = object.issuer;
    } else {
      message.issuer = "";
    }
    if (object.collector !== undefined && object.collector !== null) {
      message.collector = object.collector;
    } else {
      message.collector = "";
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
    if (object.lat !== undefined && object.lat !== null) {
      message.lat = object.lat;
    } else {
      message.lat = 0;
    }
    if (object.lng !== undefined && object.lng !== null) {
      message.lng = object.lng;
    } else {
      message.lng = 0;
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
